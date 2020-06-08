//for searching team

function teamSearch() {
    
    teamName = document.getElementById('teamSearch').value;

    //connection to database
    const MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017";

    MongoClient.connect(url, function (err, db) {
        if (err) {
            throw err;
        }
        var dbo = db.db("teamwork-ide");
        var query = {
            name: teamName //return any element with team.name = teamName;
        };
        dbo.collection("teams").find(query).toArray(function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            db.close();
        });
    });


    if (!team.isOpen) { //anoixth/kleisti apo diaxeiristh gia eggrafes
        throw err;
    } else {
        member.team += teamName;
        team.members += member.name;
    }
}

function helloWorld() {
    //for debugging
    console.log("hello world!");
}

/*
registerToTeam(){
    connect();
    teamSearch();
    addMemberToTeam();
    addTeamToMember();
} */