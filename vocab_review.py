# -*- coding: utf-8 -*-
import sys, os, vlc, random
from os import system

def review(vocabList):
    vocabLen = len(vocabList)
    random.shuffle(vocabList)
    i = 0
    userInput = ''
    while(len(vocabList)>0):
        os.system('clear')
        p = vlc.MediaPlayer("Level " + level + "/audio/" + vocabList[0] + ".mp3")
        p.play()
        progress(i, vocabLen, prefix='Unit ' + unit)
        userInput = sys.stdin.readline().strip()
        if(userInput == vocabList[0]):
            vocabList.pop(0)
            i += 1

    os.system('clear')
    progress(i, vocabLen, prefix='Again?')
    sys.stdout.write('(Y/n) ')
    again = sys.stdin.readline().strip()
    if (again == "y" or again == ""):
        genList(level, unit)
    else:         
       quit()


def progress(count, total, prefix=''):
    bar_len = 60
    filled_len = int(round(bar_len * count / float(total)))

    percents = round(100.0 * count / float(total), 1)
    bar = '=' * filled_len + '-' * (bar_len - filled_len)

    sys.stdout.write('[%s] %s%s%s\r' % (prefix, bar, percents, '%'))
    sys.stdout.write('\n')
    sys.stdout.flush()

def genList(level, unit):
    vocabList = []
    if (level == '1'):
        if (unit == '1'):
            vocabList = ["boy", "girl", "man", "woman", "student", "teacher"]
        elif (unit == "2"):
            vocabList = ["grandfather", "grandmother", "father", "mother", "uncle", "aunt", "cousin", "brother", "sister"]
        elif (unit == "3"):
            vocabList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
        elif (unit == "4"):
            vocabList = ["chubby", "thin", "tall", "short", "sad", "happy", "old", "young", "cute"]
        elif (unit == "5"):
            vocabList = ["pencil", "eraser", "ruler", "pen", "desk", "chair", "school bag", "book", "pencil case"]
        elif (unit == "6"):
            vocabList = ["red", "yellow", "green", "blue", "pink", "black", "white", "brown", "orange", "purple"]
        elif (unit == "7"):
            vocabList = ["hat", "cap", "coat", "jacket", "dress", "skirt", "shirt", "T-shirt"]
        elif (unit == "8"):
            vocabList = ["dog", "cat", "rat", "rabbit", "cow", "horse", "sheep", "pig", "chicken", "duck"]
        elif (unit == "9"):
            vocabList = ["hungry", "thirsty", "angry", "lazy", "noisy", "quiet", "sleepy", "tired"]
    elif (level == '2'):
        if (unit == '1'):
            vocabList = ["door", "window", "table", "blackboard", "trash can", "fan", "television", "DVD player", "whiteboard", "telephone"]
        elif (unit == "2"):
            vocabList = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
        elif (unit == "3"):
            vocabList = ["yo-yo", "robot", "doll", "teddy bear", "ball", "blocks", "video game", "board game"]
        elif (unit == "4"):
            vocabList = ["banana", "lemon", "wax apple", "pear", "papaya", "watermelon", "guava", "grape", "sweet", "sour"]
        elif (unit == "5"):
            vocabList = ["tomato", "tomatoes", "mango", "mangoes", "strawberry", "strawberries", "cherry", "cherries", "peaches", "orange", "kiwi", "coconut"]
        elif (unit == "6"):
            vocabList = ["sing", "dance", "run", "swim", "read", "write", "type", "jump", "draw"]
        elif (unit == "7"):
            vocabList = ["in", "on", "under", "next to", "between", "behind", "in front of", "near"]
        elif (unit == "8"):
            vocabList = ["living room", "dining room", "bedroom", "bathroom", "kitchen", "backyard", "garden", "basement"]
        elif (unit == "9"):
            vocabList = ["tiger", "lion", "monkey", "bear", "zebra", "goat", "elephant", "hippo", "snake", "parrot"]
    elif (level == '3'):
        if (unit == '1'):
            vocabList = ["bird", "kitten", "puppy", "bunny", "turtle", "spider", "frog", "fish", "hamster", "beetle"]
        elif (unit == "2"):
            vocabList = ["hamburger", "pizza", "hot dog", "French fries", "onion rings", "chicken nuggets", "cola", "soda", "salad", "fried chicken"]
        elif (unit == "3"):
            vocabList = ["milk", "juice", "tea", "coffee", "ice cream", "cake", "bread", "cookies", "potato chips", "popcorn"]
        elif (unit == "4"):
            vocabList = ["kite", "puzzle", "jump rope", "model car", "bicycle", "CD player", "computer", "computer game", "stuffed animal", "action figure"]
        elif (unit == "5"):
            vocabList = ["eyes", "ears", "nose", "mouth", "teeth", "tooth", "hands", "feet", "foot", "arms", "legs", "head", "face"]
        elif (unit == "6"):
            vocabList = ["hair", "long", "short", "curly", "straight", "braided", "blond", "dark", "red hair", "brown hair", "black hair"]
        elif (unit == "7"):
            vocabList = ["baseball", "basketball", "soccer", "badminton", "ping-pong", "dodgeball", "volleyball", "tennis", "golf", "football"]
        elif (unit == "8"):
            vocabList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "fly a kite", "read a book", "listen to music", "watch TV", "ride a bike"]
        elif (unit == "9"):
            vocabList = ["weather", "sunny", "rainy", "cloudy", "windy", "snowy", "go shopping", "go swimming", "go hiking", "go fishing", "go skateboarding", "go jogging"]
    elif (level == '4'):
        if (unit == '1'):
            vocabList = ["get up", "go to school", "go home", "do homework", "take a bath", "go to bed", "thirty", "forty", "fifty", "have English class"]
        elif (unit == "2"):
            vocabList = ["on foot", "scooter", "motorcycle", "car", "bus", "bicycle", "MRT", "train", "taxi", "high-speed rail"]
        elif (unit == "3"):
            vocabList = ["boat", "ship", "airplane", "helicopter", "van", "walk", "park", "supermarket", "city", "countryside", "subway"]
        elif (unit == "4"):
            vocabList = ["morning", "afternoon", "evening", "exercise", "read the newspaper", "take a nap", "surf the Net", "keep my diary", "have a snack", "play the piano", "play the violin", "walk the dog"]
        elif (unit == "5"):
            vocabList = ["eat", "drink", "cook", "laugh", "draw", "sweep", "study", "drive", "write", "sleep", "play"]
        elif (unit == "6"):
            vocabList = ["wash my face", "brush my teeth", "comb my hair", "make my bed", "eat breakfast", "eat lunch", "eat dinner", "wash the dishes"]
        elif (unit == "7"):
            vocabList = ["police station", "fire station", "MRT station", "bus stop", "bank", "bookstore", "convenience store", "department store", "next to", "across from"]
        elif (unit == "8"):
            vocabList = ["museum", "post office", "restaurant", "movie theater", "bakery", "hospital", "library", "clinic", "gas station", "toy store"]
        elif (unit == "9"):
            vocabList = ["go straight", "turn right", "turn left", "traffic light", "corner", "first", "second", "third", "road", "street", "parking lot"]
    elif (level == '5'):
        if (unit == '1'):
            vocabList = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"]
        elif (unit == "2"):
            vocabList = ["doctor", "nurse", "driver", "police officer", "firefighter", "pilot", "office worker", "housekeeper", "mail carrier", "clerk"]
        elif (unit == "3"):
            vocabList = ["Chinese", "English", "math", "science", "social studies", "music", "art", "P. E."]
        elif (unit == "4"):
            vocabList = ["always", "usually", "often", "sometimes", "seldom", "never", "busy", "nervous", "help", "cry"]
        elif (unit == "5"):
            vocabList = ["spring", "summer", "fall", "winter", "warm", "hot", "cool", "cold"]
        elif (unit == "6"):
            vocabList = ["do the laundry", "sweep the floor", "mop the floor", "walk the dog", "go mountain climbing", "play chess", "water the plants", "take a walk"]
        elif (unit == "7"):
            vocabList = ["once", "twice", "three times", "week", "month", "year", "play the piano", "play cards", "go to the movies", "go abroad"]
        elif (unit == "8"):
            vocabList = ["shoes", "boots", "socks", "jeans", "pants", "shorts", "glasses", "gloves", "earrings"]
        elif (unit == "9"):
            vocabList = ["sixty", "seventy", "eighty", "ninety", "hundred", "thousand", "ring", "belt", "backpack", "cheap", "expensive"]
    elif (level == '6'):
        if (unit == '1'):
            vocabList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        elif (unit == "2"):
            vocabList = ["tie", "scarf", "necklace", "sneakers", "raincoat", "uniform", "slippers", "watch"]
        elif (unit == "3"):
            vocabList = ["glue", "scissors", "crayons", "markers", "pencil case", "tape", "pencil sharpener", "notebook", "paper", "correction tape"]
        elif (unit == "4"):
            vocabList = ["excited", "bored", "sick", "scared", "early", "late", "yesterday", "weekend"]
        elif (unit == "5"):
            vocabList = ["beach", "airport", "farm", "concert", "mountain", "amusement park", "playground", "port"]
        elif (unit == "6"):
            vocabList = ["classroom", "field", "teacher’s office", "nurse’s office", "restroom", "snack bar", "gym", "hallway", "hour", "minute", "second"]
        elif (unit == "7"):
            vocabList = ["fixed the bike", "cleaned the room", "visited", "painted the wall", "washed my hair", "jumped rope", "used the computer", "played a video game"]
        elif (unit == "8"):
            vocabList = ["studied", "fried an egg", "copied", "chatted", "planned", "stopped", "put", "cut", "read"]
        elif (unit == "9"):
            vocabList = ["a bag of chips", "a bottle of water", "a can of soda", "a piece of cake", "a slice of bread", "a cup of tea", "a glass of juice", "a box of crackers", "a bar of chocolate"]
    elif (level == '7'):
        if (unit == '1'):
            vocabList = ["went", "came", "took", "made", "saw", "got", "sat", "sang", "gave", "swam"]
        elif (unit == "2"):
            vocabList = ["rode", "drove", "wrote", "had", "sent", "bought", "taught", "brought", "caught", "found"]
        elif (unit == "3"):
            vocabList = ["bake a cake", "cook a meal", "make a sandwich", "draw a picture", "vacuum the floor", "make a call", "answer the phone", "try on a shirt"]
        elif (unit == "4"):
            vocabList = ["watch the news", "listen to the radio", "read a magazine", "build a model", "do puzzles", "ring", "take a message", "leave a message"]
        elif (unit == "5"):
            vocabList = ["wake up", "woke up", "take a shower", "took a shower", "get dressed", "got dressed", "shave my face", "shaved my face", "blow-dry my hair", "blow-dried my hair", "put on makeup", "set the table", "feed the dog", "fed the dog"]
        elif (unit == "6"):
            vocabList = ["study hard", "pass the exam", "fail the exam", "hurry up", "catch the bus", "miss the bus", "be careful", "win the game", "lose the game"]
        elif (unit == "7"):
            vocabList = ["go camping", "go skiing", "go cycling", "go snorkeling", "go in-line skating", "go surfing", "go rafting", "go ice-skating"]
        elif (unit == "8"):
            vocabList = ["watch the sunrise", "watch the sunset", "go on a picnic", "see the maple leaves", "go to the hot springs", "have a party", "have hot pot", "go on a vacation"]
        elif (unit == "9"):
            vocabList = ["artist", "musician", "soccer player", "vet", "flight attendant", "America", "Korea", "Japan", "China", "Canada", "England", "France"]
    elif (level == '8'):
        if (unit == '1'):
            vocabList = ["husband", "wife", "daughter", "son", "take medicine", "took medicine", "catch a cold", "caught a cold", "oversleep", "overslept", "give ... to", "gave ... to", "bring ... for", "brought ... for"]
        elif (unit == "2"):
            vocabList = ["fast", "faster", "slow", "slower", "fat", "fatter", "slim", "slimmer", "pretty", "prettier", "ugly", "uglier", "big", "bigger", "small", "smaller"]
        elif (unit == "3"):
            vocabList = ["heavy", "heavier", "light", "lighter", "cheap", "cheaper", "handsome", "more handsome", "beautiful", "more beautiful", "modern", "more modern", "difficult", "more difficult", "expensive", "more expensive", "dangerous", "more dangerous"]
        elif (unit == "4"):
            vocabList = ["good", "better", "bad", "worse", "much", "more", "little", "less", "strong", "stronger", "weak", "weaker"]
        elif (unit == "5"):
            vocabList = ["young", "younger", "youngest", "old", "older", "oldest", "wet", "wetter", "wettest", "clean", "cleaner", "cleanest", "dirty", "dirtier", "dirtiest", "easy", "easier", "easiest"]
        elif (unit == "6"):
            vocabList = ["popular", "more popular", "most popular", "colorful", "more colorful", "most colorful", "comfortable", "more comfortable", "most comfortable", "hardworking", "more hardworking", "most hardworking", "careful", "more careful", "most careful", "careless", "more careless", "most careless"]
        elif (unit == "7"):
            vocabList = ["good", "better", "best", "bad", "worse", "worst", "much", "more", "most", "little", "less", "least", "high", "higher", "highest", "low", "lower", "lowest"]
        elif (unit == "8"):
            vocabList = ["penguin", "giraffe", "koala", "fur", "crocodile", "kangaroo", "camel", "ice", "panda", "peacock", "dolphin", "wing"]
        elif (unit == "9"):
            vocabList = ["biscuit", "cupboard", "lemonade", "sweets", "ketchup", "butter", "peanut butter", "cheese"]
    elif (level == '9'):
        if (unit == '1'):
            vocabList = ["boiling", "over", "shiny", "gold", "horizon", "postcard", "plum", "juicy", "air", "fresh", "kind", "deep", "breath"]
        elif (unit == "2"):
            vocabList = ["fantastic", "feel", "look", "friendly", "sound", "night market", "try", "delicious", "taste", "salty", "spicy", "interesting", "sweet", "stinky", "famous", "terrible"]
        elif (unit == "3"):
            vocabList = ["inside", "horror", "furry", "move", "fool", "eyeshade", "strange", "disgusting", "joke", "sour", "bitter", "answer", "durian"]
        elif (unit == "4"):
            vocabList = ["idea", "comedy", "relaxed", "horror movie", "hate", "bloody", "scary", "nightmare", "romantic movie", "actor", "actress", "adventure movie", "search", "animated movie", "wonderland", "ticket"]
        elif (unit == "5"):
            vocabList = ["starving", "whatever", "pork", "beef", "seafood", "allergic", "troublesome", "pasta", "order", "curry", "rice", "iced", "black tea", "sugar", "dessert"]
        elif (unit == "6"):
            vocabList = ["twins", "elementary school", "pajama", "kimchi", "character", "different", "fitting room", "trick", "clerk", "praise", "adorable", "giggle"]
        elif (unit == "7"):
            vocabList = ["talent", "contest", "musical instrument", "recorder", "tambourine", "triangle", "champion", "second place", "third place", "first place", "excellent"]
        elif (unit == "8"):
            vocabList = ["area", "ride", "shout", "scream", "if", "challenge", "choice", "brave", "pony", "food court", "cafeteria", "fast food", "still", "join"]
        elif (unit == "9"):
            vocabList = ["notice", "sale", "dozen", "congratulations", "draw", "lucky", "wonderful", "squeeze", "refrigerator", "find out", "already"]
    elif (level == '10'):
        if (unit == '1'):
            vocabList = ["dizzy", "headache", "sore throat", "fever", "cough", "sneeze", "runny nose", "flu", "serious", "stomachache", "diarrhea", "vomit", "Japanese", "sushi", "sashimi"]
        elif (unit == "2"):
            vocabList = ["newborn", "hold", "even", "care", "family", "lonely", "upset", "of course", "spend", "take care of", "tickle", "together"]
        elif (unit == "3"):
            vocabList = ["weight", "lose", "enough", "need", "tiring", "boring", "interesting", "interested", "exciting", "sport", "surprising", "surprised", "favorite"]
        elif (unit == "4"):
            vocabList = ["news", "hit", "get on", "wait for", "hurt", "get out of", "run after", "police", "look for", "get into", "get off", "look after"]
        elif (unit == "5"):
            vocabList = ["look up", "word", "dictionary", "take off", "put on", "turn on", "flashlight", "take out", "turn off", "put down", "pick up", "put away", "clean up"]
        elif (unit == "6"):
            vocabList = ["have", "dusty", "let", "housework", "make", "sweater", "messy", "iron", "knock", "turn into", "prince"]
        elif (unit == "7"):
            vocabList = ["national", "quickly", "information staff", "rule", "traditional", "clearly", "loudly", "area", "softly", "run into", "repeat", "important", "well"]
        elif (unit == "8"):
            vocabList = ["as soon as", "only", "thoughtful", "asleep", "move", "pull", "sleeve", "save", "become", "die", "believe", "true"]
        elif (unit == "9"):
            vocabList = ["place", "dump", "happen", "owner", "faint", "ground", "mend", "clay", "unique"]
    elif (level == '11'):
        if (unit == '1'):
            vocabList = ["village", "grow", "neighbor", "life", "beginning", "crowded", "apartment", "start", "elevator", "stairway", "familiar", "peaceful", "decide"]
        elif (unit == "2"):
            vocabList = ["seesaw", "slide", "swing", "monkey bars", "practice", "tremble", "jungle gym", "borrow", "return", "hope", "finish", "bother"]
        elif (unit == "3"):
            vocabList = ["across", "skywalk", "crosswalk", "sidewalk", "pedestrian", "helmet", "unforgivable", "buckle", "seat belt", "shortcut", "illegal", "calm"]
        elif (unit == "4"):
            vocabList = ["exhibition", "discount", "yet", "author", "sign", "arrive", "signature", "also", "subscribe", "weekly"]
        elif (unit == "5"):
            vocabList = ["semester", "receive", "package", "instant noodles", "homesick", "homesickness", "relieve", "New York", "college", "whenever"]
        elif (unit == "6"):
            vocabList = ["born", "maid", "response", "examine", "cure", "deaf", "blind", "ill-tempered", "smash", "monster", "fork", "punish", "led", "lifelong"]
        elif (unit == "7"):
            vocabList = ["burnt", "frozen", "put out", "wounded", "fried", "boiled", "homeless", "secondhand", "used", "buyer", "satisfied", "spoiled"]
        elif (unit == "8"):
            vocabList = ["faucet", "leak", "spend", "introduce", "neighborhood", "drop", "repair", "stew", "hide"]
        elif (unit == "9"):
            vocabList = ["cupboard", "handmade", "antique", "budget", "jewelry box", "flea market", "stuff", "frame", "perfect"]
    elif (level == '12'):
        if (unit == '1'):
            vocabList = ["yourself", "myself", "classmates", "ourselves", "themselves", "trust", "yourselves", "himself", "herself", "carry", "almost"]
        elif (unit == "2"):
            vocabList = ["blood type", "article", "personality", "stupid", "confident", "outgoing", "leader", "group", "correct", "patient", "responsible", "creative", "flexible", "calm", "fair"]
        elif (unit == "3"):
            vocabList = ["consider", "faithful", "inconvenient", "besides", "guide", "train", "priest", "successfully", "helper", "rare", "disturb", "feed", "provide", "environment", "partner"]
        elif (unit == "4"):
            vocabList = ["desktop", "monitor", "mouse", "keyboard", "assemble", "professional", "switch", "power", "button", "plug", "socket", "genius"]
        elif (unit == "5"):
            vocabList = ["planetarium", "display", "free", "space", "shuttle", "astronaut", "search"]
        elif (unit == "6"):
            vocabList = ["accident", "protect", "danger", "earthquake", "occur", "building", "squat", "firm", "furniture", "cover", "crawl", "exit", "trap", "emergency", "arm", "burn", "flush", "soak"]
        elif (unit == "7"):
            vocabList = ["job", "toilsome", "high heels", "salary", "difference", "service", "passenger", "complain", "cram school", "lesson", "senior high school", "necessary"]
        elif (unit == "8"):
            vocabList = ["high jump", "light", "diet", "healthy", "habit", "grateful", "cockroach", "wiper", "wipe", "broom", "dustpan", "mood"]
        elif (unit == "9"):
            vocabList = ["inventor", "invent", "magical", "pill", "wing", "incredible", "cape", "invisible", "continue", "owner", "shop", "mint", "cranberry", "flavor", "imagine", "customer"]
        else:
            vocabList = []
    else:
        vocabList = []
    review(vocabList)

os.system('clear')
sys.stdout.write('Which level?')
level = sys.stdin.readline().strip()
sys.stdout.write('Which unit?')
unit = sys.stdin.readline().strip()
genList(level, unit)

