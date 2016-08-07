<?php
    if (preg_match("/[a-z]/", "Hello", $matches)) {
        echo "Match was found <br />";
        echo $matches[0];
    }
    ?>