function copyInfo(id) {
    /* Get the text field */
    let copyText = document.getElementById(id);

    /* Select the text field */
    copyText.type = "text";
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
    copyText.type = "password";

    /* Alert the copied text */
    alert("Copied info to clipboard.");
}

function clearInfo() {
    let clearText = document.getElementById('clearText');
    clearText.type = "text";
    clearText.select();
    clearText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    clearText.type = "hidden";
    alert("Cleared the clipboard.");
}

function showDetails(key) {
    let user = firebase.auth().currentUser;
    let siteKey = key;
    firebase.database().ref('users').child(user.uid).orderByKey().equalTo(key).on("child_added", function (data) {
        let dateAdded = data.val().dateAdded;
        let date = new Date(dateAdded);
        let month = date.toLocaleString('default', { month: 'long' });
        let name = data.val().name;
        dcName = decrypt(name);
        let url = data.val().url;
        let userId = data.val().userId;
        let password = data.val().password;

        document.getElementById('dateAdded').innerHTML = date.getDate() +
            " " + month +
            " " + date.getFullYear();
        document.getElementById('name').style.backgroundColor = 'white';
        document.getElementById('name').value = dcName;
        document.getElementById('url').style.backgroundColor = 'white';
        document.getElementById('url').value = url;
        document.getElementById('myId').style.backgroundColor = 'white';
        document.getElementById('myId').type == "password";
        document.getElementById('myId').value = userId;
        document.getElementById('myPW').style.backgroundColor = 'white';
        document.getElementById('myPW').type == "password"
        document.getElementById('myPW').value = password;

        let editLink = document.getElementById('editButton');
        editLink.onclick = function () { update(siteKey); };
    });
}

function update(key) {
    let user = firebase.auth().currentUser;
    let siteRef = firebase.database().ref('users/' + user.uid + '/' + key);
    let hideId = false;
    let hidePW = false;
    if (document.getElementById('myId').type == "password") {
        hideId = true;
        document.getElementById('myId').type = "text";
    }
    if (document.getElementById('myPW').type == "password") {
        hidePW = true;
        document.getElementById('myPW').type = "text";
    }
    siteRef.update({
        "name": document.getElementById('name').value,
        "url": document.getElementById('url').value,
        "userId": document.getElementById('myId').value,
        "password": document.getElementById('myPW').value
    })
    if (hideId == true) {
        document.getElementById('myId').type = "password";
    }
    if (hidePW == true) {
        document.getElementById('myPW').type = "password";
    }
    document.getElementById('name').setAttribute('readonly', true);
    document.getElementById('url').setAttribute('readonly', true);
    document.getElementById('myId').setAttribute('readonly', true);
    document.getElementById('myPW').setAttribute('readonly', true);
    alert("Edits have been saved.");
}

function deleteCheck() {
    if (confirm("data for this site will be deleted forever")) {
        let user = firebase.auth().currentUser;
        let siteRef = firebase.database().ref('users/' + user.uid);
        siteRef.remove();
        document.getElementById('name').value = '';
        document.getElementById('url').value = '';
        document.getElementById('myId').value = '';
        document.getElementById('myPW').value = '';
        setTimeout(googleSignout(), 3000);
    }
}