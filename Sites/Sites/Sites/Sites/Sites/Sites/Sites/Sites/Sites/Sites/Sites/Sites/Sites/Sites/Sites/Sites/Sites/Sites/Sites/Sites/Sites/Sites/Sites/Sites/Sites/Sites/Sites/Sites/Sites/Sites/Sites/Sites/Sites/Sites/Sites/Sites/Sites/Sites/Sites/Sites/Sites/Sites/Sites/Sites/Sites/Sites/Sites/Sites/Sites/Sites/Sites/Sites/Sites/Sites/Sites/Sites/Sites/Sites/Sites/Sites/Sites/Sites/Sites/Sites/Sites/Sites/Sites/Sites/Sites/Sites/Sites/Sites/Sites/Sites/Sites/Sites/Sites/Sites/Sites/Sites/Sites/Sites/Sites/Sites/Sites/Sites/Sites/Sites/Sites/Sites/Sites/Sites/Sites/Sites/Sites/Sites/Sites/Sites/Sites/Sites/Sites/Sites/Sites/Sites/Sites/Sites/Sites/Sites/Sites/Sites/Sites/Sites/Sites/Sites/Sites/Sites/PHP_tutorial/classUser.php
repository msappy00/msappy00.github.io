<?php

class User{
    private $id;
    private $username;
    private $email;
    private $password;
    
    public function __construct($username, $password){
        $this->username = $username;
        $this->password = $password;
    }
    
    public function register(){
        echo 'User Registered';
    }
    
    public function login(){
        $this->auth_user();
    }
    
    public function auth_user($username, $password){
        echo $this->username.' is authenticated';
    }
    
    public function __destruct(){
        //echo 'Destructor Called';
    }
}
    
$User = new User('brad', '1234');

//$User->register();
//$User->login();

?>