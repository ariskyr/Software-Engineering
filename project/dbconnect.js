const {MongoClient} = require('mongodb');
const remote = require('electron').remote
const {equal} = require('assert');
const BrowserWindow = require('electron').remote.BrowserWindow;
const Menu = remote.Menu;
var db;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'teamwork-ide';

// Create a new MongoClient
const client = new MongoClient(url, {
    useUnifiedTopology: true
});

//handles connection to MongoDB relative to login window. Has pseudo-try/catch
function mongoConnect(){    
$('auth').innerHTML = 'Connecting to server...<br>please wait'
client.connect(function (err, client) {
    if (err) {
        $('auth').innerHTML = 'Can\'t connect to server. <br> Please contact us or <br> <a href="javascript:mongoConnect()"> try again</a>'
    } else {
        db = client.db(dbName);
        equal(null, err);
        $('auth').innerHTML = "";
        $('loginButton').disabled = false;
        $('registerButton').disabled = false;
        users = db.collection('users')
    }
});
}
mongoConnect();

//QoL, press Enter to login, press escape to close window
$('email').addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        event.preventDefault();
        $('loginButton').click();
    }
})
$('password').addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        $('loginButton').click();
    }
})
document.addEventListener("keyup", event => {
    if (event.key === "Escape") {
        remote.getCurrentWindow().close();
    }
});

// Search the database, if theres 1 and only 1 user with these creds change html on the right
function findUser() {
    //gets Info from first field (called 'email' for simplicity, its username/email, really)
    var email = $('email').value;
    //gets info from second field ('password')
    var password = $('password').value;
    //looks for entries that match email/password
    users.find({
        $or: [{
                'username': email
            },
            {
                'email': email
            }
        ],
        'password': password
    }).toArray().then(function (result) {
        //if there's exactly one entry to match given creds calls "createWindow" method
        if (result.length == 1) createWindow(result[0].isAdmin, result[0])
        //else, decides that creds are invalid
        else {
            $('auth').innerHTML = 'Invalid Credentials'
        }
    })
}

function displayRegisterBox(){
    document.getElementById("right").style.display = "none";
    document.getElementById("register-box").style.display = "block"; 
}

function registerForm(){
    if (document.getElementById("regPassword1").value == document.getElementById("regPassword2").value){
        alert ("Match!"); //test 

        /*Den exoun dokimastei akoma auta */
       
        var user = new Object();
        user.name = $('regName').value;
        user.surname = $('regSurname').value;
        user.username = $("regUsername").value;
        user.email = $("regEmail").value;
        user.password = $("regPassword1").value;
        user.isAdmin = false; 
        //insert user
        users.insertOne(user); 
        //it works!
        alert('Registered') 
   
    }else {
        document.getElementById("regFail").style.display="block";
     }
}


function createWindow(type, user) {
    //boolean to "account type" translator
    if (type === true) type = "admin";
    else type = "user"
    //changes "auth" div, in case loading takes a bit longer than expected.
    //TODO configure electron to wait for complete rendering before window is opened
    $('auth').innerHTML = 'Welcome, ' + user.username + ". <br> Please wait... <br>Rendering " + type + " window"
    let window = new BrowserWindow({
        width: 600,
        height: 450,
        titleBarStyle: 'customButtonsOnHover',
        webPreferences: {
            nodeIntegration: true

        },
        title: user.username + "@TeamworkIDE (" + type + ")",
        icon: "./project/favicon.ico"
    })
    //Maximizes basic interface
    window.maximize();
    //loads index.html based on user type
    window.loadFile('./project/' + type + '/index.html')
    //throws login window to garbage
    client.close();
    remote.getCurrentWindow().close();


}