<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-API-Key");

// Simple API Key Auth
define('API_KEY', 'your_secret_key');
$api_key = isset($_SERVER['HTTP_X_API_KEY']) ? $_SERVER['HTTP_X_API_KEY'] : '';

require_once '../db.php';
require_once 'Food.php';

$conn = connect_db();
$food = new Food($conn);

$method = $_SERVER['REQUEST_METHOD'];

// Get the path info after index.php
$path_info = isset($_SERVER['PATH_INFO']) ? trim($_SERVER['PATH_INFO'], '/') : '';
$path_parts = explode('/', $path_info);


// Basic routing - look for 'foods' as the first part after index.php
if (!isset($path_parts[0]) || $path_parts[0] !== 'foods') {
    http_response_code(404);
    echo json_encode(["message" => "Endpoint not found."]);
    exit();
}

// The ID would be the part after 'foods'
$id = isset($path_parts[1]) ? (int)$path_parts[1] : null;

// For methods other than GET, require an API key
if ($method !== 'GET' && $api_key !== API_KEY) {
    http_response_code(401);
    echo json_encode(["message" => "Unauthorized. Provide a valid X-API-Key header."]);
    exit();
}

switch ($method) {
    case 'GET':
        if ($id) {
            $food->id = $id;
            $result = $food->getOne();
            $num = $result->num_rows;

            if ($num > 0) {
                $row = $result->fetch_assoc();
                extract($row);
                $food_item = [
                    "id" => $id,
                    "name_en" => $name_en,
                    "name_ru" => $name_ru,
                    "name_az" => $name_az,
                    "description_en" => $description_en,
                    "description_ru" => $description_ru,
                    "description_az" => $description_az,
                    "price" => $price,
                    "image_url" => $image_url,
                    "category_name" => $category_name,
                    "is_available" => $is_available,
                    "created_at" => $created_at,
                    "updated_at" => $updated_at
                ];
                http_response_code(200);
                echo json_encode($food_item);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "Food item not found."]);
            }
        } else {
            $category = isset($_GET['category']) ? $_GET['category'] : null;
            $result = $food->getAll($category);
            $num = $result->num_rows;

            if ($num > 0) {
                $foods_arr = [];
                while ($row = $result->fetch_assoc()) {
                    extract($row);
                    $food_item = [
                        "id" => $id,
                        "name_en" => $name_en,
                        "name_ru" => $name_ru,
                        "name_az" => $name_az,
                        "description_en" => $description_en,
                        "description_ru" => $description_ru,
                        "description_az" => $description_az,
                        "price" => $price,
                        "image_url" => $image_url,
                        "category_name" => $category_name,
                        "is_available" => $is_available
                    ];
                    array_push($foods_arr, $food_item);
                }
                http_response_code(200);
                echo json_encode($foods_arr);
            } else {
                http_response_code(404);
                echo json_encode(["message" => "No food items found."]);
            }
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $image_file = isset($_FILES['image']) ? $_FILES['image'] : null;

        if (
            !empty($data->name_en) &&
            !empty($data->name_ru) &&
            !empty($data->name_az) &&
            !empty($data->price) &&
            !empty($data->category_name)
        ) {
            $food->name_en = $data->name_en;
            $food->name_ru = $data->name_ru;
            $food->name_az = $data->name_az;
            $food->price = $data->price;
            $food->description_en = isset($data->description_en) ? $data->description_en : '';
            $food->description_ru = isset($data->description_ru) ? $data->description_ru : '';
            $food->description_az = isset($data->description_az) ? $data->description_az : '';
            $food->category_name = $data->category_name;
            
            // Handle image upload
            if ($image_file && $image_file['error'] == 0) {
                $target_dir = "../uploads/food_images/";
                $image_name = uniqid() . "-" . basename($image_file["name"]);
                $target_file = $target_dir . $image_name;
                $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

                // Basic validation
                $check = getimagesize($image_file["tmp_name"]);
                if ($check === false) {
                     http_response_code(400);
                     echo json_encode(["message" => "File is not an image."]);
                     exit();
                }
                if ($image_file["size"] > 5000000) { // 5MB limit
                    http_response_code(400);
                    echo json_encode(["message" => "Sorry, your file is too large."]);
                    exit();
                }
                if (!in_array($imageFileType, ["jpg", "png", "jpeg", "gif"])) {
                    http_response_code(400);
                    echo json_encode(["message" => "Sorry, only JPG, JPEG, PNG & GIF files are allowed."]);
                    exit();
                }

                if (move_uploaded_file($image_file["tmp_name"], $target_file)) {
                    $food->image_url = "/uploads/food_images/" . $image_name;
                } else {
                    http_response_code(500);
                    echo json_encode(["message" => "Sorry, there was an error uploading your file."]);
                    exit();
                }
            } else {
                 $food->image_url = null;
            }


            if ($food->create()) {
                http_response_code(201);
                 $new_id = $conn->insert_id;
                echo json_encode(["message" => "Food item was created.", "id" => $new_id]);
            } else {
                http_response_code(503);
                echo json_encode(["message" => "Unable to create food item."]);
            }
        } else {
            http_response_code(400);
            echo json_encode(["message" => "Unable to create food item. Data is incomplete. 'name_en', 'name_ru', 'name_az', 'price', and 'category_name' are required."]);
        }
        break;

    case 'PUT':
         if (!$id) {
            http_response_code(400);
            echo json_encode(["message" => "No ID provided for update."]);
            exit();
        }
        $data = json_decode(file_get_contents("php://input"));
        
        // Check if item exists
        $food->id = $id;
        $result = $food->getOne();
        if ($result->num_rows == 0) {
             http_response_code(404);
             echo json_encode(["message" => "Food item not found."]);
             exit();
        }
        $existing_data = $result->fetch_assoc();

        $food->name_en = isset($data->name_en) ? $data->name_en : $existing_data['name_en'];
        $food->name_ru = isset($data->name_ru) ? $data->name_ru : $existing_data['name_ru'];
        $food->name_az = isset($data->name_az) ? $data->name_az : $existing_data['name_az'];
        $food->description_en = isset($data->description_en) ? $data->description_en : $existing_data['description_en'];
        $food->description_ru = isset($data->description_ru) ? $data->description_ru : $existing_data['description_ru'];
        $food->description_az = isset($data->description_az) ? $data->description_az : $existing_data['description_az'];
        $food->price = isset($data->price) ? $data->price : $existing_data['price'];
        $food->category_name = isset($data->category_name) ? $data->category_name : $existing_data['category_name'];
        $food->is_available = isset($data->is_available) ? $data->is_available : $existing_data['is_available'];
        $food->image_url = $existing_data['image_url']; // Default to old image

        // Note: Image updates via PUT with JSON is tricky. Usually, a separate POST to an /upload endpoint is better.
        // For simplicity, we'll assume the image_url is updated directly in the JSON payload if it changes.
        if (isset($data->image_url) && $data->image_url !== $existing_data['image_url']) {
             // If you were to handle a new file upload here, you'd delete the old file
             if ($existing_data['image_url'] && file_exists("..".$existing_data['image_url'])) {
                 unlink("..".$existing_data['image_url']);
             }
             $food->image_url = $data->image_url;
        }

        if ($food->update()) {
            http_response_code(200);
            echo json_encode(["message" => "Food item was updated."]);
        } else {
            http_response_code(503);
            echo json_encode(["message" => "Unable to update food item."]);
        }
        break;

    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode(["message" => "No ID provided for deletion."]);
            exit();
        }

        $food->id = $id;
        // First, get the item to find the image url
        $result = $food->getOne();
         if ($result->num_rows > 0) {
             $row = $result->fetch_assoc();
             $image_to_delete = $row['image_url'];

            if ($food->delete()) {
                 // After deleting from DB, delete the image file
                if ($image_to_delete && file_exists("..".$image_to_delete)) {
                    unlink("..".$image_to_delete);
                }
                http_response_code(200);
                echo json_encode(["message" => "Food item was deleted."]);
            } else {
                http_response_code(503);
                echo json_encode(["message" => "Unable to delete food item."]);
            }
         } else {
              http_response_code(404);
              echo json_encode(["message" => "Food item not found."]);
         }
        break;

    default:
        http_response_code(405);
        echo json_encode(["message" => "Method Not Allowed"]);
        break;
}

$conn->close();
?>