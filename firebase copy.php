<?php
    ob_start();
    session_start();
    ?>

<?
// error_reporting(E_ALL);
// ini_set("display_errors", 1);
?>

<html lang="en">
    <head>
        <title>Login</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <link rel="stylesheet" href="css/w3.css"/>
        <script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
        <script>
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyCcIOz7_hDxJsyN3fKl0S5_UHiTulVX_LU",
                authDomain: "teachermatthew-1039.firebaseapp.com",
                databaseURL: "https://teachermatthew-1039.firebaseio.com",
                projectId: "teachermatthew-1039",
                storageBucket: "teachermatthew-1039.appspot.com",
                messagingSenderId: "276692310045"
            };
            firebase.initializeApp(config);
            
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // ...
            });
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                }).catch(function(error) {
                // An error happened.
            });
        </script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js"></script>
<style>
    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        padding-top: 60px;
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #fefefe;
        margin: 5px auto; /* 15% from the top and centered */
        border: 1px solid #888;
        width: 30%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    .close {
        /* Position it in the top right corner outside of the modal */
        position: absolute;
        right: 25px;
        top: 0;
        color: #000;
        font-size: 35px;
        font-weight: bold;
    }

    /* Close button on hover */
    .close:hover,
    .close:focus {
        color: red;
        cursor: pointer;
    }

    /* Add Zoom Animation */
    .animate {
        -webkit-animation: animatezoom 0.6s;
        animation: animatezoom 0.6s
    }

    @-webkit-keyframes animatezoom {
        from {-webkit-transform: scale(0)}
        to {-webkit-transform: scale(1)}
    }

    @keyframes animatezoom {
        from {transform: scale(0)}
        to {transform: scale(1)}
    }
</style>
</head>
<body>
    <h1>Firebase</h1>
    <!-- Button to open the modal login form -->
    <button onclick="document.getElementById('id01').style.display='block'">Login</button>
    
    <!-- The Modal -->
    <div id="id01" class="modal">
        <span onclick="document.getElementById('id01').style.display='none'"
            class="close" title="Close Modal">&times;</span>
        
        <!-- Modal Content -->
        <form class="modal-content animate" action="/action_page.php">
            <div class="imgcontainer w3-container w3-center">
                <img src="images/star-yellow.svg" alt="star avatar" class="avatar">
                <p></p>
            </div>
            <div class="w3-container w3-center">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>
                <p></p>
            </div>
            <div class="w3-container w3-center">
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                <p></p>
            </div>
            <div class="w3-container w3-center">
                <button type="submit">Login</button>
            </div>
            <div class="w3-container w3-center">
                <input type="checkbox" /> Remember me
                <p></p>
            </div>
            <div class="w3-container w3-center" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    </div>
</body>
</html>
