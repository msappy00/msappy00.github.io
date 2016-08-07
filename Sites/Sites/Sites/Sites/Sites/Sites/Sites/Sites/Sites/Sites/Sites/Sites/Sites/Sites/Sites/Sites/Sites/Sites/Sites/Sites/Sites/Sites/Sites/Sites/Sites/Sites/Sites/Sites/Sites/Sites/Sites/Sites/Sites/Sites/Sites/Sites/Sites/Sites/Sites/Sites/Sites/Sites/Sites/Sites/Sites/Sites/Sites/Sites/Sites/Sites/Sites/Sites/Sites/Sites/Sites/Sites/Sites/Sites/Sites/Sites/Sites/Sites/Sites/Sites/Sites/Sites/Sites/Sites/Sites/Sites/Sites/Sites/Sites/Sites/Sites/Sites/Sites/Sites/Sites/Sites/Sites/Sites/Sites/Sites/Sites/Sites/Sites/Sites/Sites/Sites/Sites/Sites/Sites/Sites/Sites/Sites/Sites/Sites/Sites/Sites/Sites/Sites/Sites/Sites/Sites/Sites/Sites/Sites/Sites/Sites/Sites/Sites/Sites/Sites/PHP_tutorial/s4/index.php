<?php
    $jsondata = file_get_contents("movies.json");
    $json = json_decode($jsondata, true);
?>
<!DOCTYPE html>
<html>
<head>
    <title>My Movies</title>
    <style>
        h1[text-align:center;]
        h4{margin:0;padding:5px;background:#f4f4f4;}
        li{list-style:none;padding-left:5px;}
        #container{width:600px;margin:auto;overflow:hidden;}
    </style>
</head>
<body>
<div id = "container">
    <h1>My Favorite Movies</h1>
    
        <ul>
        <?php
            foreach($json['movies'] as $key => $value){
                echo '<h4>'.$value['title'].'</h4>';
                echo '<li>Year: '.$value['year'].'</li>';
                echo '<li>Genre: '.$value['genre'].'</li>';
                echo '<li>Director: '.$value['director'].'</li>';
            }
        ?>
    </ul>
</body>
</html>