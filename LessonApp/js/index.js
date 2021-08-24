// Register service worker
window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/LessonApp/js/sw.js");
    }
});

let db = null;
let date = new Date().toISOString();
let monthStr = date.slice(5, 7);
let dayStr = date.slice(8, 10);
let dateStr = monthStr + dayStr;

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB ||
    window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction ||
    window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange ||
    window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

const basic_list = [
    { day: '0801', en: 'come', ct: '來', ex: 'Please come here for a minute.', cx: '請到這裡來一分鐘。' },
    { day: '0802', en: 'get', ct: '拿', ex: 'Get the hat from the man.', cx: '從男人那裡拿帽子。' },
    { day: '0803', en: 'give', ct: '給', ex: 'Give the cat some meat.', cx: '給猫喂點肉。' },
    { day: '0804', en: 'go', ct: '去', ex: 'Do you go to school by car?', cx: '你開車上學嗎？' },
    { day: '0805', en: 'keep', ct: '留', ex: 'Keep the hat here.', cx: '把帽子留在這裡。' },
    { day: '0806', en: 'let', ct: '放開', ex: 'Let the hat go.', cx: '放開帽子。' },
    { day: '0807', en: 'make', ct: '做成', ex: 'Make the paper into a hat.', cx: '把紙做成帽子。' },
    { day: '0808', en: 'put', ct: '放', ex: 'Put the dishes in the sink.', cx: '將餐具放入水槽中。' },
    { day: '0809', en: 'seem', ct: '似乎', ex: 'She seems to be doing something.', cx: '她似乎在做什麼。' },
    { day: '0810', en: 'take', ct: '拿', ex: 'Take a book and read it!', cx: '拿本书读！' },
    { day: '0811', en: 'be', ct: '是', ex: 'This is a horse.', cx: '這是一匹馬。' },
    { day: '0812', en: 'do', ct: '做', ex: 'What are you doing?', cx: '你做什麼？' },
    { day: '0813', en: 'have', ct: '有', ex: 'Do you have a pencil?', cx: '你有鉛筆嗎？' },
    { day: '0814', en: 'say', ct: '說', ex: 'I can say it again.', cx: '我可以再說一遍。' },
    { day: '0815', en: 'see', ct: '看到', ex: 'I see something.', cx: '我看到一些東西。 ' },
    { day: '0816', en: 'send', ct: '發送', ex: 'Why not send her some flowers?', cx: '何不送給她一些花？' },
    { day: '0817', en: 'may', ct: '可能', ex: 'It may rain.', cx: '可能會下雨。' },
    { day: '0818', en: 'will', ct: '將要', ex: 'School will start next Tuesday.', cx: '下星期二將要開學。' },
    { day: '0819', en: 'about', ct: '關於', ex: 'What is it about?', cx: '它是關於什麼的？' },
    { day: '0820', en: 'across', ct: '穿過', ex: 'He lives across the road.', cx: '他住在馬路對過。' },
    { day: '0821', en: 'after', ct: '之後', ex: "Three is after two.", cx: '三是在二之後。' },
    { day: '0822', en: 'against', ct: '靠著 ', ex: 'He stood with his back against the door.', cx: '他背靠著門站著。 ' },
    { day: '0823', en: 'among', ct: '中', ex: 'Bees are flying among the flowers.', cx: '蜜蜂在花丛中飞行。' },
    { day: '0824', en: 'at', ct: '在', ex: 'The ball is at the edge of the table.', cx: '球在桌子的邊緣。' },
    { day: '0825', en: 'before', ct: '之前', ex: "Two is before three.", cx: '二在三之前。' },
    { day: '0826', en: 'between', ct: '在...之間', ex: 'The dog is between the boxes.', cx: '狗在箱子之間。' },
    { day: '0827', en: 'by', ct: '在...邊', ex: 'The chair is by the window.', cx: '椅子在窗邊。' },
    { day: '0828', en: 'down', ct: '下', ex: 'Put your hand down.', cx: '放下你的手。' },
    { day: '0829', en: 'from', ct: '從', ex: 'Walk away from the window.', cx: '從窗旁走開。' },
    { day: '0830', en: 'in', ct: '在...裡', ex: "I'm in the house.", cx: '我在家裡。' },
    { day: '0831', en: 'on', ct: '在...上', ex: "The ball is on the table.", cx: '球在桌子上。' },
    { day: '0901', en: 'off', ct: '離開', ex: "The ball is off the table.", cx: '球離開了桌子。' },
    { day: '0902', en: 'over', ct: '超過', ex: "The bridge is over the river.", cx: '橋在河上。' },
    { day: '0903', en: 'through', ct: '超過', ex: "The train goes through the tunnel.", cx: '火車穿過隧道。' },
    { day: '0904', en: 'to', ct: '到', ex: "The woman is walking to the door.", cx: '女人正走到門口。' },
    { day: '0905', en: 'under', ct: '在...下面', ex: "The road is under the bridge.", cx: '路在橋下面。' },
    { day: '0906', en: 'up', ct: '超過', ex: "The kite is up.", cx: '風箏在向上。' },
    { day: '0907', en: 'with', ct: '和...在一起', ex: "The apples are with the oranges.", cx: '蘋果和橙子在一起。' },
    { day: '0908', en: 'as', ct: '一樣', ex: "I am as tall as you.", cx: '我和你一樣高。' },
    { day: '0909', en: 'for', ct: '向', ex: "He asked her for help.", cx: '他向她求助。' },
    { day: '0910', en: 'of', ct: '的', ex: 'I would like a cup of tea.', cx: '我想要杯茶。' },
    { day: '0911', en: 'till', ct: '直到', ex: 'We have class until 6pm.', cx: '我們上課到下午6點。' },
    { day: '0912', en: 'than', ct: '比', ex: 'He runs faster than me.', cx: '他跑得比我快。' },
    { day: '0913', en: 'a', ct: '一種', ex: 'I have a yellow pencil.', cx: '我有一支黃色的鉛筆。' },
    { day: '0914', en: 'the', ct: '這', ex: 'The moon is gray.', cx: '月亮是灰色的。' },
    { day: '0915', en: 'all', ct: '全部', ex: 'We all ride the bus.', cx: '我們都坐公交車。' },
    { day: '0916', en: 'any', ct: '任何', ex: "I don't have any candy.", cx: '我沒有糖果。' },
    { day: '0917', en: 'every', ct: '每一個', ex: 'She eats breakfast every day.', cx: '她每天都吃早餐。' },
    { day: '0918', en: 'no', ct: '不', ex: 'My father has no hair.', cx: '我父親沒有頭髮。' },
    { day: '0919', en: 'other', ct: '其他', ex: 'They text each other often.', cx: '他們經常互相發短信。' }
]

// get wotd
function open_database() {
    const request = indexedDB.open('VocabDB');

    request.onerror = function (event) {
        console.log("Problem opening DB.");
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result;
        let objectStore = db.createObjectStore('basic_list', {
            keyPath: 'day'
        });
        objectStore.transaction.oncomplete = function (event) {
            insert_records(basic_list);
            console.log("ObjectStore created.");
        }
    }

    request.onsuccess = function (event) {
        db = event.target.result;
        console.log("DB opened.");
        get_record(dateStr);
    }
}

function get_record(dateStr) {
    if (db) {
        const get_transaction = db.transaction("basic_list", "readonly");
        const objectStore = get_transaction.objectStore("basic_list");

        get_transaction.oncomplete = function () {
            console.log('All get transactions complete.');
        }

        get_transaction.onerror = function () {
            console.log("Problem getting records.");
        }

        let request = objectStore.get(dateStr);

        request.onsuccess = function (event) {
            document.querySelector('#enWord').innerText = request.result['en'];
            document.querySelector('#zhWord').innerText = request.result['ct'];
            document.querySelector('#example').innerText = request.result['ex'];
            document.querySelector('#translation').innerText = request.result['cx'];
        }
    }
}

function insert_records(records) {
    if (db) {
        const insert_transaction = db.transaction("basic_list", "readwrite");
        const objectStore = insert_transaction.objectStore("basic_list");

        return new Promise((resolve, reject) => {
            insert_transaction.oncomplete = function () {
                console.log('All insert transactions complete.');
                resolve(true);
            }

            insert_transaction.onerror = function () {
                console.log("Problem inserting records.");
                resolve(false);
            }

            records.forEach(word => {
                let request = objectStore.add(word);

                request.onsuccess = function () {
                    console.log("Added: ", word);
                }
            });
        });
    }
}

// user sets the tab via the menu
function setTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-pane");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    if (tabName != 'home_tab') {
        toggleMenu();
    } else {
        var x = document.getElementById("menu");
        x.className = x.className.replace(" w3-show", "");
    }
}

function toggleMenu() {
    var x = document.getElementById("menu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

document.getElementById("foot01").innerHTML = '&copy;' + new Date().getFullYear() + ' Teacher Matthew';

try {
    open_database();
} catch (e) {
    console.log(e);
}

document.getElementById("enPlay").addEventListener("click", function () { speakEn(document.querySelector('#enWord').innerText) });
document.getElementById("exPlay").addEventListener("click", function () { speakEn(document.querySelector('#example').innerText) });

function speakEn(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.rate = 0.6;
    u.lang = 'en-US';

    u.onend = function () {
        if (callback) {
            callback();
        }
    };

    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };

    speechSynthesis.speak(u);
};

function speakZh(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.rate = 0.8;
    u.lang = 'zh-TW';

    u.onend = function () {
        if (callback) {
            callback();
        }
    };

    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };

    speechSynthesis.speak(u);
};