<?php
session_start();

// --- Simple Password Protection ---
$password = 'georgianpoint'; // Change this to a strong password
$session_key = 'is_logged_in';

if (isset($_POST['password'])) {
    if ($_POST['password'] == $password) {
        $_SESSION[$session_key] = true;
        header('Location: admin.php');
        exit;
    } else {
        $login_error = "Invalid password. Please try again.";
    }
}

if (!isset($_SESSION[$session_key]) || $_SESSION[$session_key] !== true) {
    // --- Login Form ---
    echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Admin Login</title>';
    echo '<style>body { font-family: sans-serif; background-color: #2c2c2c; color: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; } .login-container { background-color: #383838; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); border: 1px solid #c8a46e; } h1 { color: #c8a46e; text-align: center; } form { display: flex; flex-direction: column; } label { margin-bottom: 0.5rem; } input { padding: 0.5rem; border-radius: 4px; border: 1px solid #c8a46e; background-color: #2c2c2c; color: #f0f0f0; margin-bottom: 1rem; } button { padding: 0.7rem; background-color: #c8a46e; color: #2c2c2c; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; } .error { color: #ff8a8a; text-align: center; margin-top: 1rem; }</style>';
    echo '</head><body><div class="login-container"><h1>Admin Login</h1><form method="POST"><label for="password">Password:</label><input type="password" id="password" name="password" required><button type="submit">Login</button></form>';
    if (isset($login_error)) { echo '<p class="error">' . $login_error . '</p>'; }
    echo '</div></body></html>';
    exit;
}

// --- Logout Logic ---
if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    session_destroy();
    header('Location: admin.php');
    exit;
}

require_once 'db.php';
require_once 'api/Food.php';

$conn = connect_db();
$food_manager = new Food($conn);
$action = $_GET['action'] ?? 'view'; // Default action is 'view'
$id = $_GET['id'] ?? null;
$message = '';

// --- Handle Form Submissions (Create/Update) ---
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
    $is_update = !empty($_POST['id']);

    $food_manager->id = $is_update ? $_POST['id'] : null;
    $food_manager->name_en = $_POST['name_en'];
    $food_manager->name_ru = $_POST['name_ru'];
    $food_manager->name_az = $_POST['name_az'];
    $food_manager->description_en = $_POST['description_en'];
    $food_manager->description_ru = $_POST['description_ru'];
    $food_manager->description_az = $_POST['description_az'];
    $food_manager->price = $_POST['price'];
    $food_manager->category_name = $_POST['category_name'];
    $food_manager->is_available = isset($_POST['is_available']) ? 1 : 0;
    
    // Image handling
    $current_image = $_POST['current_image_url'] ?? '';
    $new_image = $_FILES['image_url'];

    if ($new_image && $new_image['error'] === UPLOAD_ERR_OK) {
        $target_dir = "uploads/food_images/";
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }
        $image_name = uniqid() . "-" . basename($new_image["name"]);
        $target_file = $target_dir . $image_name;
        if (move_uploaded_file($new_image["tmp_name"], $target_file)) {
            $food_manager->image_url = "/" . $target_file;
            // Delete old image if it exists
            if ($is_update && $current_image && file_exists(ltrim($current_image, '/'))) {
                unlink(ltrim($current_image, '/'));
            }
        } else {
             $message = "Error uploading file.";
        }
    } else {
        $food_manager->image_url = $current_image;
    }


    if (empty($message)) {
        if ($is_update) {
            if ($food_manager->update()) {
                $message = "Item updated successfully!";
            } else {
                $message = "Failed to update item.";
            }
        } else {
            if ($food_manager->create()) {
                $message = "Item created successfully!";
            } else {
                $message = "Failed to create item.";
            }
        }
    }
    $action = 'view'; // Go back to the list view after submission
}


// --- Handle Deletion ---
if ($action === 'delete' && $id) {
    $food_manager->id = $id;
    // Get image url to delete the file
    $result = $food_manager->getOne();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $image_to_delete = $row['image_url'];
        if ($food_manager->delete()) {
            if ($image_to_delete && file_exists(ltrim($image_to_delete, '/'))) {
                unlink(ltrim($image_to_delete, '/'));
            }
            $message = "Item deleted successfully!";
        } else {
            $message = "Failed to delete item.";
        }
    } else {
        $message = "Item not found.";
    }
    $action = 'view';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Menu Management</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; background-color: #2c2c2c; color: #f0f0f0; margin: 0; padding: 2rem; }
        .container { max-width: 1000px; margin: 0 auto; background-color: #383838; padding: 2rem; border-radius: 8px; border: 1px solid #c8a46e; }
        h1, h2 { color: #c8a46e; border-bottom: 2px solid #c8a46e; padding-bottom: 0.5rem; }
        a { color: #e7c595; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .btn { display: inline-block; padding: 0.5rem 1rem; background-color: #c8a46e; color: #2c2c2c; border-radius: 4px; text-decoration: none; font-weight: bold; margin-right: 0.5rem; }
        .btn-danger { background-color: #e57373; }
        .btn-logout { float: right; background-color: #777; }
        .message { background-color: #4a4a4a; padding: 1rem; border-left: 5px solid #c8a46e; margin-bottom: 1rem; border-radius: 4px; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
        th, td { padding: 0.8rem; text-align: left; border-bottom: 1px solid #555; }
        th { background-color: #4a4a4a; }
        td img { max-width: 100px; height: auto; border-radius: 4px; }
        form { background-color: #4a4a4a; padding: 2rem; border-radius: 8px; margin-top: 1rem; }
        .form-group { margin-bottom: 1rem; }
        label { display: block; margin-bottom: 0.5rem; font-weight: bold; color: #e7c595; }
        input[type="text"], input[type="number"], textarea { width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #c8a46e; background-color: #2c2c2c; color: #f0f0f0; box-sizing: border-box; }
        .lang-group { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
        .flex { display: flex; align-items: center; }
        .flex-grow { flex-grow: 1; }
    </style>
</head>
<body>

<div class="container">
    <div class="flex">
        <h1 class="flex-grow">Menu Management</h1>
        <a href="?action=logout" class="btn btn-logout">Logout</a>
    </div>

    <?php if ($message): ?>
        <div class="message"><?php echo $message; ?></div>
    <?php endif; ?>

    <?php if ($action === 'view'): ?>
        <h2>All Menu Items</h2>
        <p><a href="?action=add" class="btn">Add New Item</a></p>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name (EN)</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $result = $food_manager->getAll();
                if ($result->num_rows > 0):
                    while ($row = $result->fetch_assoc()):
                ?>
                    <tr>
                        <td><?php echo $row['id']; ?></td>
                        <td><img src="<?php echo htmlspecialchars($row['image_url']); ?>" alt=""></td>
                        <td><?php echo htmlspecialchars($row['name_en']); ?></td>
                        <td><?php echo htmlspecialchars($row['category_name']); ?></td>
                        <td><?php echo htmlspecialchars($row['price']); ?> ₼</td>
                        <td><?php echo $row['is_available'] ? 'Yes' : 'No'; ?></td>
                        <td>
                            <a href="?action=edit&id=<?php echo $row['id']; ?>" class="btn">Edit</a>
                            <a href="?action=delete&id=<?php echo $row['id']; ?>" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this item?');">Delete</a>
                        </td>
                    </tr>
                <?php
                    endwhile;
                else:
                ?>
                    <tr><td colspan="7">No items found.</td></tr>
                <?php endif; ?>
            </tbody>
        </table>
    <?php endif; ?>
    
    <?php
    // --- Form for Add/Edit ---
    if ($action === 'add' || $action === 'edit'):
        $item = null;
        if ($action === 'edit' && $id) {
            $food_manager->id = $id;
            $result = $food_manager->getOne();
            if ($result->num_rows > 0) {
                $item = $result->fetch_assoc();
            }
        }
    ?>
    <h2><?php echo $action === 'edit' ? 'Edit' : 'Add'; ?> Menu Item</h2>
    <form action="admin.php" method="POST" enctype="multipart/form-data">
        <input type="hidden" name="id" value="<?php echo $item['id'] ?? ''; ?>">
        
        <div class="lang-group">
            <div class="form-group">
                <label for="name_en">Name (English)</label>
                <input type="text" id="name_en" name="name_en" value="<?php echo htmlspecialchars($item['name_en'] ?? ''); ?>" required>
            </div>
            <div class="form-group">
                <label for="name_ru">Name (Russian)</label>
                <input type="text" id="name_ru" name="name_ru" value="<?php echo htmlspecialchars($item['name_ru'] ?? ''); ?>" required>
            </div>
            <div class="form-group">
                <label for="name_az">Name (Azerbaijani)</label>
                <input type="text" id="name_az" name="name_az" value="<?php echo htmlspecialchars($item['name_az'] ?? ''); ?>" required>
            </div>
        </div>

        <div class="lang-group">
            <div class="form-group">
                <label for="description_en">Description (English)</label>
                <textarea id="description_en" name="description_en" rows="3"><?php echo htmlspecialchars($item['description_en'] ?? ''); ?></textarea>
            </div>
            <div class="form-group">
                <label for="description_ru">Description (Russian)</label>
                <textarea id="description_ru" name="description_ru" rows="3"><?php echo htmlspecialchars($item['description_ru'] ?? ''); ?></textarea>
            </div>
            <div class="form-group">
                <label for="description_az">Description (Azerbaijani)</label>
                <textarea id="description_az" name="description_az" rows="3"><?php echo htmlspecialchars($item['description_az'] ?? ''); ?></textarea>
            </div>
        </div>
        
        <div class="form-group">
            <label for="price">Price (₼)</label>
            <input type="number" step="0.01" id="price" name="price" value="<?php echo htmlspecialchars($item['price'] ?? ''); ?>" required>
        </div>

        <div class="form-group">
            <label for="category_name">Category</label>
            <input type="text" id="category_name" name="category_name" value="<?php echo htmlspecialchars($item['category_name'] ?? ''); ?>" required placeholder="e.g. salads, main_courses, desserts">
        </div>

        <div class="form-group">
            <label for="image_url">Image</label>
            <?php if ($item && $item['image_url']): ?>
                <p>Current image: <img src="<?php echo htmlspecialchars($item['image_url']); ?>" alt=""></p>
                <input type="hidden" name="current_image_url" value="<?php echo htmlspecialchars($item['image_url']); ?>">
            <?php endif; ?>
            <input type="file" id="image_url" name="image_url" accept="image/*">
        </div>
        
        <div class="form-group">
            <label>
                <input type="checkbox" name="is_available" value="1" <?php echo (isset($item['is_available']) && $item['is_available'] == 1) || $action === 'add' ? 'checked' : ''; ?>>
                Is Available
            </label>
        </div>

        <button type="submit" name="submit" class="btn"><?php echo $action === 'edit' ? 'Update' : 'Create'; ?> Item</button>
        <a href="admin.php" class="btn btn-danger">Cancel</a>
    </form>
    <?php endif; ?>

</div>

</body>
</html>
<?php
$conn->close();
?>
