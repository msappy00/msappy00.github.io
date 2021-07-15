function search() {
    document.getElementById("myList").innerHTML = '';
    let name = document.getElementById('searchBox').value;
    let user = firebase.auth().currentUser;
    let enName = encrypt(name);

    firebase.database().ref('users').child(user.uid).orderByChild("name").equalTo(enName).on("child_added",
        function (snapshot) {
            let key = snapshot.key;
            let name = snapshot.child("name").val();
            let dcName = decrypt(name);
            let url = snapshot.child("url").val();
            let link = document.createElement('a');
            let node = document.createElement("LI");
            link.href = "#detail";
            link.onclick = function () { setTab('detail'); showDetails(key); };
            link.innerText = dcName;
            node.appendChild(link);
            text = " " + url;
            let textnode = document.createTextNode(text);            // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
        })  
	}

function listAll() {
    document.getElementById("myList").innerHTML = '';
    let user = firebase.auth().currentUser;
    firebase.database().ref('users').child(user.uid).orderByChild("name").on("child_added", function (snapshot) {
        let key = snapshot.key;
        let name = snapshot.child("name").val();
        let dcName = decrypt(name);
        let url = snapshot.child("url").val();
        let link = document.createElement('a');
        let node = document.createElement("LI");
        link.href = "#detail";
        link.onclick = function () { setTab('detail'); showDetails(key); };
        link.innerText = dcName;
        node.appendChild(link);
        text = " " + url;
        let textnode = document.createTextNode(text);            // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
    })
}

function clearSearch() {
    document.getElementById("myList").innerHTML = '';
    document.getElementById("searchBox").value = '';
}
