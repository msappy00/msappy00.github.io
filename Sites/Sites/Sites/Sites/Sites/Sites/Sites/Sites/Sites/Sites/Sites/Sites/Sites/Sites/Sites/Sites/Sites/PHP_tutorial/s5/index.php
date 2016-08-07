<?php
    $phrase = 'I like to eat apples';
    $phrase = str_replace('apples', 'oranges', $phrase);
    //echo $phrase;
    
    $name_array = array('Brad', 'Bob', 'Mike', 'Sarah', 'Michelle');
    //print_r($name_array);
    $name_string = implode(' <br />', $name_array);
    //echo $name_string;
    
    $car_string = 'toyota,ford,nissan,dodge,kia,mazda';
    $car_array = explode(',', $car_string);
    print_r($car_array);
    echo '<br />';
    echo ucwords('hello world<br />');
    echo strtoupper('hello world<br />');
    echo strtolower('HELLO WORLD<br />');
    echo count($car_array).'<br />';
    sort($car_array);
    print_r($car_array).'<br />';
?>