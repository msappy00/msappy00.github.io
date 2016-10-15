function clearUnit(){
    currentUnit = "";
    pArray = [];
    return pArray;
}

function setPhonics(userInput){
    
    currentUnit = userInput;
    
    document.getElementById("levelId").innerHTML = level_id + " " + userInput;
    document.getElementById("phonicsCheck").value = "";
    
    if (level_id == "Starter") {
        document.getElementById("pInstructions").innerHTML = "Type the first letter of the word.";
        if (userInput == "Unit 1") {
            pArray = [([pattern:'a', value:'add'}), ({pattern:'a', value:'apple'}), ({pattern:'a', value:'ant'}), ({pattern:'b', value:'ball'}), ({pattern:'b', value:'boy'}), ({pattern:'c', value:'cat'}), ({pattern:'c', value:'car'}), ({pattern:'d', value:'dog'}), ({pattern:'d', value:'desk'})];
        } else if (userInput == "Unit 2") {
            pArray = [({pattern:'e', value:'egg'}), ({pattern:'e', value:'elephant'}), ({pattern:'f', value:'fish'}), ({pattern:'f', value:'frog'}), ({pattern:'g', value:'goat'}), ({pattern:'g', value:'girl'}), ({pattern:'h', value:'hat'}), ({pattern:'h', value:'house'})];
        } else if (userInput == "Unit 3") {
            pArray = [({pattern:'i', value:'igloo'}), ({pattern:'I', value:'Indian'}), ({pattern:'j', value:'jar'}), ({pattern:'j', value:'jet'}), ({pattern:'k', value:'king'}), ({pattern:'k', value:'kite'}), ({pattern:'l', value:'lollipop'}), ({pattern:'l', value:'lion'})];
        } else if (userInput == "Review 1") {
            pArray = [({pattern:'a', value:'apple'}), ({pattern:'a', value:'ant'}), ({pattern:'b', value:'ball'}), ({pattern:'b', value:'boy'}), ({pattern:'c', value:'cat'}), ({pattern:'c', value:'car'}), ({pattern:'d', value:'dog'}), ({pattern:'d', value:'desk'}), ({pattern:'e', value:'egg'}), ({pattern:'e', value:'elephant'}), ({pattern:'f', value:'fish'}), ({pattern:'f', value:'frog'}), ({pattern:'g', value:'goat'}), ({pattern:'g', value:'girl'}), ({pattern:'h', value:'hat'}), ({pattern:'h', value:'house'}), ({pattern:'i', value:'igloo'}), ({pattern:'I', value:'Indian'}), ({pattern:'j', value:'jar'}), ({pattern:'j', value:'jet'}), ({pattern:'k', value:'king'}), ({pattern:'k', value:'kite'}), ({pattern:'l', value:'lollipop'}), ({pattern:'l', value:'lion'})];
        } else if (userInput == "Unit 4") {
            pArray = [({pattern:'m', value:'monkey'}), ({pattern:'m', value:'milk'}), ({pattern:'n', value:'nose'}), ({pattern:'n', value:'nurse'}), ({pattern:'o', value:'octopus'}), ({pattern:'o', value:'ox'}), ({pattern:'p', value:'pig'}), ({pattern:'p', value:'pink'})];
        } else if (userInput == "Unit 5") {
            pArray = [({pattern:'q', value:'queen'}), ({pattern:'q', value:'quilt'}), ({pattern:'r', value:'rabbit'}), ({pattern:'r', value:'rat'}), ({pattern:'s', value:'snake'}), ({pattern:'s', value:'sun'}), ({pattern:'t', value:'tiger'}), ({pattern:'t', value:'toe'})];
        } else if (userInput == "Unit 6") {
            pArray = [({pattern:'u', value:'under'}), ({pattern:'v', value:'vampire'}), ({pattern:'v', value:'vase'}), ({pattern:'w', value:'window'}), ({pattern:'w', value:'watermelon'}), ({pattern:'x', value:'x-ray'}), ({pattern:'x', value:'box'})];
        } else if (userInput == "Review 2") {
            pArray = [({pattern:'m', value:'monkey'}), ({pattern:'m', value:'milk'}), ({pattern:'n', value:'nose'}), ({pattern:'n', value:'nurse'}), ({pattern:'o', value:'octopus'}), ({pattern:'o', value:'ox'}), ({pattern:'p', value:'pig'}), ({pattern:'p', value:'pink'}), ({pattern:'q', value:'queen'}), ({pattern:'q', value:'quilt'}), ({pattern:'r', value:'rabbit'}), ({pattern:'r', value:'rat'}), ({pattern:'s', value:'snake'}), ({pattern:'s', value:'sun'}), ({pattern:'t', value:'tiger'}), ({pattern:'t', value:'toe'}), ({pattern:'u', value:'under'}), ({pattern:'v', value:'vampire'}), ({pattern:'v', value:'vase'}), ({pattern:'w', value:'window'}), ({pattern:'w', value:'watermelon'}), ({pattern:'x', value:'x-ray'}), ({pattern:'x', value:'box'})];
        } else if (userInput == "Unit 7") {
            pArray = [({pattern:'y', value:'yellow'}), ({pattern:'y', value:'yo-yo'}), ({pattern:'z', value:'zebra'}), ({pattern:'z', value:'zoo'})];
        } else if (userInput == "Unit 8") {
            pArray = [({pattern:'blank', value:'blank'})];
        } else if (userInput == "Unit 9") {
            pArray = [({pattern:'blank', value:'blank'})];
        } else if (userInput == "Review 3") {
            pArray = [({pattern:'blank', value:'blank'})];
        } else if (userInput == "Final Review") {
            document.getElementById("pInstructions").innerHTML = "Type the first letter of the word. ('x' for box)";
            pArray = [({pattern:'a', value:'apple'}), ({pattern:'a', value:'ant'}), ({pattern:'b', value:'ball'}), ({pattern:'b', value:'boy'}), ({pattern:'c', value:'cat'}), ({pattern:'c', value:'car'}), ({pattern:'d', value:'dog'}), ({pattern:'d', value:'desk'}), ({pattern:'e', value:'egg'}), ({pattern:'e', value:'elephant'}), ({pattern:'f', value:'fish'}), ({pattern:'f', value:'frog'}), ({pattern:'g', value:'goat'}), ({pattern:'g', value:'girl'}), ({pattern:'h', value:'hat'}), ({pattern:'h', value:'house'}), ({pattern:'i', value:'igloo'}), ({pattern:'I', value:'Indian'}), ({pattern:'j', value:'jar'}), ({pattern:'j', value:'jet'}), ({pattern:'k', value:'king'}), ({pattern:'k', value:'kite'}), ({pattern:'l', value:'lollipop'}), ({pattern:'l', value:'lion'}), ({pattern:'m', value:'monkey'}), ({pattern:'m', value:'milk'}), ({pattern:'n', value:'nose'}), ({pattern:'n', value:'nurse'}), ({pattern:'o', value:'octopus'}), ({pattern:'o', value:'ox'}), ({pattern:'p', value:'pig'}), ({pattern:'p', value:'pink'}), ({pattern:'q', value:'queen'}), ({pattern:'q', value:'quilt'}), ({pattern:'r', value:'rabbit'}), ({pattern:'r', value:'rat'}), ({pattern:'s', value:'snake'}), ({pattern:'s', value:'sun'}), ({pattern:'t', value:'tiger'}), ({pattern:'t', value:'toe'}), ({pattern:'u', value:'umbrella'}), ({pattern:'u', value:'under'}), ({pattern:'v', value:'vampire'}), ({pattern:'v', value:'vase'}), ({pattern:'w', value:'window'}), ({pattern:'w', value:'watermelon'}), ({pattern:'x', value:'x-ray'}), ({pattern:'x', value:'box'}), ({pattern:'y', value:'yellow'}), ({pattern:'y', value:'yo-yo'}), ({pattern:'z', value:'zebra'}), ({pattern:'z', value:'zoo'})];
        } else {
            pArray = [({pattern:'blank', value:'blank'})];
        }
    }
    else if (level_id == "Level 1") {
        document.getElementById("pInstructions").innerHTML = "Type the first letter of the word.";
        links = [""];
        phonicsLesson = "";
        if (userInput =="Unit 1") {
            pArray = [({pattern:'a', value:'add'}), ({pattern:'a', value:'apple'}), ({pattern:'b', value:'baby'}), ({pattern:'b', value:'book'}), ({pattern:'c', value:'cake'}), ({pattern:'c', value:'cat'})];
        } else if (userInput == "Unit 2") {
            pArray = [({pattern:'d', value:'dog'}), ({pattern:'d', value:'doll'}), ({pattern:'e', value:'egg'}), ({pattern:'e', value:'elephant'}), ({pattern:'f', value:'fish'}), ({pattern:'f', value:'frog'})];
        } else if (userInput == "Unit 3") {
            pArray = [({pattern:'g', value:'girl'}), ({pattern:'g', value:'goose'}), ({pattern:'h', value:'hill'}), ({pattern:'h', value:'house'}), ({pattern:'i', value:'igloo'}), ({pattern:'i', value:'ink'})];
        } else if (userInput == "Review 1") {
            pArray = [({pattern:'d', value:'dog'}), ({pattern:'d', value:'doll'}), ({pattern:'e', value:'egg'}), ({pattern:'e', value:'elephant'}), ({pattern:'f', value:'fish'}), ({pattern:'f', value:'frog'}), ({pattern:'g', value:'girl'}), ({pattern:'g', value:'goose'}), ({pattern:'h', value:'hill'}), ({pattern:'h', value:'house'}), ({pattern:'i', value:'igloo'}), ({pattern:'i', value:'ink'})];
        } else if (userInput == "Unit 4") {
            pArray = [({pattern:'j', value:'jam'}), ({pattern:'j', value:'jelly'}), ({pattern:'k', value:'key'}), ({pattern:'k', value:'kite'}), ({pattern:'l', value:'leg'}), ({pattern:'l', value:'lemon'})];
        } else if (userInput == "Unit 5") {
            pArray = [({pattern:'m', value:'map'}), ({pattern:'m', value:'mouse'}), ({pattern:'n', value:'nose'}), ({pattern:'n', value:'nut'}), ({pattern:'o', value:'orange'}), ({pattern:'o', value:'octopus'})];
        } else if (userInput == "Unit 6") {
            pArray = [({pattern:'p', value:'picture'}), ({pattern:'p', value:'pin'}), ({pattern:'q', value:'queen'}), ({pattern:'q', value:'quiet'}), ({pattern:'r', value:'rabbit'}), ({pattern:'r', value:'rose'})];
        } else if (userInput == "Review 2") {
            pArray = [({pattern:'j', value:'jam'}), ({pattern:'j', value:'jelly'}), ({pattern:'k', value:'key'}), ({pattern:'k', value:'kite'}), ({pattern:'l', value:'leg'}), ({pattern:'l', value:'lemon'}), ({pattern:'m', value:'map'}), ({pattern:'m', value:'mouse'}), ({pattern:'n', value:'nose'}), ({pattern:'n', value:'nut'}), ({pattern:'o', value:'orange'}), ({pattern:'o', value:'octopus'}), ({pattern:'p', value:'picture'}), ({pattern:'p', value:'pin'}), ({pattern:'q', value:'queen'}), ({pattern:'q', value:'quiet'}), ({pattern:'r', value:'rabbit'}), ({pattern:'r', value:'rose'})];
        } else if (userInput == "Unit 7") {
            pArray = [({pattern:'s', value:'snake'}), ({pattern:'s', value:'sock'}), ({pattern:'t', value:'tent'}), ({pattern:'t', value:'tree'}), ({pattern:'u', value:'umbrella'}), ({pattern:'u', value:'uncle'})];
        } else if (userInput == "Unit 8") {
            document.getElementById("pInstructions").innerHTML = "Type the first letter of the word. ('x' for box)";
            pArray = [({pattern:'v', value:'vase'}), ({pattern:'v', value:'vest'}), ({pattern:'w', value:'wand'}), ({pattern:'w', value:'window'}), ({pattern:'x', value:'x-ray'}), ({pattern:'x', value:'box'})];
        } else if (userInput == "Unit 9") {
            pArray = [({pattern:'y', value:'yawn'}), ({pattern:'y', value:'yellow'}), ({pattern:'y', value:'yo-yo'}), ({pattern:'y', value:'yogurt'}), ({pattern:'z', value:'zigzag'}), ({pattern:'z', value:'zip'}), ({pattern:'z', value:'zipper'}), ({pattern:'z', value:'zoo'})];
        } else if (userInput == "Review 3") {
            document.getElementById("pInstructions").innerHTML = "Type the first letter of the word. ('x' for box)";
            pArray = [({pattern:'s', value:'snake'}), ({pattern:'s', value:'sock'}), ({pattern:'t', value:'tent'}), ({pattern:'t', value:'tree'}), ({pattern:'u', value:'umbrella'}), ({pattern:'u', value:'uncle'}), ({pattern:'v', value:'vase'}), ({pattern:'v', value:'vest'}), ({pattern:'w', value:'wand'}), ({pattern:'w', value:'window'}), ({pattern:'x', value:'x-ray'}), ({pattern:'x', value:'box'}), ({pattern:'y', value:'yawn'}), ({pattern:'y', value:'yellow'}), ({pattern:'y', value:'yo-yo'}), ({pattern:'y', value:'yogurt'}), ({pattern:'z', value:'zigzag'}), ({pattern:'z', value:'zip'}), ({pattern:'z', value:'zipper'}), ({pattern:'z', value:'zoo'})];
        } else if (userInput == "Final Review") {
            document.getElementById("pInstructions").innerHTML = "Type the first letter of the word. ('x' for box)";
            pArray = [({pattern:'d', value:'dog'}), ({pattern:'d', value:'doll'}), ({pattern:'e', value:'egg'}), ({pattern:'e', value:'elephant'}), ({pattern:'f', value:'fish'}), ({pattern:'f', value:'frog'}), ({pattern:'g', value:'girl'}), ({pattern:'g', value:'goose'}), ({pattern:'h', value:'hill'}), ({pattern:'h', value:'house'}), ({pattern:'i', value:'igloo'}), ({pattern:'i', value:'ink'}), ({pattern:'j', value:'jam'}), ({pattern:'j', value:'jelly'}), ({pattern:'k', value:'key'}), ({pattern:'k', value:'kite'}), ({pattern:'l', value:'leg'}), ({pattern:'l', value:'lemon'}), ({pattern:'m', value:'map'}), ({pattern:'m', value:'mouse'}), ({pattern:'n', value:'nose'}), ({pattern:'n', value:'nut'}), ({pattern:'o', value:'orange'}), ({pattern:'o', value:'octopus'}), ({pattern:'p', value:'picture'}), ({pattern:'p', value:'pin'}), ({pattern:'q', value:'queen'}), ({pattern:'q', value:'quiet'}), ({pattern:'r', value:'rabbit'}), ({pattern:'r', value:'rose'}), ({pattern:'s', value:'snake'}), ({pattern:'s', value:'sock'}), ({pattern:'t', value:'tent'}), ({pattern:'t', value:'tree'}), ({pattern:'u', value:'umbrella'}), ({pattern:'u', value:'uncle'}), ({pattern:'v', value:'vase'}), ({pattern:'v', value:'vest'}), ({pattern:'w', value:'wand'}), ({pattern:'w', value:'window'}), ({pattern:'x', value:'x-ray'}), ({pattern:'x', value:'box'}), ({pattern:'y', value:'yawn'}), ({pattern:'y', value:'yellow'}), ({pattern:'y', value:'yo-yo'}), ({pattern:'y', value:'yogurt'}), ({pattern:'z', value:'zigzag'}), ({pattern:'z', value:'zip'}), ({pattern:'z', value:'zipper'}), ({pattern:'z', value:'zoo'})];
        } else {
            pArray = [({pattern:'blank', value:'blank'})];
        }
    }
    else if (level_id == "Level 2") {
        pArray = ["door", "window", "table", "blackboard", "trash can", "fan", "television", "DVD player", "whiteboard", "telephone", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "yo-yo", "robot", "doll", "teddy bear", "ball", "blocks", "video game", "board game", "bananas", "lemons", "wax apples", "pears", "papayas", "watermelons", "guavas", "grapes", "sweet", "sour", "tomatoes", "mangoes",  "strawberries", "cherries", "peaches", "oranges", "kiwis", "coconuts", "sing", "dance", "run", "swim", "read", "write", "type", "jump", "draw", "in", "on", "under", "next to", "between", "behind", "in front of", "near", "living room", "dining room", "bedroom", "bathroom", "kitchen", "backyard", "garden", "basement", "tiger", "lion", "monkey", "bear", "zebra", "goat", "elephant", "hippo", "snake", "parrot"];
        if (userInput == "Unit 1") {
            pArray = pArray.slice(0,10);
        } else if (userInput == "Unit 2") {
            pArray = pArray.slice(10,20);
        } else if (userInput == "Unit 3") {
            pArray = pArray.slice(20,28);
        } else if (userInput == "Review 1") {
            pArray = pArray.slice(0,28);
        } else if (userInput == "Unit 4") {
            pArray = pArray.slice(28,38);
        } else if (userInput == "Unit 5") {
            pArray = pArray.slice(38,46);
        } else if (userInput == "Unit 6") {
            pArray = pArray.slice(46,55);
        } else if (userInput == "Review 2") {
            pArray = pArray.slice(28,55);
        } else if (userInput == "Unit 7") {
            pArray = pArray.slice(55,63);
        } else if (userInput == "Unit 8") {
            pArray = pArray.slice(63,71);
        } else if (userInput == "Unit 9") {
            pArray = pArray.slice(-10);
        } else if (userInput == "Review 3") {
            pArray = pArray.slice(55);
        } else if (userInput == "Final Review") {
            pArray = pArray;
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 3") {
        pArray = ["bird", "kitten", "puppy", "bunny", "turtle", "spider", "frog", "fish", "hamster", "beetle", "hamburger", "pizza", "hot dog", "French fries", "onion rings", "chicken nuggets", "cola", "soda", "salad", "fried chicken", "milk", "juice", "tea", "coffee", "ice cream", "cake", "bread", "cookies", "potato chips", "popcorn", "kite", "puzzle", "jump rope", "model car", "bicycle", "CD player", "computer", "computer game", "stuffed animal", "action figure", "eyes", "ears", "nose", "mouth", "teeth", "tooth", "hands", "feet", "foot", "arms", "legs", "head", "face", "hair", "long", "short", "curly", "straight", "braided", "blond", "dark", "red hair", "brown hair", "black hair", "baseball", "basketball", "soccer", "badminton", "ping-pong", "dodgeball", "volleyball", "tennis", "golf", "football", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "fly a kite", "read a book", "listen to music", "watch TV", "ride a bike", "weather", "sunny", "rainy", "cloudy", "windy", "snowy", "go shopping", "go swimming", "go hiking", "go fishing", "go skateboarding", "go jogging"];
        if (userInput == "Unit 1") {
            pArray = pArray.slice(0,10);
        } else if (userInput == "Unit 2") {
            pArray = pArray.slice(10,20);
        } else if (userInput == "Unit 3") {
            pArray = pArray.slice(20,30);
        } else if (userInput == "Review 1") {
            pArray = pArray.slice(0,30);
        } else if (userInput == "Unit 4") {
            pArray = pArray.slice(30,40);
        } else if (userInput == "Unit 5") {
            pArray = pArray.slice(40,53);
        } else if (userInput == "Unit 6") {
            pArray = pArray.slice(53,64);
        } else if (userInput == "Review 2") {
            pArray = pArray.slice(30,64);
        } else if (userInput == "Unit 7") {
            pArray = pArray.slice(64,74);
        } else if (userInput == "Unit 8") {
            pArray = pArray.slice(74,86);
        } else if (userInput == "Unit 9") {
            pArray = pArray.slice(-12);
        } else if (userInput == "Review 3") {
            pArray = pArray.slice(64);
        } else if (userInput == "Final Review") {
            pArray = pArray;
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 4") {
        document.getElementById("pInstructions").innerHTML = "Listen and write.";
        links = [""];
        phonicsLesson = "";
        if (userInput == "Unit 1") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 2") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 3") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Review 1") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 4") {
            document.getElementById("pInstructions").innerHTML = "Listen and write 'sw' or 'wh'.";
            pArray = [({pattern:'wh', value:'whale'}), ({pattern:'wh', value:'whip'}), ({pattern:'wh', value:'wheel'}), ({pattern:'wh', value:'wheat'}), ({pattern:'sw', value:'swan'}), ({pattern:'sw', value:'sweater'}), ({pattern:'sw', value:'sweat'}), ({pattern:'sw', value:'sweep'})];
        } else if (userInput == "Unit 5") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 6") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Review 2") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 7") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 8") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 9") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Review 3") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Final Review") {
            pArray = ["blank", "blank"];
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 5") {
        pArray = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "doctor", "nurse", "driver", "police officer", "firefighter", "pilot", "office worker", "housekeeper", "mail carrier", "Chinese", "English", "math", "science", "social studies", "music", "art", "always", "usually", "often", "sometimes", "seldom", "never", "busy", "nervous", "help", "cry", "spring", "summer", "fall", "winter", "warm", "hot", "cool", "cold", "do the laundry", "sweep the floor", "mop the floor", "walk the dog", "go mountain climbing", "play chess", "water the plants", "take a walk", "once", "twice", "three times", "week", "month", "year", "play the piano", "play cards", "go to the movies", "go abroad", "shoes", "boots", "socks", "jeans", "pants", "shorts", "glasses", "gloves", "earrings", "sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "ring", "belt", "backpack", "cheap", "expensive"];
        if (userInput == "Unit 1") {
            pArray = pArray.slice(0,12);
        } else if (userInput == "Unit 2") {
            pArray = pArray.slice(12,21);
        } else if (userInput == "Unit 3") {
            pArray = pArray.slice(21,28);
        } else if (userInput == "Review 1") {
            pArray = pArray.slice(0,28);
        } else if (userInput == "Unit 4") {
            pArray = pArray.slice(28,39);
        } else if (userInput == "Unit 5") {
            pArray = pArray.slice(39,47);
        } else if (userInput == "Unit 6") {
            pArray = pArray.slice(47,55);
        } else if (userInput == "Review 2") {
            pArray = pArray.slice(28,55);
        } else if (userInput == "Unit 7") {
            pArray = pArray.slice(55,65);
        } else if (userInput == "Unit 8") {
            pArray = pArray.slice(65,74);
        } else if (userInput == "Unit 9") {
            pArray = pArray.slice(-11);
        } else if (userInput == "Review 3") {
            pArray = pArray.slice(55);
        } else if (userInput == "Final Review") {
            pArray = pArray;
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 6") {
        pArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "tie", "scarf", "necklace", "sneakers", "raincoat", "uniform", "slippers", "watch", "glue", "scissors", "crayons", "markers", "pencil case", "tape", "pencil sharpener", "notebook", "paper", "correction tape", "excited", "bored", "sick", "scared", "early", "late", "yesterday", "weekend", "beach", "airport", "farm", "concert", "mountain", "amusement park", "playground", "port", "classroom", "field", "teachers office", "nurses office", "restroom", "snack bar", "gym", "hallway", "hour", "minute", "second", "fixed the bike", "cleaned the room", "visited", "painted the wall", "washed my hair", "jumped rope", "used the computer", "played a video game", "studied", "fried an egg", "copied", "chatted", "planned", "stopped", "put", "cut", "read", "a bag of chips", "a bottle of water", "a can of soda", "a piece of cake", "a slice of bread", "a cup of tea", "a glass of juice", "a box of crackers", "a bar of chocolate"];
        if (userInput == "Unit 1") {
            pArray = pArray.slice(0,12);
        } else if (userInput == "Unit 2") {
            pArray = pArray.slice(12,20);
        } else if (userInput == "Unit 3") {
            pArray = pArray.slice(20,30);
        } else if (userInput == "Review 1") {
            pArray = pArray.slice(0,30);
        } else if (userInput == "Unit 4") {
            pArray = pArray.slice(30,38);
        } else if (userInput == "Unit 5") {
            pArray = pArray.slice(38,47);
        } else if (userInput == "Unit 6") {
            pArray = pArray.slice(47,57);
        } else if (userInput == "Review 2") {
            pArray = pArray.slice(30,57);
        } else if (userInput == "Unit 7") {
            pArray = pArray.slice(57,65);
        } else if (userInput == "Unit 8") {
            pArray = pArray.slice(65,74);
        } else if (userInput == "Unit 9") {
            pArray = pArray.slice(-9);
        } else if (userInput == "Review 3") {
            pArray = pArray.slice(57);
        } else if (userInput == "Final Review") {
            pArray = pArray;
        } else {
            pArray = ["blank", "blank"];
        }
    } else {
        document.getElementById("pInstructions").innerHTML = "There are no phonics words for this level.";
        pArray = ["blank", "blank"];
    }

    shuffleArray(pArray);
    document.getElementById("current_phoneme").innerHTML = '<video width="420px" autoplay id="video1" src="video/'+pArray[pArray_i].value+'.mp4"></video>';
    document.getElementById("phonicsCheck").pattern = pArray[pArray_i].pattern;
}
