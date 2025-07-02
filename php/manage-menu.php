<?php
require_once 'db.php';
require_once 'api/Food.php';

$conn = connect_db();
$food_manager = new Food($conn);

function display_menu($result) {
    if ($result->num_rows > 0) {
        echo "+----+-------------------------+------------------+----------+
";
        echo "| ID | Name (English)          | Category         | Price    |
";
        echo "+----+-------------------------+------------------+----------+
";
        while ($row = $result->fetch_assoc()) {
            printf(
                "| %-2d | %-23s | %-16s | %-8.2f |
",
                $row['id'],
                substr($row['name_en'], 0, 23),
                substr($row['category_name'], 0, 16),
                $row['price']
            );
        }
        echo "+----+-------------------------+------------------+----------+
";
    } else {
        echo "No food items found.
";
    }
}

function get_input($prompt) {
    echo $prompt . " ";
    return trim(fgets(STDIN));
}

function add_food_item($food) {
    echo "--- Add New Food Item ---
";
    $food->name_en = get_input("Enter English Name:");
    $food->name_ru = get_input("Enter Russian Name:");
    $food->name_az = get_input("Enter Azerbaijani Name:");
    $food->description_en = get_input("Enter English Description:");
    $food->description_ru = get_input("Enter Russian Description:");
    $food->description_az = get_input("Enter Azerbaijani Description:");
    $food->price = get_input("Enter Price:");
    $food->category_name = get_input("Enter Category Name (e.g., salads, main_courses):");
    $food->image_url = get_input("Enter Image URL (optional):");

    if ($food->create()) {
        echo "Food item created successfully!
";
    } else {
        echo "Failed to create food item.
";
    }
}

function update_food_item($food) {
    echo "--- Update Food Item ---
";
    $id = get_input("Enter the ID of the food item to update:");
    $food->id = $id;
    $result = $food->getOne();
    if ($result->num_rows == 0) {
        echo "Food item with ID {$id} not found.
";
        return;
    }
    $existing_data = $result->fetch_assoc();

    echo "Enter new information (leave blank to keep current value):
";
    
    $food->name_en = get_input("English Name [{$existing_data['name_en']}]:") ?: $existing_data['name_en'];
    $food->name_ru = get_input("Russian Name [{$existing_data['name_ru']}]:") ?: $existing_data['name_ru'];
    $food->name_az = get_input("Azerbaijani Name [{$existing_data['name_az']}]:") ?: $existing_data['name_az'];
    $food->description_en = get_input("English Description [{$existing_data['description_en']}]:") ?: $existing_data['description_en'];
    $food->description_ru = get_input("Russian Description [{$existing_data['description_ru']}]:") ?: $existing_data['description_ru'];
    $food->description_az = get_input("Azerbaijani Description [{$existing_data['description_az']}]:") ?: $existing_data['description_az'];
    $food->price = get_input("Price [{$existing_data['price']}]:") ?: $existing_data['price'];
    $food->category_name = get_input("Category [{$existing_data['category_name']}]:") ?: $existing_data['category_name'];
    $food->image_url = get_input("Image URL [{$existing_data['image_url']}]:") ?: $existing_data['image_url'];
    $is_available_input = get_input("Is Available (1 for yes, 0 for no) [{$existing_data['is_available']}]:");
    $food->is_available = $is_available_input !== '' ? $is_available_input : $existing_data['is_available'];


    if ($food->update()) {
        echo "Food item updated successfully!
";
    } else {
        echo "Failed to update food item.
";
    }
}

function delete_food_item($food) {
     echo "--- Delete Food Item ---
";
    $id = get_input("Enter the ID of the food item to delete:");
    $food->id = $id;
    
    if ($food->delete()) {
        echo "Food item deleted successfully!
";
    } else {
        echo "Failed to delete food item. It might not exist.
";
    }
}


while (true) {
    echo "
--- Georgian Point Menu Management ---
";
    echo "1. View All Menu Items
";
    echo "2. Add New Menu Item
";
    echo "3. Update Menu Item
";
    echo "4. Delete Menu Item
";
    echo "5. Exit
";

    $choice = get_input("Enter your choice (1-5):");

    switch ($choice) {
        case '1':
            $result = $food_manager->getAll();
            display_menu($result);
            break;
        case '2':
            add_food_item($food_manager);
            break;
        case '3':
            update_food_item($food_manager);
            break;
        case '4':
            delete_food_item($food_manager);
            break;
        case '5':
            echo "Exiting...
";
            $conn->close();
            exit();
        default:
            echo "Invalid choice. Please try again.
";
    }
}
