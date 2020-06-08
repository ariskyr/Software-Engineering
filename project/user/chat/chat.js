function sendText(){    
    document.getElementById("messageLog").innerHTML = document.getElementById("messageBox").value;
    document.getElementById("messageBox").value = "This is cleared"; 
    // pros to paron emfanizetai mono ena minima, ara den einai akrivws logs
}

function helloWorld(){
    //for debugging
    console.log("hello world!");
}

function makePresentation(){
    if (!member.isAdminOnline){
        return false;
    } else if(!adminAcceptsCall){ //den yparxei
        return false;
    } else{
        startCall(); //den yparxei
    }
}

function presentFiles(){
    if(document.getElementById("uploadFile").files.length == 0){
        console.log("no files selected");
        return false;
    } else{
        fileToUpload = new File(extention, path);
        fileToUpload.uploadFile();
    }
}