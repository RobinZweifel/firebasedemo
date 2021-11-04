document.addEventListener("DOMContentLoaded", event => {
    loadData();
    console.log(firebase.app());
});

const db = firebase.firestore();
const user1 = db.collection('Users').doc('user1');
const user2 = db.collection('Users').doc('user2');
var loggedIn = false;


/*
myData.onSnapshot(doc => {
    const data = doc.data();
    document.write(data.firstName + '<br>')
    document.write(data.lastName + '<br>')
});

*/


//Simple Get to get Data
/*
myData.get()
        .then(doc => {

            const data = doc.data();
            document.write(data.title + '<br>')

        })
*/

function loadData() {

    console.log("Methode is triggered");
    console.log(loggedIn);

    if (loggedIn != false) {
        console.log("load Data worked");

        var data = "";
        var firstName = "";
        var lastName = "";


        user1.onSnapshot(doc => {
            data = doc.data();
            firstName = data.firstName;
            document.getElementById('td1').innerHTML = firstName;
            lastName = data.lastName;
            document.getElementById('td2').innerHTML = lastName;

        })

        user2.onSnapshot(doc => {
            data = doc.data();
            firstName = data.firstName;
            document.getElementById('td3').innerHTML = firstName;
            lastName = data.lastName;
            document.getElementById('td4').innerHTML = lastName;
        })
    }
}

function googleLogin() {

    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)

        .then(result => {
            //console.log(result);
            if (result != null) {
                const user = result.user;
                document.getElementById('username').innerHTML = "Hello " + user.displayName;
                console.log(user);
                loggedIn = true;
            }
        })
        .catch(console.log)
        
}

