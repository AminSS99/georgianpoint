<?php
class Food {
    private $conn;
    private $table_name = "foods";

    public $id;
    public $name_en;
    public $name_ru;
    public $name_az;
    public $description_en;
    public $description_ru;
    public $description_az;
    public $price;
    public $image_url;
    public $category_name;
    public $is_available;
    public $created_at;
    public $updated_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Get all foods
    public function getAll() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->get_result();
    }

    // Get single food
    public function getOne() {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        return $stmt->get_result();
    }

    // Create food
    public function create() {
        $query = "INSERT INTO " . $this->table_name . " SET name_en=:name_en, name_ru=:name_ru, name_az=:name_az, description_en=:description_en, description_ru=:description_ru, description_az=:description_az, price=:price, image_url=:image_url, category_name=:category_name";
        $stmt = $this->conn->prepare($query);

        $this->name_en=htmlspecialchars(strip_tags($this->name_en));
        $this->name_ru=htmlspecialchars(strip_tags($this->name_ru));
        $this->name_az=htmlspecialchars(strip_tags($this->name_az));
        $this->description_en=htmlspecialchars(strip_tags($this->description_en));
        $this->description_ru=htmlspecialchars(strip_tags($this->description_ru));
        $this->description_az=htmlspecialchars(strip_tags($this->description_az));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->image_url=htmlspecialchars(strip_tags($this->image_url));
        $this->category_name=htmlspecialchars(strip_tags($this->category_name));

        $stmt->bindParam(":name_en", $this->name_en);
        $stmt->bindParam(":name_ru", $this->name_ru);
        $stmt->bindParam(":name_az", $this->name_az);
        $stmt->bindParam(":description_en", $this->description_en);
        $stmt->bindParam(":description_ru", $this->description_ru);
        $stmt->bindParam(":description_az", $this->description_az);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":image_url", $this->image_url);
        $stmt->bindParam(":category_name", $this->category_name);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    // Update food
    public function update() {
        $query = "UPDATE " . $this->table_name . " SET name_en = :name_en, name_ru = :name_ru, name_az = :name_az, description_en = :description_en, description_ru = :description_ru, description_az = :description_az, price = :price, image_url = :image_url, category_name = :category_name, is_available = :is_available WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        $this->name_en=htmlspecialchars(strip_tags($this->name_en));
        $this->name_ru=htmlspecialchars(strip_tags($this->name_ru));
        $this->name_az=htmlspecialchars(strip_tags($this->name_az));
        $this->description_en=htmlspecialchars(strip_tags($this->description_en));
        $this->description_ru=htmlspecialchars(strip_tags($this->description_ru));
        $this->description_az=htmlspecialchars(strip_tags($this->description_az));
        $this->price=htmlspecialchars(strip_tags($this->price));
        $this->image_url=htmlspecialchars(strip_tags($this->image_url));
        $this->category_name=htmlspecialchars(strip_tags($this->category_name));
        $this->is_available=htmlspecialchars(strip_tags($this->is_available));
        $this->id=htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':name_en', $this->name_en);
        $stmt->bindParam(':name_ru', $this->name_ru);
        $stmt->bindParam(':name_az', $this->name_az);
        $stmt->bindParam(':description_en', $this->description_en);
        $stmt->bindParam(':description_ru', $this->description_ru);
        $stmt->bindParam(':description_az', $this->description_az);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':image_url', $this->image_url);
        $stmt->bindParam(':category_name', $this->category_name);
        $stmt->bindParam(':is_available', $this->is_available);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    // Delete food
    public function delete() {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);

        $this->id=htmlspecialchars(strip_tags($this->id));
        $stmt->bind_param("i", $this->id);

        if($stmt->execute()){
            return true;
        }
        return false;
    }
}
?>