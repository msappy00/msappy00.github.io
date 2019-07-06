function clearUnit(){
    currentUnit = "";
    array = [];
    links = [];
    vocabLesson = "";
    return array;
}

function setVocab(userInput){
    
    currentUnit = userInput;
    array_i = 0;
    
    document.getElementById("spellCheck").value = "";
    
    if (level_id == "Starter") {
        array = ["apple", "ant", "boy", "ball", "cat", "car", "dog", "desk", "elephant", "egg", "fish", "frog", "goat", "girl", "house", "hat", "Indian", "igloo", "jet", "jar", "kite", "king", "lollipop", "lion", "monkey", "milk", "nurse", "nose", "ox", "octopus", "pig", "pink", "queen", "quilt", "rabbit", "rat", "snake", "sun", "tiger", "toe", "umbrella", "under", "vampire", "vase", "window", "watermelon", "x-ray", "box", "yo-yo", "yellow", "zebra", "zoo"];
        if (userInput == "Unit 1") {
            array = array.slice(0,8);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Unit 2") {
            array = array.slice(8,16);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Unit 3") {
            array = array.slice(16,24);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Review 1") {
            array = array.slice(0,24);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(24,32);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Unit 5") {
            array = array.slice(32,40);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Unit 6") {
            array = array.slice(40,48);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Review 2") {
            array = array.slice(24,48);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(-4);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Unit 8") {
            array = ["blank", "blank"];
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Unit 9") {
            array = ["blank", "blank"];
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/21801556/' target='_newtab'>Scratch: random letters (A~Z)</a>";
        } else if (userInput == "Review 3") {
            array = array.slice(-4);
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = ["<a href='http://www.starfall.com/n/level-k/index/load.htm' target='_newtab'>Starfall: Alphabet</a>"];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 1") {
        array = ["boy", "girl", "man", "woman", "student", "teacher", "grandfather", "grandmother", "father", "mother", "uncle", "aunt", "cousin", "cousins", "brother", "sister", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "chubby", "thin", "tall", "short", "sad", "happy", "old", "young", "cute", "pencil", "eraser", "ruler", "pen", "desk", "chair", "school bag", "book", "pencil case", "red", "yellow", "green", "blue", "pink", "black", "white", "brown", "orange", "purple", "hat", "cap", "coat", "jacket", "dress", "skirt", "shirt", "T-shirt", "dog", "cat", "rat", "rabbit", "cow", "horse", "sheep", "pig", "chicken", "duck", "hungry", "thirsty", "angry", "lazy", "noisy", "quiet", "sleepy", "tired"];
        if (userInput =="Unit 1") {
            array = array.slice(0,6);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(6,16);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(16,26);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,26);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(26,35);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(35,44);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(44,54);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(26,54);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/14115998/' target='_blank'>Scratch: B1U5 Vocab</a>";
        } else if (userInput == "Unit 7") {
            array = array.slice(54,62);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(62,72);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-8);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(54);
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = ["<a href='https://scratch.mit.edu/projects/40754064/' target='_blank'>Scratch: Phonics Shooter</a>"];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 2") {
        array = ["door", "window", "table", "blackboard", "trash can", "fan", "television", "DVD player", "whiteboard", "telephone", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "yo-yo", "robot", "doll", "teddy bear", "ball", "blocks", "video game", "board game", "bananas", "lemons", "wax apples", "pears", "papayas", "watermelons", "guavas", "grapes", "sweet", "sour", "tomatoes", "mangoes",  "strawberries", "cherries", "peaches", "oranges", "kiwis", "coconuts", "sing", "dance", "run", "swim", "read", "write", "type", "jump", "draw", "in", "on", "under", "next to", "between", "behind", "in front of", "near", "living room", "dining room", "bedroom", "bathroom", "kitchen", "backyard", "garden", "basement", "tiger", "lion", "monkey", "bear", "zebra", "goat", "elephant", "hippo", "snake", "parrot"];
        if (userInput == "Unit 1") {
            array = array.slice(0,10);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(10,20);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(20,28);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,28);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(28,38);
            links = ["<a href='https://scratch.mit.edu/projects/53004678/' target='blank'>Scratch: Fruit Clicker</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(38,46);
            links = ["<a href='https://scratch.mit.edu/projects/53004678/' target='blank'>Scratch: Fruit Clicker</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(46,55);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: 'Can he ___?'</a>"];
            vocabLesson = "<a href='http://www.eslgamesplus.com/action-verbs-memory-game-for-esl-learning-very-low-beginners/' target='_blank'>ESL Games+: Memory Game</a>";
        } else if (userInput == "Review 2") {
            array = array.slice(28,55);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(55,63);
            links = ["<a href='http://www.eslgamesplus.com/prepositions-of-place-esl-fun-game-online-grammar-practice/' target='_blank'>ESL Games+: Prepositions of Place</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(63,71);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-10);
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(55);
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = ["<a href='https://scratch.mit.edu/projects/30392356/' target='_blank'>Scratch: Book 2 Vocab</a>"];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 3") {
        array = ["bird", "kitten", "puppy", "bunny", "turtle", "spider", "frog", "fish", "hamster", "beetle", "hamburger", "pizza", "hot dog", "French fries", "onion rings", "chicken nuggets", "cola", "soda", "salad", "fried chicken", "milk", "juice", "tea", "coffee", "ice cream", "cake", "bread", "cookies", "potato chips", "popcorn", "kite", "puzzle", "jump rope", "model car", "bicycle", "CD player", "computer", "computer game", "stuffed animal", "action figure", "eyes", "ears", "nose", "mouth", "teeth", "tooth", "hands", "feet", "foot", "arms", "legs", "head", "face", "hair", "long", "short", "curly", "straight", "braided", "blond", "dark", "red hair", "brown hair", "black hair", "baseball", "basketball", "soccer", "badminton", "ping-pong", "dodgeball", "volleyball", "tennis", "golf", "football", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "fly a kite", "read a book", "listen to music", "watch TV", "ride a bike", "weather", "sunny", "rainy", "cloudy", "windy", "snowy", "go shopping", "go swimming", "go hiking", "go fishing", "go skateboarding", "go jogging"];
        if (userInput == "Unit 1") {
            array = array.slice(0,10);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(10,20);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(20,30);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,30);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(30,40);
            links = [''];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/49848852/' target='_blank'>Scratch: B3U4 Vocab</a>";
        } else if (userInput == "Unit 5") {
            array = array.slice(40,53);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(53,64);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(30,64);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(64,74);
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(74,86);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-12);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(64);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 4") {
        array = ["get up", "go to school", "go home", "do homework", "take a bath", "go to bed", "thirty", "forty", "fifty", "have English class", "on foot", "scooter", "motorcycle", "car", "bus", "bicycle", "MRT", "train", "taxi", "high-speed rail", "boat", "ship", "airplane", "helicopter", "van", "walk", "park", "supermarket", "city", "countryside", "subway", "morning", "afternoon", "evening", "exercise", "read the newspaper", "take a nap", "surf the Net", "keep my diary", "have a snack", "play the piano", "play the violin", "walk the dog", "eat", "drink", "cook", "laugh", "draw", "sweep", "study", "drive", "write", "sleep", "play", "wash my face", "brush my teeth", "comb my hair", "make my bed", "eat breakfast", "eat lunch", "eat dinner", "wash the dishes", "police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "next to", "across from", "museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store", "go straight", "turn right", "turn left", "traffic light", "corner", "first", "second", "third", "road", "street", "parking lot"];
        if (userInput == "Unit 1") {
            array = array.slice(0,10);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(10,20);
            links = [''];
            vocabLesson = "<a href ='http://scratch.mit.edu/projects/embed/66810966/?autostart=false' target='_blank'>Scratch: U2 Vocab</a>";
        } else if (userInput == "Unit 3") {
            array = array.slice(20,31);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,31);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(31,43);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(43,54);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(54,62);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(31,62);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(62,72);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(72,82);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-11);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(62);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 5") {
        array = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "doctor", "nurse", "driver", "police officer", "firefighter", "pilot", "office worker", "housekeeper", "mail carrier", "Chinese", "English", "math", "science", "social studies", "music", "art", "always", "usually", "often", "sometimes", "seldom", "never", "busy", "nervous", "help", "cry", "spring", "summer", "fall", "winter", "warm", "hot", "cool", "cold", "do the laundry", "sweep the floor", "mop the floor", "walk the dog", "go mountain climbing", "play chess", "water the plants", "take a walk", "once", "twice", "three times", "week", "month", "year", "play the piano", "play cards", "go to the movies", "go abroad", "shoes", "boots", "socks", "jeans", "pants", "shorts", "glasses", "gloves", "earrings", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "ring", "belt", "backpack", "cheap", "expensive"];
        if (userInput == "Unit 1") {
            array = array.slice(0,12);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(12,21);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(21,28);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,28);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(28,38);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(38,46);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(46,54);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(28,54);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(54,64);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(64,73);
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-11);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(54);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 6") {
        array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "tie", "scarf", "necklace", "sneakers", "raincoat", "uniform", "slippers", "watch", "glue", "scissors", "crayons", "markers", "pencil case", "tape", "pencil sharpener", "notebook", "paper", "correction tape", "excited", "bored", "sick", "scared", "early", "late", "yesterday", "weekend", "beach", "airport", "farm", "concert", "mountain", "amusement park", "playground", "port", "classroom", "field", "teacher's office", "nurse's office", "restroom", "snack bar", "gym", "hallway", "hour", "minute", "second", "fixed the bike", "cleaned the room", "visited", "painted the wall", "washed my hair", "jumped rope", "used the computer", "played a video game", "studied", "fried an egg", "copied", "chatted", "planned", "stopped", "put", "cut", "read", "a bag of chips", "a bottle of water", "a can of soda", "a piece of cake", "a slice of bread", "a cup of tea", "a glass of juice", "a box of crackers", "a bar of chocolate"];
        if (userInput == "Unit 1") {
            array = array.slice(0,12);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(12,20);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(20,30);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,30);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(30,38);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(38,46);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(46,57);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(30,57);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(57,65);
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(65,74);
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-9);
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(57);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 7") {
        array = ["went", "came", "took", "made", "saw", "got", "sat", "sang", "gave", "swam", "rode", "drove", "wrote", "had", "sent", "bought", "taught", "brought", "caught", "found", "bake a cake", "cook a meal", "make a sandwich", "draw a picture", "vacuum the floor", "make a call", "answer the phone", "try on a shirt", "watch the news", "listen to the radio", "read a magazine", "build a model", "do puzzles", "ring", "take a message", "leave a message", "wake up", "take a shower", "get dressed", "shave my face", "blow-dry my hair", "put on makeup", "set the table", "feed the dog", "study hard", "pass the exam", "fail the exam", "hurry up", "catch the bus", "miss the bus", "be careful", "win the game", "lose the game", "go camping", "go skiing", "go cycling", "go snorkeling", "go in-line skating", "go surfing", "go rafting", "go ice-skating", "watch the sunrise", "watch the sunset", "go on a picnic", "see the maple leaves", "go to the hot springs", "have a party", "have hot pot", "go on a vacation", "artist", "musician", "soccer player", "vet", "flight attendant", "America", "Korea", "Japan", "China", "Canada", "England", "France"];
        if (userInput == "Unit 1") {
            array = array.slice(0,10);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(10,20);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(20,28);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,28);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(28,36);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(36,44);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(44,53);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(28,53);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(53,61);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(61,69);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-12);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(53);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 8") {
        array = ["husband", "wife", "daughter", "son", "take medicine", "catch a cold", "oversleep", "give to", "bring for", "fast", "slow", "fat", "slim", "pretty", "ugly", "big", "small", "heavy", "light", "cheap", "handsome", "beautiful", "modern", "difficult", "expensive", "dangerous", "good", "bad", "much", "little", "strong", "weak", "young", "old", "wet", "clean", "dirty", "easy", "popular", "colorful", "comfortable", "hardworking", "careful", "careless", "best", "worst", "most", "least", "high", "low", "penguin", "giraffe", "koala", "fur", "crocodile", "kangaroo", "camel", "ice", "panda", "peacock", "dolphin", "wing", "biscuit", "cupboard", "lemonade", "sweets", "ketchup", "butter", "peanut butter", "cheese"];
        if (userInput == "Unit 1") {
            array = array.slice(0,9);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(9,17);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(17,26);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,26);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(26,32);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(32,38);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(38,44);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(26,44);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(44,50);
            links = [''];
            vocabLesson = "<a href='https://scratch.mit.edu/projects/14544607/' target='_newtab'>Scratch: high low guessing game</a>";
        } else if (userInput == "Unit 8") {
            array = array.slice(50,62);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-8);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(43);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 9") {
        array = ["biscuit", "cupboard", "lemonade", "sweets", "ketchup", "butter", "peanut butter", "cheese", "boiling", "over", "shiny", "gold", "horizon", "postcard", "plum", "juicy", "air", "fresh", "kind", "deep", "breath", "fantastic", "feel", "look", "friendly", "sound", "night market", "try", "delicious", "taste", "salty", "spicy", "interesting", "sweet", "stinky", "famous", "terrible", "inside", "horror", "furry", "move", "fool", "eyeshade", "strange", "disgusting", "joke", "sour", "bitter", "answer", "durian", "idea", "comedy", "relaxed", "horror movie", "hate", "bloody", "scary", "nightmare", "romantic movie", "actor", "actress", "adventure movie", "search", "animated movie", "wonderland", "ticket", "starving", "whatever", "pork", "beef", "seafood", "allergic", "troublesome", "pasta", "order", "curry", "rice", "iced", "black tea", "sugar", "dessert", "twins", "elementary school", "pajama", "kimchi", "character", "different", "fitting room", "trick", "clerk", "praise", "adorable", "giggle", "talent", "contest", "musical instrument", "recorder", "tambourine", "triangle", "champion", "second place", "third place", "first place", "excellent", "area", "ride", "shout", "scream", "if", "challenge", "choice", "brave", "pony", "food court", "cafeteria", "fast food", "still", "join", "notice", "sale", "dozen", "congratulations", "draw", "lucky", "wonderful", "squeeze", "refrigerator", "find out", "already"];
        if (userInput == "Unit 1") {
            array = array.slice(0,8);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(8,21);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(21,37);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,37);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(37,53);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(53,68);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(68,80);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(37,80);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(80,91);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(91,105);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-11);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(80);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 10") {
        array = ["dizzy", "headache", "sore throat", "fever", "cough", "sneeze", "runny nose", "flu", "serious", "stomachache", "diarrhea", "vomit", "Japanese", "sushi", "sashimi", "newborn", "hold", "even", "care", "family", "lonely", "upset", "of course", "spend", "take care of", "tickle", "together", "weight", "lose", "enough", "need", "tiring", "boring", "interesting", "interested", "exciting", "sport", "surprising", "surprised", "favorite", "news", "hit", "get on", "wait for", "hurt", "get out of", "run after", "police", "look for", "get into", "get off", "look after", "look up", "word", "dictionary", "take off", "put on", "turn on", "flashlight", "take out", "turn off", "put down", "pick up", "put away", "clean up", "have", "dusty", "let", "housework", "make", "sweater", "messy", "iron", "knock", "turn into", "prince", "national", "quickly", "information staff", "rule", "traditional", "clearly", "loudly", "area", "softly", "run into", "repeat", "important", "well", "as soon as", "only", "thoughtful", "asleep", "move", "pull", "sleeve", "save", "become", "die", "believe", "true", "place", "dump", "happen", "owner", "faint", "ground", "mend", "clay", "unique"];
        if (userInput == "Unit 1") {
            array = array.slice(0,15);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(15,27);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(27,40);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,40);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(40,52);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(52,65);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(65,76);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(40,76);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(76,89);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(89,101);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-9);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(76);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 11") {
        array = ["village", "grow", "neighbor", "beginning", "start", "apartment", "crowded", "elevator", "stairs", "familiar", "neighborhood", "decide", "satisfied", "seesaw", "slide", "swing", "monkey bars", "practice", "tremble", "jungle gym", "borrow", "return", "hope", "finish", "bother", "across", "skywalk", "crosswalk", "sidewalk", "pedestrian", "helmet", "unforgivable", "buckle", "seat belt", "shortcut", "illegal", "calm", "exhibition", "discount", "yet", "author", "sign", "arrive", "signature", "also", "subscribe", "weekly", "semester", "receive", "package", "instant noodles", "homesick", "homesickness", "relieve", "New York", "college", "whenever", "born", "maid", "response", "examine", "cure", "deaf", "blind", "ill-tempered", "smash", "monster", "fork", "punish", "led", "lifelong", "burnt", "frozen", "put out", "wounded", "fried", "boiled", "homeless", "secondhand", "used", "buyer", "satisfied", "spoiled", "faucet", "leak", "spend", "introduce", "neighborhood", "drop", "repair", "stew", "hide", "cupboard", "handmade", "antique", "budget", "jewelry box", "flea market", "stuff", "frame", "perfect"];
        if (userInput == "Unit 1") {
            array = array.slice(0,13);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(13,25);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(25,37);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,37);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(37,47);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(47,57);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(57,71);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 2") {
            array = array.slice(37,71);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(71,83);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(83,92);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-9);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(83);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else if (level_id == "Level 12") {
        array = ["yourself", "myself", "classmates", "ourselves", "themselves", "trust", "yourselves", "himself", "herself", "carry", "almost", "blood type", "article", "personality", "stupid", "confident", "outgoing", "leader", "group", "correct", "patient", "responsible", "creative", "flexible", "calm", "fair", "consider", "faithful", "inconvenient", "besides", "guide", "train", "priest", "successfully", "helper", "rare", "disturb", "feed", "provide", "environment", "partner", "desktop", "monitor", "mouse", "keyboard", "assemble", "professional", "switch", "power", "button", "plug", "socket", "genius", "planetarium", "display", "free", "space", "shuttle", "astronaut", "search", "accident", "protect", "danger", "earthquake", "occur", "building", "squat", "firm", "furniture", "cover", "crawl", "exit", "trap", "emergency", "arm", "burn", "flush", "soak", "job", "toilsome", "high heels", "salary", "difference", "service", "passenger", "complain", "cram school", "lesson", "senior high school", "necessary", "high jump", "light", "diet", "healthy", "habit", "grateful", "cockroach", "wiper", "wipe", "broom", "dustpan", "mood", "inventor", "invent", "magical", "pill", "wing", "incredible", "cape", "invisible", "continue", "owner", "shop", "mint", "cranberry", "flavor", "imagine", "customer"];
        if (userInput == "Unit 1") {
            array = array.slice(0,11);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 2") {
            array = array.slice(11,26);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 3") {
            array = array.slice(26,41);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 1") {
            array = array.slice(0,41);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 4") {
            array = array.slice(41,53);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 5") {
            array = array.slice(53,60);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 6") {
            array = array.slice(60,78);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(41,78);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Unit 7") {
            array = array.slice(78,90);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 8") {
            array = array.slice(89,102);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Unit 9") {
            array = array.slice(-16);
            links = [''];
            vocabLesson = "";
        } else if (userInput == "Review 3") {
            array = array.slice(78);
            links=[''];
            vocabLesson = "";
        } else if (userInput == "Final Review") {
            array = array;
            links = [''];
            vocabLesson = "";
        } else {
            array = ["blank", "blank"];
            links = [''];
            vocabLesson = "";
        }
    }
    else {
        array = ["blank", "blank"];
        links = [''];
        vocabLesson = "";
    }
    
    shuffleArray(array);
    array.push("finished");
    document.getElementById("vocab_links").innerHTML = links;
    document.getElementById("vocab_lesson").innerHTML = vocabLesson;
    if (level_id == "Level 9" || level_id == "Level 10" || level_id == "Level 11" || level_id == "Level 12") {
        document.getElementById("current_vocab").src = 'images/blank.png';
    }
    else document.getElementById("current_vocab").src =  level_id+'/images/'+array[array_i]+'.png';
    if (level_id == "Starter") {
        document.getElementById("currentWord").innerHTML = '<table align="center"><tr><td align="right" style="font-size:xx-large; color:red">'+array[array_i].slice(0,1)+'</td><td align="right" style="font-size:xx-large; color:black">'+array[array_i].slice(1)+'</td></tr></table>';
        document.getElementById("spellCheck").pattern = array[array_i].slice(0,1);
        document.getElementById("mSpellCheck").pattern = array[array_i].slice(0,1);
    } else {
        document.getElementById("spellCheck").pattern = array[array_i];
        document.getElementById("mSpellCheck").pattern = array[array_i];
    }
    document.getElementById("vocProg").value = array_i/array.length*100;
    if (array[array_i] != "blank"){
        speak(array[array_i]);
    }
}
