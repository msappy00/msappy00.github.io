<?php include 'classes/car.php';

$car1 = new Car('Honda', 'Accord', 'Red');
echo $car1->getColor();
  
echo '<br />';
    
$car2 = new Car('Honda', 'Civic', 'Blue');
echo $car2->getColor();
    
?>