if (level_id == "Level 8") {
    if (userInput == "Unit 1") {
        
    } else if (userInput == "Unit 2") {
        
    } else if (userInput == "Unit 3") {
        q1Array = ["Which is ", "Which are ", "Who is "];
        shuffleArray(q1Array);
        if (q1Array[0] == "Which is ") {
            q2Array = ["cheaper", "more difficult", "more expensive"];
            shuffleArray(q2Array);
            if (q2Array[0] == "more difficult") {
                q3Array = [({value:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({value:'English', pic:'<img src="Level 5/images/English.png" />'}), ({value:'math', pic:'<img src="Level 5/images/math.png" />'}), ({value:'science', pic:'<img src="Level 5/images/science.png" />'}), ({value:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({value:'music', pic:'<img src="Level 5/images/music.png" />'}), ({value:'art', pic:'<img src="Level 5/images/art.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" is "+q2Array[0]+" than "+q3Array[1].value+".";
            } else {
                q3Array = [({value:'hat', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'cap', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coat', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jacket', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dress', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirt', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirt', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirt', pic:'<img src="Level 1/images/T-shirt.png" />'})];
                sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+" than the "+q3Array[1].value+".";
            }
        } else if (q1Array[0] == "Which are ") {
            q2Array = ["heavier", "lighter", "more modern", "more dangerous"];
            shuffleArray(q2Array);
            if (q2Array[0] == "more modern") {
                q3Array = [({value:'police station', pic:'<img src="Level 4/images/police station.png" />'}), ({value:'fire station', pic:'<img src="Level 4/images/fire station.png" />'}), ({value:'MRT station', pic:'<img src="Level 4/images/MRT station.png" />'}), ({value:'bus stop', pic:'<img src="Level 4/images/bus stop.png" />'}), ({value:'bank', pic:'<img src="Level 4/images/bank.png" />'}), ({value:'bookstore', pic:'<img src="Level 4/images/bookstore.png" />'}), ({value:'convenience store', pic:'<img src="Level 4/images/convenience store.png" />'}), ({value:'department store', pic:'<img src="Level 4/images/department store.png" />'}), ({value:'museum', pic:'<img src="Level 4/images/museum.png" />'}), ({value:'post office', pic:'<img src="Level 4/images/post office.png" />'}), ({value:'restaurant', pic:'<img src="Level 4/images/restaurant.png" />'}), ({value:'movie theater', pic:'<img src="Level 4/images/movie theater.png" />'}), ({value:'bakery', pic:'<img src="Level 4/images/bakery.png" />'}), ({value:'hospital', pic:'<img src="Level 4/images/hospital.png" />'}), ({value:'library', pic:'<img src="Level 4/images/library.png" />'}), ({value:'clinic', pic:'<img src="Level 4/images/clinic.png" />'}), ({value:'gas station', pic:'<img src="Level 4/images/gas station.png" />'}), ({value:'toy store', pic:'<img src="Level 4/images/toy store.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+"s are "+q2Array[0]+" than "+q3Array[1].value+"s.";
            } else {
                q3Array = [({value:'dog', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cat', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rat', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbit', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cow', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horse', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'pig', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chicken', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'duck', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tiger', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lion', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkey', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bear', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebra', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goat', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephant', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippo', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snake', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrot', pic:'<img src="Level 2/images/parrot.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+"s are "+q2Array[0]+" than "+q3Array[1].value+"s.";
            }
        } else {
            q2Array = ["more handsome", "more beautiful"];
            shuffleArray(q2Array);
            if (q2Array[0] == "more handsome") {
                q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
            } else {
                q3Array = [({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+" than my "+q3Array[1].value+".";
            }
        }
        document.getElementById("g0r1d0").style= "width:300px";
        document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
        document.getElementById("g0r1d2").style = "width:50px; height:50px";
        document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
        document.getElementById("g0r1d3").style = "width:50px; height:50px";
        document.getElementById("g0r1d3").innerHTML = q3Array[1].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r2d2").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 1") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 1";
    } else if (userInput == "Unit 4") {
        q1Array = ["slim", "little", "tired", "good", "strong", "busy", "modern", "easy", "big", "bored", "bad", "lazy", "hard", "many", "weak", "fast"];
        shuffleArray(q1Array);
        q2Array = [""];
        q3Array = [""];
        document.getElementById("g0r0d0").innerHTML = '<p style="font-size:50px">'+q1Array[0]+'</p>';
        document.getElementById("g0r0d1").innerHTML = '<p style="font-size:50px">'+q1Array[1]+'</p>';
        document.getElementById("g0r0d2").innerHTML = '<p style="font-size:50px">'+q1Array[2]+'</p>';
        document.getElementById("g0r0d3").innerHTML = '<p style="font-size:50px">'+q1Array[3]+'</p>';
        
        document.getElementById("g0r1d0").innerHTML = '<p style="font-size:50px">'+q1Array[4]+'</p>';
        document.getElementById("g0r1d1").innerHTML = '<p style="font-size:50px">'+q1Array[5]+'</p>';
        document.getElementById("g0r1d2").innerHTML = '<p style="font-size:50px">'+q1Array[6]+'</p>';
        document.getElementById("g0r1d3").innerHTML = '<p style="font-size:50px">'+q1Array[7]+'</p>';
        
        document.getElementById("g0r2d0").innerHTML = '<p style="font-size:50px">'+q1Array[8]+'</p>';
        document.getElementById("g0r2d1").innerHTML = '<p style="font-size:50px">'+q1Array[9]+'</p>';
        document.getElementById("g0r2d2").innerHTML = '<p style="font-size:50px">'+q1Array[10]+'</p>';
        document.getElementById("g0r2d3").innerHTML = '<p style="font-size:50px">'+q1Array[11]+'</p>';
        
        document.getElementById("g0r3d0").innerHTML = '<p style="font-size:50px">'+q1Array[12]+'</p>';
        document.getElementById("g0r3d1").innerHTML = '<p style="font-size:50px">'+q1Array[13]+'</p>';
        document.getElementById("g0r3d2").innerHTML = '<p style="font-size:50px">'+q1Array[14]+'</p>';
        document.getElementById("g0r3d3").innerHTML = '<p style="font-size:50px">'+q1Array[15]+'</p>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 5") {
        q1Array = ["Which is ", "Which are ", "Who is "];
        shuffleArray(q1Array);
        if (q1Array[0] == "Which is ") {
            q2Array = ["the cleanest", "the dirtiest", "the easiest"];
            shuffleArray(q2Array);
            if (q2Array[0] == "the easiest") {
                q3Array = [({value:'Chinese', pic:'<img src="Level 5/images/Chinese.png" />'}), ({value:'English', pic:'<img src="Level 5/images/English.png" />'}), ({value:'math', pic:'<img src="Level 5/images/math.png" />'}), ({value:'science', pic:'<img src="Level 5/images/science.png" />'}), ({value:'social studies', pic:'<img src="Level 5/images/social studies.png" />'}), ({value:'music', pic:'<img src="Level 5/images/music.png" />'}), ({value:'art', pic:'<img src="Level 5/images/art.png" />'})];
                shuffleArray(q3Array);
                sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" is "+q2Array[0]+".";
            } else {
                q3Array = [({value:'hat', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'cap', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coat', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jacket', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dress', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirt', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirt', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirt', pic:'<img src="Level 1/images/T-shirt.png" />'})];
                sampleAnswer = "The "+q3Array[0].value+" is "+q2Array[0]+".";
            }
        } else if (q1Array[0] == "Which are ") {
            q2Array = ["the wettest", "the cleanest", "the dirtiest"];
            shuffleArray(q2Array);
            q3Array = [({value:'hats', pic:'<img src="Level 1/images/hat.png" />'}), ({value:'caps', pic:'<img src="Level 1/images/cap.png" />'}), ({value:'coats', pic:'<img src="Level 1/images/coat.png" />'}), ({value:'jackets', pic:'<img src="Level 1/images/jacket.png" />'}), ({value:'dresses', pic:'<img src="Level 1/images/dress.png" />'}), ({value:'skirts', pic:'<img src="Level 1/images/skirt.png" />'}), ({value:'shirts', pic:'<img src="Level 1/images/shirt.png" />'}), ({value:'T-shirts', pic:'<img src="Level 1/images/T-shirt.png" />'}), ({value:'dogs', pic:'<img src="Level 1/images/dog.png" />'}), ({value:'cats', pic:'<img src="Level 1/images/cat.png" />'}), ({value:'rats', pic:'<img src="Level 1/images/rat.png" />'}), ({value:'rabbits', pic:'<img src="Level 1/images/rabbit.png" />'}), ({value:'cows', pic:'<img src="Level 1/images/cow.png" />'}), ({value:'horses', pic:'<img src="Level 1/images/horse.png" />'}), ({value:'pigs', pic:'<img src="Level 1/images/pig.png" />'}), ({value:'chickens', pic:'<img src="Level 1/images/chicken.png" />'}), ({value:'ducks', pic:'<img src="Level 1/images/duck.png" />'}), ({value:'tigers', pic:'<img src="Level 2/images/tiger.png" />'}), ({value:'lions', pic:'<img src="Level 2/images/lion.png" />'}), ({value:'monkeys', pic:'<img src="Level 2/images/monkey.png" />'}), ({value:'bears', pic:'<img src="Level 2/images/bear.png" />'}), ({value:'zebras', pic:'<img src="Level 2/images/zebra.png" />'}), ({value:'goats', pic:'<img src="Level 2/images/goat.png" />'}), ({value:'elephants', pic:'<img src="Level 2/images/elephant.png" />'}), ({value:'hippos', pic:'<img src="Level 2/images/hippo.png" />'}), ({value:'snakes', pic:'<img src="Level 2/images/snake.png" />'}), ({value:'parrots', pic:'<img src="Level 2/images/parrot.png" />'})];
            shuffleArray(q3Array);
            sampleAnswer = q3Array[0].value.slice(0,1).toUpperCase()+q3Array[0].value.slice(1)+" are "+q2Array[0]+".";
            
        } else {
            q2Array = ["the youngest", "the oldest", "the cleanest", "the dirtiest"];
            shuffleArray(q2Array);
            q3Array = [({value:'grandfather', pic:'<img src="Level 1/images/grandfather.png" />'}), ({value:'father', pic:'<img src="Level 1/images/father.png" />'}), ({value:'uncle', pic:'<img src="Level 1/images/uncle.png" />'}), ({value:'brother', pic:'<img src="Level 1/images/brother.png" />'}), ({value:'grandmother', pic:'<img src="Level 1/images/grandmother.png" />'}), ({value:'mother', pic:'<img src="Level 1/images/mother.png" />'}), ({value:'aunt', pic:'<img src="Level 1/images/aunt.png" />'}), ({value:'sister', pic:'<img src="Level 1/images/sister.png" />'}), ({value:'cousin', pic:'<img src="Level 1/images/cousin.png" />'})];
            shuffleArray(q3Array);
            sampleAnswer = "My "+q3Array[0].value+" is "+q2Array[0]+".";
        }
        document.getElementById("g0r1d0").style= "width:300px";
        document.getElementById("g0r1d0").innerHTML = q1Array[0] + q2Array[0] + "?";
        document.getElementById("g0r1d2").style = "width:50px; height:50px";
        document.getElementById("g0r1d2").innerHTML = q3Array[0].pic;
        document.getElementById("g0r2d0").colspan = "3";
        document.getElementById("g0r2d0").innerHTML = '<input style="width:500px" type="text" id="grammarInput" autofocus />';
        document.getElementById("g0r3d0").colspan = "3";
        document.getElementById("g0r2d2").innerHTML = '<button class="w3-button w3-blue w3-round" onclick="showGrammar()">Example</button>';
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 6") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 2") {
        q1Array = ["Unit 4", "Unit 5", "Unit 6"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 2";
    } else if (userInput == "Unit 7") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 8") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Unit 9") {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    } else if (userInput == "Review 3") {
        q1Array = ["Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Review 3";
    } else if (userInput == "Final Review") {
        q1Array = ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7", "Unit 8", "Unit 9"];
        shuffleArray(q1Array);
        setGrammar(q1Array[0]);
        currentUnit = "Final Review";
    } else {
        q1Array = [""];
        q2Array = [""];
        q3Array = [""];
        gLinks = [''];
        grammarLesson = "";
    }
}    
else {
    sentenceArray[0] = "";
    sentenceArray[1] = "";
    sentenceArray[2] = "";
    sentenceArray[3] = "";
    gLinks = [''];
    grammarLesson = "";
}