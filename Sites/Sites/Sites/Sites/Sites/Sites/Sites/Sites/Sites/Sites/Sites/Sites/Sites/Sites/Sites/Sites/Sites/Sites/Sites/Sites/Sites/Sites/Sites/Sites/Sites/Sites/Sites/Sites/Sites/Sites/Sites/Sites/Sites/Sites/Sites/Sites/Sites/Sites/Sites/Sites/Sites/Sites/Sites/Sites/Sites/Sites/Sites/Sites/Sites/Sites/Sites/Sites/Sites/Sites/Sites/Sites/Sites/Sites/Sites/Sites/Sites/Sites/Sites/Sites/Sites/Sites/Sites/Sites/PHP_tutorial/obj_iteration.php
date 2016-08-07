<?php
    class People{
        public $person1 = 'Mike';
        public $person2 = 'Shelly';
        public $person3 = 'Jeff';
        
        protected $person4 = 'John';
        private $person5 = 'Jen';
/*
        function iterateObject(){
            foreach($this as $key => $value){
                print "$key => $value\n";
            }
        }*/
    }
    
    $people = new People;
    
    foreach($people as $key => $value){
        print "$key => $value\n";
    }
    
    //$people->iterateObject();
?>