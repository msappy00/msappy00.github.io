function setQuiz(){
array = [];
    document.getElementById("array0").innerHTML = " ";
    document.getElementById("array1").innerHTML = " ";
    document.getElementById("array2").innerHTML = " ";
    document.getElementById("array3").innerHTML = " ";
    document.getElementById("array4").innerHTML = " ";
    document.getElementById("array5").innerHTML = " ";
    document.getElementById("array6").innerHTML = " ";
    document.getElementById("array7").innerHTML = " ";
    document.getElementById("array8").innerHTML = " ";
    document.getElementById("array9").innerHTML = " ";

    level_id = sessionStorage.getItem("sessionLevel");
    unit_id = sessionStorage.getItem("sessionUnit");
    document.getElementById("levelId").textContent = level_id + " " + unit_id;
    currentInput = level_id + unit_id;
    if (currentInput == "StarterUnit 1") {
        array = ["apple", "ant", "boy", "ball", "cat", "car", "dog", "desk"];
    } else if (currentInput == "StarterUnit 2") {
        array = ["elephant", "egg", "fish", "frog", "goat", "girl", "house", "hat"];
    } else if (currentInput == "StarterUnit 3") {
        array = ["Indian", "igloo", "jet", "jar", "kite", "king", "lollipop", "lion"];
    } else if (currentInput == "StarterUnit 4") {
        array = ["monkey", "milk", "nurse", "nose", "ox", "octopus", "pig", "pink"];
    } else if (currentInput == "StarterUnit 5") {
        array = ["queen", "quilt", "rabbit", "rat", "snake", "sun", "tiger", "toe"];
    } else if (currentInput == "StarterUnit 6") {
        array = ["umbrella", "under", "vampire", "vase", "window", "watermelon", "x-ray", "box"];
    } else if (currentInput == "StarterUnit 7") {
        array = ["yo-yo", "yellow", "zebra", "zoo"];
    } else if (currentInput == "StarterUnit 8") {
        array = [];
    } else if (currentInput == "StarterUnit 9") {
        array = [];
    } else if (currentInput == "Level 1Unit 1") {
        array = ["boy", "girl", "man", "woman", "student", "teacher"];
    } else if (currentInput == "Level 1Unit 2") {
        array = ["grandfather", "grandmother", "father", "mother", "uncle", "aunt", "cousin", "brother", "sister"];
    } else if (currentInput == "Level 1Unit 3") {
        array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    } else if (currentInput == "Level 1Unit 4") {
        array = ["chubby", "thin", "tall", "short", "sad", "happy", "old", "young", "cute"];
    } else if (currentInput == "Level 1Unit 5") {
        array = ["pencil", "eraser", "ruler", "pen", "desk", "chair", "school bag", "book", "pencil case"];
    } else if (currentInput == "Level 1Unit 6") {
        array = ["red", "yellow", "green", "blue", "pink", "black", "white", "brown", "orange", "purple"];
    } else if (currentInput == "Level 1Unit 7") {
        array = ["hat", "cap", "coat", "jacket", "dress", "skirt", "shirt", "T-shirt"];
    } else if (currentInput == "Level 1Unit 8") {
        array = ["dog", "cat", "rat", "rabbit", "cow", "horse", "sheep", "pig", "chicken", "duck"];
    } else if (currentInput == "Level 1Unit 9") {
        array = ["hungry", "thirsty", "angry", "lazy", "noisy", "quiet", "sleepy", "tired"];
    } else if (currentInput == "Level 2Unit 1") {
        array = ["door", "window", "table", "blackboard", "trash can", "fan", "television", "DVD player", "whiteboard", "telephone"];
    } else if (currentInput == "Level 2Unit 2") {
        array = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    } else if (currentInput == "Level 2Unit 3") {
        array = ["yo-yo", "robot", "doll", "teddy bear", "ball", "blocks", "video game", "board game"];
    } else if (currentInput == "Level 2Unit 4") {
        array = ["banana", "lemon", "wax apple", "pear", "papaya", "watermelon", "guava", "grape", "sweet", "sour"];
    } else if (currentInput == "Level 2Unit 5") {
        array = ["tomato", "tomatoes", "mango", "mangoes", "strawberry", "strawberries", "cherry", "cherries", "peaches", "orange", "kiwi", "coconut"];
    } else if (currentInput == "Level 2Unit 6") {
        array = ["sing", "dance", "run", "swim", "read", "write", "type", "jump", "draw"];
    } else if (currentInput == "Level 2Unit 7") {
        array = ["in", "on", "under", "next to", "between", "behind", "in front of", "near"];
    } else if (currentInput == "Level 2Unit 8") {
        array = ["living room", "dining room", "bedroom", "bathroom", "kitchen", "backyard", "garden", "basement"];
    } else if (currentInput == "Level 2Unit 9") {
        array = ["tiger", "lion", "monkey", "bear", "zebra", "goat", "elephant", "hippo", "snake", "parrot"];
    } else if (currentInput == "Level 3Unit 1") {
        array = ["bird", "kitten", "puppy", "bunny", "turtle", "spider", "frog", "fish", "hamster", "beetle"];
    } else if (currentInput == "Level 3Unit 2") {
        array = ["hamburger", "pizza", "hot dog", "French fries", "onion rings", "chicken nuggets", "cola", "soda", "salad", "fried chicken"];
    } else if (currentInput == "Level 3Unit 3") {
        array = ["milk", "juice", "tea", "coffee", "ice cream", "cake", "bread", "cookies", "potato chips", "popcorn"];
    } else if (currentInput == "Level 3Unit 4") {
        array = ["kite", "puzzle", "jump rope", "model car", "bicycle", "CD player", "computer", "computer game", "stuffed animal", "action figure"];
    } else if (currentInput == "Level 3Unit 5") {
        array = ["eyes", "ears", "nose", "mouth", "teeth", "tooth", "hands", "feet", "foot", "arms", "legs", "head", "face"];
    } else if (currentInput == "Level 3Unit 6") {
        array = ["hair", "long", "short", "curly", "straight", "braided", "blond", "dark", "red hair", "brown hair", "black hair"];
    } else if (currentInput == "Level 3Unit 7") {
        array = ["baseball", "basketball", "soccer", "badminton", "ping-pong", "dodgeball", "volleyball", "tennis", "golf", "football"];
    } else if (currentInput == "Level 3Unit 8") {
        array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "fly a kite", "read a book", "listen to music", "watch TV", "ride a bike"];
    } else if (currentInput == "Level 3Unit 9") {
        array = ["weather", "sunny", "rainy", "cloudy", "windy", "snowy", "go shopping", "go swimming", "go hiking", "go fishing", "go skateboarding", "go jogging"];
    } else if (currentInput == "Level 4Unit 1") {
        array = ["get up", "go to school", "go home", "do homework", "take a bath", "go to bed", "thirty", "forty", "fifty", "have English class"];
    } else if (currentInput == "Level 4Unit 2") {
        array = ["on foot", "scooter", "motorcycle", "car", "bus", "bicycle", "MRT", "train", "taxi", "high-speed rail"];
    } else if (currentInput == "Level 4Unit 3") {
        array = ["boat", "ship", "airplane", "helicopter", "van", "walk", "park", "supermarket", "city", "countryside", "subway"];
    } else if (currentInput == "Level 4Unit 4") {
        array = ["morning", "afternoon", "evening", "exercise", "read the newspaper", "take a nap", "surf the Net", "keep my diary", "have a snack", "play the piano", "play the violin", "walk the dog"];
    } else if (currentInput == "Level 4Unit 5") {
        array = ["eat", "drink", "cook", "laugh", "draw", "sweep", "study", "drive", "write", "sleep", "play"];
    } else if (currentInput == "Level 4Unit 6") {
        array = ["wash my face", "brush my teeth", "comb my hair", "make my bed", "eat breakfast", "eat lunch", "eat dinner", "wash the dishes"];
    } else if (currentInput == "Level 4Unit 7") {
        array = ["police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "next to", "across from"];
    } else if (currentInput == "Level 4Unit 8") {
        array = ["museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"];
    } else if (currentInput == "Level 4Unit 9") {
        array = ["go straight", "turn right", "turn left", "traffic light", "corner", "first", "second", "third", "road", "street", "parking lot"];
    } else if (currentInput == "Level 5Unit 1") {
        array = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
    } else if (currentInput == "Level 5Unit 2") {
        array = ["doctor", "nurse", "driver", "police officer", "firefighter", "pilot", "office worker", "housekeeper", "mail carrier", "clerk"];
    } else if (currentInput == "Level 5Unit 3") {
        array = ["Chinese", "English", "math", "science", "social studies", "music", "art", "P. E."];
    } else if (currentInput == "Level 5Unit 4") {
        array = ["always", "usually", "often", "sometimes", "seldom", "never", "busy", "nervous", "help", "cry"];
    } else if (currentInput == "Level 5Unit 5") {
        array = ["spring", "summer", "fall", "winter", "warm", "hot", "cool", "cold"];
    } else if (currentInput == "Level 5Unit 6") {
        array = ["do the laundry", "sweep the floor", "mop the floor", "walk the dog", "go mountain climbing", "play chess", "water the plants", "take a walk"];
    } else if (currentInput == "Level 5Unit 7") {
        array = ["once", "twice", "three times", "week", "month", "year", "play the piano", "play cards", "go to the movies", "go abroad"];
    } else if (currentInput == "Level 5Unit 8") {
        array = ["shoes", "boots", "socks", "jeans", "pants", "shorts", "glasses", "gloves", "earrings"];
    } else if (currentInput == "Level 5Unit 9") {
        array = ["sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "ring", "belt", "backpack", "cheap", "expensive"];
    } else if (currentInput == "Level 6Unit 1") {
        array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    } else if (currentInput == "Level 6Unit 2") {
        array = ["tie", "scarf", "necklace", "sneakers", "raincoat", "uniform", "slippers", "watch"];
    } else if (currentInput == "Level 6Unit 3") {
        array = ["glue", "scissors", "crayons", "markers", "pencil case", "tape", "pencil sharpener", "notebook", "paper", "correction tape"];
    } else if (currentInput == "Level 6Unit 4") {
        array = ["excited", "bored", "sick", "scared", "early", "late", "yesterday", "weekend"];
    } else if (currentInput == "Level 6Unit 5") {
        array = ["beach", "airport", "farm", "concert", "mountain", "amusement park", "playground", "port"];
    } else if (currentInput == "Level 6Unit 6") {
        array = ["classroom", "field", "teacher’s office", "nurse’s office", "restroom", "snack bar", "gym", "hallway", "hour", "minute", "second"];
    } else if (currentInput == "Level 6Unit 7") {
        array = ["fixed the bike", "cleaned the room", "visited", "painted the wall", "washed my hair", "jumped rope", "used the computer", "played a video game"];
    } else if (currentInput == "Level 6Unit 8") {
        array = ["studied", "fried an egg", "copied", "chatted", "planned", "stopped", "put", "cut", "read"];
    } else if (currentInput == "Level 6Unit 9") {
        array = ["a bag of chips", "a bottle of water", "a can of soda", "a piece of cake", "a slice of bread", "a cup of tea", "a glass of juice", "a box of crackers", "a bar of chocolate"];
    } else if (currentInput == "Level 7Unit 1") {
        array = ["went", "came", "took", "made", "saw", "got", "sat", "sang", "gave", "swam"];
    } else if (currentInput == "Level 7Unit 2") {
        array = ["rode", "drove", "wrote", "had", "sent", "bought", "taught", "brought", "caught", "found"];
    } else if (currentInput == "Level 7Unit 3") {
        array = ["bake a cake", "cook a meal", "make a sandwich", "draw a picture", "vacuum the floor", "make a call", "answer the phone", "try on a shirt"];
    } else if (currentInput == "Level 7Unit 4") {
        array = ["watch the news", "listen to the radio", "read a magazine", "build a model", "do puzzles", "ring", "take a message", "leave a message"];
    } else if (currentInput == "Level 7Unit 5") {
        array = ["wake up", "woke up", "take a shower", "took a shower", "get dressed", "got dressed", "shave my face", "shaved my face", "blow-dry my hair", "blow-dried my hair", "put on makeup", "set the table", "feed the dog", "fed the dog"];
    } else if (currentInput == "Level 7Unit 6") {
        array = ["study hard", "pass the exam", "fail the exam", "hurry up", "catch the bus", "miss the bus", "be careful", "win the game", "lose the game"];
    } else if (currentInput == "Level 7Unit 7") {
        array = ["go camping", "go skiing", "go cycling", "go snorkeling", "go in-line skating", "go surfing", "go rafting", "go ice-skating"];
    } else if (currentInput == "Level 7Unit 8") {
        array = ["watch the sunrise", "watch the sunset", "go on a picnic", "see the maple leaves", "go to the hot springs", "have a party", "have hot pot", "go on a vacation"];
    } else if (currentInput == "Level 7Unit 9") {
        array = ["artist", "musician", "soccer player", "vet", "flight attendant", "America", "Korea", "Japan", "China", "Canada", "England", "France"];
    } else if (currentInput == "Level 8Unit 1") {
        array = ["husband", "wife", "daughter", "son", "take medicine", "took medicine", "catch a cold", "caught a cold", "oversleep", "overslept", "give ... to", "gave ... to", "bring ... for", "brought ... for"];
    } else if (currentInput == "Level 8Unit 2") {
        array = ["fast", "faster", "slow", "slower", "fat", "fatter", "slim", "slimmer", "pretty", "prettier", "ugly", "uglier", "big", "bigger", "small", "smaller"];
    } else if (currentInput == "Level 8Unit 3") {
        array = ["heavy", "heavier", "light", "lighter", "cheap", "cheaper", "handsome", "more handsome", "beautiful", "more beautiful", "modern", "more modern", "difficult", "more difficult", "expensive", "more expensive", "dangerous", "more dangerous"];
    } else if (currentInput == "Level 8Unit 4") {
        array = ["good", "better", "bad", "worse", "much", "more", "little", "less", "strong", "stronger", "weak", "weaker"];
    } else if (currentInput == "Level 8Unit 5") {
        array = ["young", "younger", "youngest", "old", "older", "oldest", "wet", "wetter", "wettest", "clean", "cleaner", "cleanest", "dirty", "dirtier", "dirtiest", "easy", "easier", "easiest"];
    } else if (currentInput == "Level 8Unit 6") {
        array = ["popular", "more popular", "most popular", "colorful", "more colorful", "most colorful", "comfortable", "more comfortable", "most comfortable", "hardworking", "more hardworking", "most hardworking", "careful", "more careful", "most careful", "careless", "more careless", "most careless"];
    } else if (currentInput == "Level 8Unit 7") {
        array = ["good", "better", "best", "bad", "worse", "worst", "much", "more", "most", "little", "less", "least", "high", "higher", "highest", "low", "lower", "lowest"];
    } else if (currentInput == "Level 8Unit 8") {
        array = ["penguin", "giraffe", "koala", "fur", "crocodile", "kangaroo", "camel", "ice", "panda", "peacock", "dolphin", "wing"];
    } else if (currentInput == "Level 8Unit 9") {
        array = ["biscuit", "cupboard", "lemonade", "sweets", "ketchup", "butter", "peanut butter", "cheese"];
    } else if (currentInput == "Level 9Unit 1") {
        array = ["boiling", "over", "shiny", "gold", "horizon", "postcard", "plum", "juicy", "air", "fresh", "kind", "deep", "breath"];
    } else if (currentInput == "Level 9Unit 2") {
        array = ["fantastic", "feel", "look", "friendly", "sound", "night market", "try", "delicious", "taste", "salty", "spicy", "interesting", "sweet", "stinky", "famous", "terrible"];
    } else if (currentInput == "Level 9Unit 3") {
        array = ["inside", "horror", "furry", "move", "fool", "eyeshade", "strange", "disgusting", "joke", "sour", "bitter", "answer", "durian"];
    } else if (currentInput == "Level 9Unit 4") {
        array = ["idea", "comedy", "relaxed", "horror movie", "hate", "bloody", "scary", "nightmare", "romantic movie", "actor", "actress", "adventure movie", "search", "animated movie", "wonderland", "ticket"];
    } else if (currentInput == "Level 9Unit 5") {
        array = ["starving", "whatever", "pork", "beef", "seafood", "allergic", "troublesome", "pasta", "order", "curry", "rice", "iced", "black tea", "sugar", "dessert"];
    } else if (currentInput == "Level 9Unit 6") {
        array = ["twins", "elementary school", "pajama", "kimchi", "character", "different", "fitting room", "trick", "clerk", "praise", "adorable", "giggle"];
    } else if (currentInput == "Level 9Unit 7") {
        array = ["talent", "contest", "musical instrument", "recorder", "tambourine", "triangle", "champion", "second place", "third place", "first place", "excellent"];
    } else if (currentInput == "Level 9Unit 8") {
        array = ["area", "ride", "shout", "scream", "if", "challenge", "choice", "brave", "pony", "food court", "cafeteria", "fast food", "still", "join"];
    } else if (currentInput == "Level 9Unit 9") {
        array = ["notice", "sale", "dozen", "congratulations", "draw", "lucky", "wonderful", "squeeze", "refrigerator", "find out", "already"];
    } else if (currentInput == "Level 10Unit 1") {
        array = ["dizzy", "headache", "sore throat", "fever", "cough", "sneeze", "runny nose", "flu", "serious", "stomachache", "diarrhea", "vomit", "Japanese", "sushi", "sashimi"];
    } else if (currentInput == "Level 10Unit 2") {
        array = ["newborn", "hold", "even", "care", "family", "lonely", "upset", "of course", "spend", "take care of", "tickle", "together"];
    } else if (currentInput == "Level 10Unit 3") {
        array = ["weight", "lose", "enough", "need", "tiring", "boring", "interesting", "interested", "exciting", "sport", "surprising", "surprised", "favorite"];
    } else if (currentInput == "Level 10Unit 4") {
        array = ["news", "hit", "get on", "wait for", "hurt", "get out of", "run after", "police", "look for", "get into", "get off", "look after"];
    } else if (currentInput == "Level 10Unit 5") {
        array = ["look up", "word", "dictionary", "take off", "put on", "turn on", "flashlight", "take out", "turn off", "put down", "pick up", "put away", "clean up"];
    } else if (currentInput == "Level 10Unit 6") {
        array = ["have", "dusty", "let", "housework", "make", "sweater", "messy", "iron", "knock", "turn into", "prince"];
    } else if (currentInput == "Level 10Unit 7") {
        array = ["national", "quickly", "museum guide", "rule", "traditional", "clearly", "softly", "gently", "run into", "important", "understand", "well", "repeat"];
    } else if (currentInput == "Level 10Unit 8") {
        array = ["as soon as", "only", "thoughtful", "asleep", "move", "pull", "sleeve", "save", "become", "die", "believe", "true"];
    } else if (currentInput == "Level 10Unit 9") {
        array = ["place", "dump", "happen", "owner", "faint", "ground", "mend", "clay", "unique"];
    } else if (currentInput == "Level 11Unit 1") {
        array = ["village", "grow", "neighbor", "life", "beginning", "crowded", "apartment", "start", "elevator", "stairway", "familiar", "peaceful", "decide"];
    } else if (currentInput == "Level 11Unit 2") {
        array = ["seesaw", "slide", "swing", "monkey bars", "practice", "tremble", "jungle gym", "borrow", "return", "hope", "finish", "bother"];
    } else if (currentInput == "Level 11Unit 3") {
        array = ["across", "skywalk", "crosswalk", "sidewalk", "pedestrian", "helmet", "unforgivable", "buckle", "seat belt", "shortcut", "illegal", "calm"];
    } else if (currentInput == "Level 11Unit 4") {
        array = ["exhibition", "discount", "yet", "author", "sign", "arrive", "signature", "also", "subscribe", "weekly"];
    } else if (currentInput == "Level 11Unit 5") {
        array = ["semester", "receive", "package", "instant noodles", "homesick", "homesickness", "relieve", "New York", "college", "whenever"];
    } else if (currentInput == "Level 11Unit 6") {
        array = ["born", "maid", "response", "examine", "cure", "deaf", "blind", "ill-tempered", "smash", "monster", "fork", "punish", "led", "lifelong"];
    } else if (currentInput == "Level 11Unit 7") {
        array = ["burnt", "frozen", "put out", "wounded", "fried", "boiled", "homeless", "secondhand", "used", "buyer", "satisfied", "spoiled"];
    } else if (currentInput == "Level 11Unit 8") {
        array = ["faucet", "leak", "spend", "introduce", "neighborhood", "drop", "repair", "stew", "hide"];
    } else if (currentInput == "Level 11Unit 9") {
        array = ["cupboard", "handmade", "antique", "budget", "jewelry box", "flea market", "stuff", "frame", "perfect"];
    } else if (currentInput == "Level 12Unit 1") {
        array = ["yourself", "myself", "classmates", "ourselves", "themselves", "trust", "yourselves", "himself", "herself", "carry", "almost"];
    } else if (currentInput == "Level 12Unit 2") {
        array = ["blood type", "article", "personality", "stupid", "confident", "outgoing", "leader", "group", "correct", "patient", "responsible", "creative", "flexible", "calm", "fair"];
    } else if (currentInput == "Level 12Unit 3") {
        array = ["consider", "faithful", "inconvenient", "besides", "guide", "train", "priest", "successfully", "helper", "rare", "disturb", "feed", "provide", "environment", "partner"];
    } else if (currentInput == "Level 12Unit 4") {
        array = ["desktop", "monitor", "mouse", "keyboard", "assemble", "professional", "switch", "power", "button", "plug", "socket", "genius"];
    } else if (currentInput == "Level 12Unit 5") {
        array = ["planetarium", "display", "free", "space", "shuttle", "astronaut", "search"];
    } else if (currentInput == "Level 12Unit 6") {
        array = ["accident", "protect", "danger", "earthquake", "occur", "building", "squat", "firm", "furniture", "cover", "crawl", "exit", "trap", "emergency", "arm", "burn", "flush", "soak"];
    } else if (currentInput == "Level 12Unit 7") {
        array = ["job", "toilsome", "high heels", "salary", "difference", "service", "passenger", "complain", "cram school", "lesson", "senior high school", "necessary"];
    } else if (currentInput == "Level 12Unit 8") {
        array = ["high jump", "light", "diet", "healthy", "habit", "grateful", "cockroach", "wiper", "wipe", "broom", "dustpan", "mood"];
    } else if (currentInput == "Level 12Unit 9") {
        array = ["inventor", "invent", "magical", "pill", "wing", "incredible", "cape", "invisible", "continue", "owner", "shop", "mint", "cranberry", "flavor", "imagine", "customer"];
    } else {
        document.getElementById("levelId").innerHTML = "";
        array = ["blank", "blank"];
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    shuffleArray(array);

    for (var i = 0; i < 10 ; i++){
        if (array[i] == undefined) {
            array[i] = "";
        }
        
        document.getElementById("array0").innerHTML = array[0];
        document.getElementById("array1").innerHTML = array[1];
        document.getElementById("array2").innerHTML = array[2];
        document.getElementById("array3").innerHTML = array[3];
        document.getElementById("array4").innerHTML = array[4];
        document.getElementById("array5").innerHTML = array[5];
        document.getElementById("array6").innerHTML = array[6];
        document.getElementById("array7").innerHTML = array[7];
        document.getElementById("array8").innerHTML = array[8];
        document.getElementById("array9").innerHTML = array[9];
    };
};