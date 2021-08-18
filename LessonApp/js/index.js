// Register service worker
window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/LessonApp/js/sw.js");
    }
});

let db = null;
let dateStr = new Date().toISOString().slice(8, 10);

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
    { day: '01', en: 'a', ct: '一種', ex: 'I have a yellow pencil.', cx: '我有一支黃色的鉛筆。' },
    { day: '02', en: 'all', ct: '全部', ex: 'We all ride the bus.', cx: '我們都坐公交車。' },
    { day: '03', en: 'give', ct: '給', ex: 'Give the cat some meat.', cx: '給猫喂點肉。' },
    { day: '04', en: 'seem', ct: '似乎', ex: 'She seems to be doing something.', cx: '她似乎在做什麼。' },
    { day: '05', en: 'put', ct: '放', ex: 'Put the dishes in the sink.', cx: '將餐具放入水槽中。' },
    { day: '06', en: 'on', ct: '在...上', ex: "The ball is on the table.", cx: '球在桌子上。' },
    { day: '07', en: 'keep', ct: '留', ex: 'Keep the hat here.', cx: '把帽子留在這裡。' },
    { day: '08', en: 'off', ct: '離開', ex: "The ball is off the table.", cx: '球離開了桌子。' },
    { day: '09', en: 'have', ct: '有', ex: 'Do you have a pencil?', cx: '你有鉛筆嗎？' },
    { day: '10', en: 'other', ct: '其他', ex: 'They text each other often.', cx: '他們經常互相發短信。' },
    { day: '11', en: 'to', ct: '到', ex: "The woman is walking to the door.", cx: '女人正走到門口。' },
    { day: '12', en: 'every', ct: '每一個', ex: 'She eats breakfast every day.', cx: '她每天都吃早餐。' },
    { day: '13', en: 'under', ct: '在...下面', ex: "The road is under the bridge.", cx: '路在橋下面。' },
    { day: '14', en: 'across', ct: '穿過', ex: 'He lives across the road.', cx: '他住在馬路對過。' },
    { day: '15', en: 'for', ct: '向', ex: "He asked her for help.", cx: '他向她求助。' },
    { day: '16', en: 'than', ct: '比', ex: 'He runs faster than me.', cx: '他跑得比我快。' },
    { day: '17', en: 'no', ct: '不', ex: 'My father has no hair.', cx: '我父親沒有頭髮。' },
    { day: '18', en: 'let', ct: '放開', ex: 'Let the hat go.', cx: '放開帽子。' },
    { day: '19', en: 'will', ct: '將要', ex: 'School will start next Tuesday.', cx: '下星期二將要開學。' },
    { day: '20', en: 'be', ct: '是', ex: 'This is a horse.', cx: '這是一匹馬。' },
    { day: '21', en: 'the', ct: '這', ex: 'The moon is gray.', cx: '月亮是灰色的。' },
    { day: '22', en: 'among', ct: '中', ex: 'Bees are flying among the flowers.', cx: '蜜蜂在花丛中飞行。' },
    { day: '23', en: 'till', ct: '直到', ex: 'We have class until 6pm.', cx: '我們上課到下午6點。' },
    { day: '24', en: 'from', ct: '從', ex: 'Walk away from the window.', cx: '從窗旁走開。' },
    { day: '25', en: 'over', ct: '超過', ex: "The bridge is over the river.", cx: '橋在河上。' },
    { day: '26', en: 'before', ct: '之前', ex: "Two is before three.", cx: '二在三之前。' },
    { day: '27', en: 'with', ct: '和...在一起', ex: "The apples are with the oranges.", cx: '蘋果和橙子在一起。' },
    { day: '28', en: 'any', ct: '任何', ex: "I don't have any candy.", cx: '我沒有糖果。' },
    { day: '29', en: 'go', ct: '去', ex: 'Do you go to school by car?', cx: '你開車上學嗎？' },
    { day: '30', en: 'after', ct: '之後', ex: "Three is after two.", cx: '三是在二之後。' },
    { day: '31', en: 'as', ct: '一樣', ex: "I am as tall as you.", cx: '我和你一樣高。' }
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
document.getElementById("ctPlay").addEventListener("click", function () { speakZh(document.querySelector('#zhWord').innerText) });
document.getElementById("exPlay").addEventListener("click", function () { speakEn(document.querySelector('#example').innerText) });
document.getElementById("cxPlay").addEventListener("click", function () { speakZh(document.querySelector('#translation').innerText) });

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