<?php

    class First{
        public $id = 23;
        protected $name = 'John Doe';
        
        public function saySomething($word){
            echo $word;
        }
        
    }
    
    class Second extends First{
        public function getName(){
            echo $this->name;
        }
    
    
    }
    
    $second = new Second;
    
    echo $second->getName();
    
?>