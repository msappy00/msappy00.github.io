<?php
    $car = array('make' => 'Toyota', 'model' => 'Camry', 'color' => 'Black');
    foreach($car as $key => $value){
        echo ucwords($key).': '.$value.'<br />';
    }
?>