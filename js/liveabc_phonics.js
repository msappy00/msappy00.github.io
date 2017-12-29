function clearUnit(){
    currentUnit = "";
    pArray = [];
    return pArray;
}

function setPhonics(userInput){
    
    currentUnit = userInput;
    array_i = 0;
    array[array_i] = "blank";
    
    document.getElementById("levelId").innerHTML = level_id + " " + userInput;

    if (level_id == "Starter") {
        document.getElementById("pInstructions").innerHTML = "Type the first letter of the word.";
        if (userInput == "Unit 1") {
            pArray = [({pattern:'a', value:'apple'}), ({pattern:'a', value:'ant'}), ({pattern:'b', value:'ball'}), ({pattern:'b', value:'boy'}), ({pattern:'c', value:'cat'}), ({pattern:'c', value:'car'}), ({pattern:'d', value:'dog'}), ({pattern:'d', value:'desk'})];
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
        document.getElementById("pInstructions").innerHTML = "Type the first letter of the word.";
        if (userInput == "Unit 1") {
            pArray = [{pattern:'b', value:'balloon'}, {pattern:'b', value:'bear'}, {pattern:'b', value:'bike'}, {pattern:'b', value:'bubbles'}, {pattern:'p', value:'panda'}, {pattern:'p', value:'penguin'}, {pattern:'p', value:'pond'}];
        } else if (userInput == "Unit 2") {
            pArray = [{pattern:'d', value:'dark'}, {pattern:'d', value:'dice'}, {pattern:'d', value:'dig'}, {pattern:'d', value:'dinosaur'}, {pattern:'t', value:'tea'}, {pattern:'t', value:'toad'}, {pattern:'t', value:'tower'}, {pattern:'t', value:'turtle'}];
        } else if (userInput == "Unit 3") {
            pArray = [{pattern:'g', value:'garden'}, {pattern:'g', value:'goldfish'}, {pattern:'g', value:'golf'}, {pattern:'g', value:'gorilla'}, {pattern:'k', value:'king'}, {pattern:'k', value:'kiss'}, {pattern:'k', value:'kiwi'}, {pattern:'k', value:'koala'}];
        } else if (userInput == "Review 1") {
            pArray = [{pattern:'b', value:'balloon'}, {pattern:'b', value:'bear'}, {pattern:'b', value:'bike'}, {pattern:'b', value:'bubbles'}, {pattern:'p', value:'panda'}, {pattern:'p', value:'penguin'}, {pattern:'p', value:'pond'}, {pattern:'d', value:'dark'}, {pattern:'d', value:'dice'}, {pattern:'d', value:'dig'}, {pattern:'d', value:'dinosaur'}, {pattern:'t', value:'tea'}, {pattern:'t', value:'toad'}, {pattern:'t', value:'tower'}, {pattern:'t', value:'turtle'}, {pattern:'g', value:'garden'}, {pattern:'g', value:'goldfish'}, {pattern:'g', value:'golf'}, {pattern:'g', value:'gorilla'}, {pattern:'k', value:'king'}, {pattern:'k', value:'kiss'}, {pattern:'k', value:'kiwi'}, {pattern:'k', value:'koala'}];
        } else if (userInput == "Unit 4") {
            pArray = [{pattern:'f', value:'farm'}, {pattern:'f', value:'farmer'}, {pattern:'f', value:'fix'}, {pattern:'f', value:'four'}, {pattern:'v', value:'van'}, {pattern:'v', value:'vase'}, {pattern:'v', value:'vegetables'}, {pattern:'v', value:'vest'}];
        } else if (userInput == "Unit 5") {
            document.getElementById("pInstructions").innerHTML = "Type 's' or 'z'.";
            pArray = [{pattern:'s', value:'seahorse'}, {pattern:'s', value:'seal'}, {pattern:'s', value:'sunglasses'}, {pattern:'s', value:'swing'}, {pattern:'z', value:'crazy'}, {pattern:'z', value:'zebra'}, {pattern:'z', value:'zero'}, {pattern:'z', value:'zipper'}];
        } else if (userInput == "Unit 6") {
            document.getElementById("pInstructions").innerHTML = "Type 'c' or 'x'.";
            pArray = [{pattern:'c', value:'cut'}, {pattern:'c', value:'cake'}, {pattern:'c', value:'carpet'}, {pattern:'c', value:'crab'}, {pattern:'x', value:'ax'}, {pattern:'x', value:'fix'}, {pattern:'x', value:'sax'}, {pattern:'x', value:'taxi'}];
        } else if (userInput == "Review 2") {
            pArray = [{pattern:'c', value:'cut'}, {pattern:'c', value:'cake'}, {pattern:'c', value:'carpet'}, {pattern:'c', value:'crab'}, {pattern:'f', value:'farm'}, {pattern:'f', value:'farmer'}, {pattern:'f', value:'fix'}, {pattern:'f', value:'four'}, {pattern:'s', value:'seahorse'}, {pattern:'s', value:'seal'}, {pattern:'s', value:'sunglasses'}, {pattern:'s', value:'swing'}, {pattern:'v', value:'van'}, {pattern:'v', value:'vase'}, {pattern:'v', value:'vegetables'}, {pattern:'v', value:'vest'}, {pattern:'x', value:'ax'}, {pattern:'x', value:'fix'}, {pattern:'x', value:'sax'}, {pattern:'x', value:'taxi'}, {pattern:'z', value:'crazy'}, {pattern:'z', value:'zebra'}, {pattern:'z', value:'zero'}, {pattern:'z', value:'zipper'}];
        } else if (userInput == "Unit 7") {
            pArray = [{pattern:'m', value:'map'}, {pattern:'m', value:'monster'}, {pattern:'m', value:'mountain'}, {pattern:'m', value:'mouse'}, {pattern:'n', value:'new'}, {pattern:'n', value:'night'}, {pattern:'n', value:'nine'}, {pattern:'n', value:'numbers'}];
        } else if (userInput == "Unit 8") {
            pArray = [{pattern:'l', value:'ladder'}, {pattern:'l', value:'lamb'}, {pattern:'l', value:'laugh'}, {pattern:'l', value:'lizard'}, {pattern:'r', value:'rainbow'}, {pattern:'r', value:'red'}, {pattern:'r', value:'rocket'}, {pattern:'r', value:'rose'}];
        } else if (userInput == "Unit 9") {
            document.getElementById("pInstructions").innerHTML = "Type the letter matching the phonetic sound.";
            pArray = [{pattern:'b', value:'balloon'}, {pattern:'b', value:'bear'}, {pattern:'b', value:'bike'}, {pattern:'b', value:'bubbles'}, {pattern:'p', value:'panda'}, {pattern:'p', value:'penguin'}, {pattern:'p', value:'pond'}, {pattern:'d', value:'dark'}, {pattern:'d', value:'dice'}, {pattern:'d', value:'dig'}, {pattern:'d', value:'dinosaur'}, {pattern:'t', value:'tea'}, {pattern:'t', value:'toad'}, {pattern:'t', value:'tower'}, {pattern:'t', value:'turtle'}, {pattern:'g', value:'garden'}, {pattern:'g', value:'goldfish'}, {pattern:'g', value:'golf'}, {pattern:'g', value:'gorilla'}, {pattern:'k', value:'king'}, {pattern:'k', value:'kiss'}, {pattern:'k', value:'kiwi'}, {pattern:'k', value:'koala'}, {pattern:'c', value:'cut'}, {pattern:'c', value:'cake'}, {pattern:'c', value:'carpet'}, {pattern:'c', value:'crab'}, {pattern:'f', value:'farm'}, {pattern:'f', value:'farmer'}, {pattern:'f', value:'fix'}, {pattern:'f', value:'four'}, {pattern:'s', value:'seahorse'}, {pattern:'s', value:'seal'}, {pattern:'s', value:'sunglasses'}, {pattern:'s', value:'swing'}, {pattern:'v', value:'van'}, {pattern:'v', value:'vase'}, {pattern:'v', value:'vegetables'}, {pattern:'v', value:'vest'}, {pattern:'x', value:'ax'}, {pattern:'x', value:'fix'}, {pattern:'x', value:'sax'}, {pattern:'x', value:'taxi'}, {pattern:'z', value:'crazy'}, {pattern:'z', value:'zebra'}, {pattern:'z', value:'zero'}, {pattern:'z', value:'zipper'}, {pattern:'m', value:'map'}, {pattern:'m', value:'monster'}, {pattern:'m', value:'mountain'}, {pattern:'m', value:'mouse'}, {pattern:'n', value:'new'}, {pattern:'n', value:'night'}, {pattern:'n', value:'nine'}, {pattern:'n', value:'numbers'}, {pattern:'l', value:'ladder'}, {pattern:'l', value:'lamb'}, {pattern:'l', value:'laugh'}, {pattern:'l', value:'lizard'}, {pattern:'r', value:'rainbow'}, {pattern:'r', value:'red'}, {pattern:'r', value:'rocket'}, {pattern:'r', value:'rose'}];
        } else if (userInput == "Review 3") {
            pArray = [];
        } else if (userInput == "Final Review") {
            pArray = [];
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 3") {
        if (userInput == "Unit 1") {
            document.getElementById("pInstructions").innerHTML = "Type 'a' or 'a e'.";
            pArray = [{pattern:'a', value:'can'}, {pattern:'a', value:'pan'}, {pattern:'a', value:'mad'}, {pattern:'a', value:'dad'}, {pattern:'a e', value:'cane'}, {pattern:'a e', value:'lace'}, {pattern:'a e', value:'jade'}, {pattern:'a e', value:'gaze'}];
        } else if (userInput == "Unit 2") {
            document.getElementById("pInstructions").innerHTML = "Type 'e' or 'ee'.";
            pArray = [{pattern:'e', value:'web'}, {pattern:'e', value:'net'}, {pattern:'e', value:'vet'}, {pattern:'e', value:'pet'}, {pattern:'ee', value:'teenager'}, {pattern:'ee', value:'jeep'}, {pattern:'ee', value:'bee'}, {pattern:'ee', value:'reed'}];
        } else if (userInput == "Unit 3") {
            document.getElementById("pInstructions").innerHTML = "Type 'i' or 'i e'.";
            pArray = [{pattern:'i', value:'bib'}, {pattern:'i', value:'drink'}, {pattern:'i', value:'milk'}, {pattern:'i', value:'wink'}, {pattern:'i e', value:'mice'}, {pattern:'i e', value:'rice'}, {pattern:'i e', value:'dime'}, {pattern:'i e', value:'hide'}];
        } else if (userInput == "Review 1") {
            document.getElementById("pInstructions").innerHTML = "";
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 4") {
            document.getElementById("pInstructions").innerHTML = "Type 'o' or 'o e'.";
            pArray = [{pattern:'o', value:'fox'}, {pattern:'o', value:'frog'}, {pattern:'o', value:'clock'}, {pattern:'o', value:'blocks'}, {pattern:'o e', value:'home'}, {pattern:'o e', value:'hole'}, {pattern:'o e', value:'mole'}, {pattern:'o e', value:'cone'}];
        } else if (userInput == "Unit 5") {
            document.getElementById("pInstructions").innerHTML = "Type 'u' or 'u e'.";
            pArray = [{pattern:'u', value:'hug'}, {pattern:'u', value:'cub'}, {pattern:'u', value:'nut'}, {pattern:'u', value:'bus'}, {pattern:'u e', value:'duke'}, {pattern:'u e', value:'huge'}, {pattern:'u e', value:'cube'}, {pattern:'u e', value:'tune'}];
        } else if (userInput == "Unit 6") {
            document.getElementById("pInstructions").innerHTML = "Type 'u', 'ue' or 'ui'.";
            pArray = [{pattern:'u', value:'put'}, {pattern:'u', value:'bush'}, {pattern:'u', value:'push'}, {pattern:'u', value:'cushion'}, {pattern:'ue', value:'blue'}, {pattern:'ui', value:'suit'}, {pattern:'ui', value:'cruise'}, {pattern:'ui', value:'fruit'}];
        } else if (userInput == "Review 2") {
            document.getElementById("pInstructions").innerHTML = "";
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 7") {
            pArray = [{pattern:'oo', value:'book'}, {pattern:'oo', value:'cook'}, {pattern:'oo', value:'foot'}, {pattern:'oo', value:'hook'}, {pattern:'oo', value:'moon'}, {pattern:'oo', value:'pool'}, {pattern:'oo', value:'roof'}, {pattern:'oo', value:'boot'}];
        } else if (userInput == "Unit 8") {
            pArray = [{pattern:'y', value:'happy'}, {pattern:'y', value:'hungry'}, {pattern:'y', value:'yummy'}, {pattern:'y', value:'yucky'}, {pattern:'y', value:'cry'}, {pattern:'y', value:'dry'}, {pattern:'y', value:'fly'}, {pattern:'y', value:'sky'}];
        } else if (userInput == "Unit 9") {
            pArray = [{pattern:'a', value:'can'}, {pattern:'a', value:'pan'}, {pattern:'a', value:'mad'}, {pattern:'a', value:'dad'}, {pattern:'a e', value:'cane'}, {pattern:'a e', value:'lace'}, {pattern:'a e', value:'jade'}, {pattern:'a e', value:'gaze'}, {pattern:'e', value:'web'}, {pattern:'e', value:'net'}, {pattern:'e', value:'vet'}, {pattern:'e', value:'pet'}, {pattern:'ee', value:'teenager'}, {pattern:'ee', value:'jeep'}, {pattern:'ee', value:'bee'}, {pattern:'ee', value:'reed'}, {pattern:'i', value:'bib'}, {pattern:'i', value:'drink'}, {pattern:'i', value:'milk'}, {pattern:'i', value:'wink'}, {pattern:'i e', value:'mice'}, {pattern:'i e', value:'rice'}, {pattern:'i e', value:'dime'}, {pattern:'i e', value:'hide'}, {pattern:'o', value:'fox'}, {pattern:'o', value:'frog'}, {pattern:'o', value:'clock'}, {pattern:'o', value:'blocks'}, {pattern:'o e', value:'home'}, {pattern:'o e', value:'hole'}, {pattern:'o e', value:'mole'}, {pattern:'o e', value:'cone'}, {pattern:'u', value:'hug'}, {pattern:'u', value:'cub'}, {pattern:'u', value:'nut'}, {pattern:'u', value:'bus'}, {pattern:'u e', value:'duke'}, {pattern:'u e', value:'huge'}, {pattern:'u e', value:'cube'}, {pattern:'u e', value:'tune'}, {pattern:'u', value:'put'}, {pattern:'u', value:'bush'}, {pattern:'u', value:'push'}, {pattern:'u', value:'cushion'}, {pattern:'ue', value:'blue'}, {pattern:'ui', value:'suit'}, {pattern:'ui', value:'cruise'}, {pattern:'ui', value:'fruit'}, {pattern:'oo', value:'book'}, {pattern:'oo', value:'cook'}, {pattern:'oo', value:'foot'}, {pattern:'oo', value:'hook'}, {pattern:'oo', value:'moon'}, {pattern:'oo', value:'pool'}, {pattern:'oo', value:'roof'}, {pattern:'oo', value:'boot'}, {pattern:'y', value:'happy'}, {pattern:'y', value:'hungry'}, {pattern:'y', value:'yummy'}, {pattern:'y', value:'yucky'}, {pattern:'y', value:'cry'}, {pattern:'y', value:'dry'}, {pattern:'y', value:'fly'}, {pattern:'y', value:'sky'}];
        } else {
            document.getElementById("pInstructions").innerHTML = "";
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 4") {
        phonicsLesson = "";
        if (userInput == "Unit 1") {
            document.getElementById("pInstructions").innerHTML = "Listen and write 'ch' or 'sh'.";
            pArray = [({pattern:'ch', value:'bench'}), ({pattern:'ch', value:'cheese'}), ({pattern:'ch', value:'chess'}), ({pattern:'ch', value:'church'}), ({pattern:'sh', value:'shore'}), ({pattern:'sh', value:'shell'}), ({pattern:'sh', value:'shrimp'}), ({pattern:'sh', value:'shy'})];
        } else if (userInput == "Unit 2") {
            document.getElementById("pInstructions").innerHTML = "Listen and write 'soft' or 'hard'.";
            pArray = [({pattern:'soft', value:'wreath'}), ({pattern:'soft', value:'thumb'}), ({pattern:'soft', value:'breath'}), ({pattern:'soft', value:'Earth'}), ({pattern:'hard', value:'leather'}), ({pattern:'hard', value:'feather'}), ({pattern:'hard', value:'gather'}), ({pattern:'hard', value:'father'})];
        } else if (userInput == "Unit 3") {
            document.getElementById("pInstructions").innerHTML = "Listen and write 'gh' or 'ph'.";
            pArray = [({pattern:'gh', value:'cough'}), ({pattern:'gh', value:'rough'}), ({pattern:'gh', value:'laugh'}), ({pattern:'gh', value:'tough'}), ({pattern:'ph', value:'phone'}), ({pattern:'ph', value:'photo'}), ({pattern:'ph', value:'pharmacy'}), ({pattern:'ph', value:'typhoon'})];
        } else if (userInput == "Review 1") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 4") {
            document.getElementById("pInstructions").innerHTML = "Listen and write 'sw' or 'wh'.";
            pArray = [({pattern:'wh', value:'whale'}), ({pattern:'wh', value:'whip'}), ({pattern:'wh', value:'wheel'}), ({pattern:'wh', value:'wheat'}), ({pattern:'sw', value:'swan'}), ({pattern:'sw', value:'sweater'}), ({pattern:'sw', value:'sweat'}), ({pattern:'sw', value:'sweep'})];
        } else if (userInput == "Unit 5") {
            document.getElementById("pInstructions").innerHTML = "Listen and write 'st' or 'sp'.";
            pArray = [({pattern:'st', value:'stamp'}), ({pattern:'st', value:'stickers'}), ({pattern:'st', value:'stairs'}), ({pattern:'st', value:'stapler'}), ({pattern:'sp', value:'sparrow'}), ({pattern:'sp', value:'spade'}), ({pattern:'sp', value:'spot'}), ({pattern:'sp', value:'spoon'})];
        } else if (userInput == "Unit 6") {
            pArray = [({pattern:'tr', value:'treasure'}), ({pattern:'tr', value:'tree'}), ({pattern:'tr', value:'triangle'}), ({pattern:'tr', value:'tray'}), ({pattern:'dr', value:'drum'}), ({pattern:'dr', value:'dream'}), ({pattern:'dr', value:'drawer'}), ({pattern:'dr', value:'draw'})];
        } else if (userInput == "Review 2") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 7") {
            pArray = [({pattern:'sc', value:'scared'}), ({pattern:'sc', value:'scooter'}), ({pattern:'sc', value:'scar'}), ({pattern:'sc', value:'scamper'}), ({pattern:'scr', value:'screen'}), ({pattern:'scr', value:'scratch'}), ({pattern:'scr', value:'scream'}), ({pattern:'scr', value:'scroll'})];
        } else if (userInput == "Unit 8") {
            pArray = [({pattern:'ng', value:'morning'}), ({pattern:'ng', value:'ring'}), ({pattern:'ng', value:'hang'}), ({pattern:'ng', value:'painting'}), ({pattern:'nk', value:'junk'}), ({pattern:'nk', value:'trunk'}), ({pattern:'nk', value:'skunk'}), ({pattern:'nk', value:'sink'})];
        } else if (userInput == "Unit 9") {
            pArray = [({pattern:'ch', value:'bench'}), ({pattern:'ch', value:'cheese'}), ({pattern:'ch', value:'chess'}), ({pattern:'ch', value:'church'}), ({pattern:'sh', value:'shore'}), ({pattern:'sh', value:'shell'}), ({pattern:'sh', value:'shrimp'}), ({pattern:'sh', value:'shy'}), ({pattern:'soft', value:'wreath'}), ({pattern:'soft', value:'thumb'}), ({pattern:'soft', value:'breath'}), ({pattern:'soft', value:'Earth'}), ({pattern:'hard', value:'leather'}), ({pattern:'hard', value:'feather'}), ({pattern:'hard', value:'gather'}), ({pattern:'hard', value:'father'}), ({pattern:'gh', value:'cough'}), ({pattern:'gh', value:'rough'}), ({pattern:'gh', value:'laugh'}), ({pattern:'gh', value:'tough'}), ({pattern:'ph', value:'phone'}), ({pattern:'ph', value:'photo'}), ({pattern:'ph', value:'pharmacy'}), ({pattern:'ph', value:'typhoon'}), ({pattern:'wh', value:'whale'}), ({pattern:'wh', value:'whip'}), ({pattern:'wh', value:'wheel'}), ({pattern:'wh', value:'wheat'}), ({pattern:'sw', value:'swan'}), ({pattern:'sw', value:'sweater'}), ({pattern:'sw', value:'sweat'}), ({pattern:'sw', value:'sweep'}), ({pattern:'st', value:'stamp'}), ({pattern:'st', value:'stickers'}), ({pattern:'st', value:'stairs'}), ({pattern:'st', value:'stapler'}), ({pattern:'sp', value:'sparrow'}), ({pattern:'sp', value:'spade'}), ({pattern:'sp', value:'spot'}), ({pattern:'sp', value:'spoon'}), ({pattern:'tr', value:'treasure'}), ({pattern:'tr', value:'tree'}), ({pattern:'tr', value:'triangle'}), ({pattern:'tr', value:'tray'}), ({pattern:'dr', value:'drum'}), ({pattern:'dr', value:'dream'}), ({pattern:'dr', value:'drawer'}), ({pattern:'dr', value:'draw'}), ({pattern:'sc', value:'scared'}), ({pattern:'sc', value:'scooter'}), ({pattern:'sc', value:'scar'}), ({pattern:'sc', value:'scamper'}), ({pattern:'scr', value:'screen'}), ({pattern:'scr', value:'scratch'}), ({pattern:'scr', value:'scream'}), ({pattern:'scr', value:'scroll'}), ({pattern:'ng', value:'morning'}), ({pattern:'ng', value:'ring'}), ({pattern:'ng', value:'hang'}), ({pattern:'ng', value:'painting'}), ({pattern:'nk', value:'junk'}), ({pattern:'nk', value:'trunk'}), ({pattern:'nk', value:'skunk'}), ({pattern:'nk', value:'sink'})];
        } else if (userInput == "Review 3") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Final Review") {
            pArray = ["blank", "blank"];
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 5") {
        phonicsLesson = "";
        if (userInput == "Unit 1") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'ai', value:'snails'}), ({pattern:'ai', value:'rain'}), ({pattern:'ai', value:'rails'}), ({pattern:'ai', value:'jail'}), ({pattern:'ai', value:'pail'}), ({pattern:'ai', value:'train'}), ({pattern:'ay', value:'ray'}), ({pattern:'ay', value:'may'}), ({pattern:'ay', value:'play'}), ({pattern:'ay', value:'day'}), ({pattern:'ay', value:'tray'}), ({pattern:'ay', value:'away'}), ({pattern:'ay', value:'lay'}), ({pattern:'ay', value:'hay'})];
        } else if (userInput == "Unit 2") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'au', value:'sausage'}), ({pattern:'au', value:'sauce'}), ({pattern:'au', value:'autumn'}), ({pattern:'aw', value:'straw'}), ({pattern:'aw', value:'lawn'}), ({pattern:'aw', value:'seesaw'})];
        } else if (userInput == "Unit 3") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'long', value:''}), ({pattern:'long', value:''}), ({pattern:'long', value:''}), ({pattern:'long', value:''}), ({pattern:'long', value:''}), ({pattern:'short', value:''}), ({pattern:'short', value:''}), ({pattern:'short', value:''}), ({pattern:'short', value:''}), ({pattern:'short', value:''}), ({pattern:'short', value:''})];
        } else if (userInput == "Review 1") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 4") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 5") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 6") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Review 2") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 7") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 8") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 9") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Review 3") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Final Review") {
            pArray = ["blank", "blank"];
        } else {
            pArray = ["blank", "blank"];
        }
    }
    else if (level_id == "Level 6") {
        phonicsLesson = "";
        if (userInput == "Unit 1") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 2") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 3") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Review 1") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 4") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 5") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 6") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Review 2") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Unit 7") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 8") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Unit 9") {
            document.getElementById("pInstructions").innerHTML = "Listen and write .";
            pArray = [({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''}), ({pattern:'', value:''})];
        } else if (userInput == "Review 3") {
            pArray = ["blank", "blank"];
        } else if (userInput == "Final Review") {
            pArray = ["blank", "blank"];
        } else {
            pArray = ["blank", "blank"];
        }
    } else {
    document.getElementById("pInstructions").innerHTML = "There are no phonics words for this level.";
    pArray = ["blank", "blank"];
    }
    shuffleArray(pArray);
    document.getElementById("phonicsAudio").innerHTML = '<audio controls autoplay><source src="phonics/'+pArray[pArray_i].value+'.mp3" type="audio/mp3" /></audio>';
    document.getElementById("phonicsCheck").pattern = pArray[pArray_i].pattern;
}
