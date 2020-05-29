// use "#"" for private
// use "static" for public
//Added exports for classes

class Team {
  constructor(name) {
    this.teamName = name;
  }
  static addMember(member) {
    team.push(member);
    return team; 
  }
  static removeMember(member) {
    team.remove(member);
    return team; 
  }
}
module.exports = Team;


class TeamList {

  static teamMembers(Team) {
    team.forEach(Member => { //den einai se array omws
      return Member;
    });
  }

  static makeAdmin(Member) {
    member.isAdmin = true;
  }
}


//team.TeamList.push(teamObject); because of domain model

class Member {
  constructor(id, name, username, password) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.isAdmin = false;
  }
  static status;

  isAdminOnline() {

    if (this.isAdmin) {
      return status;

    } else {
      //error code
    }
  }

  isOnline() {
    return status;
  }
}

class BrowserWindow {
  static width;
  static height;
  //maybe some electron variables
  maximize() {
    this.width = maxWidth;
    this.height = maxHeight;
  }
  minimize() {
    this.width = 0;
    this.height = 0;
  }
}

class Announcement {
  constructor(text, announcer, dateAnnounced) {
    this.text = text;
    this.announcer = announcer;
    this.dateAnnounced = dateAnnounced;
  }
  //should add methods here
}

class projectStatus {
  constructor(todo, ongoing, done) {
    this.todo = todo;
    this.ongoing = ongoing;
    this.done = done;
  }
  addOnTable(table, value) {
    if (table.find(value) === undefined) {
      var table = this.table;
      this.table.append(value);
      return this.table;
    } else return Error("Could not Add on Table, value already exists");
  }
  removeFromTable(table, value) {
    if (table.find(value) === undefined)
      return Error("Cound not Remove from table, value does not exist")
    else {
      var table = this.table;
      this.table.remove(value);
      return this.table;
    }
  }
  moveBetweenTables(tableFrom, tableTo, value) {
    if (tableFrom.find(value) === undefined)
      return Error("Cound not move between tables. Value does not exist");
    else {
      tableFrom.remove(value);
      tableTo.append(value);
      return tableTo;
    }
  }
}

class File {
  //do not forget to add path to attributes
  constructor(extension, path) {
    this.extension = extension;
    this.path = path;
  }
  rename(name) {
    try {
      //TODO do nodejs stuff to actually rename the file
      name = new File(this.extension, this.path)
      //this = null;
      return true;
    } catch (e) {
      return Error("Could not rename the file")
    }
  }

  uploadFile() {
    if (fileTooLarge) {
      //error

    } else {
      //upload to videocall
    }

  }
}

class Folder extends File {
  //constructor takes 0 arguments. lastEdited is today. No files,obviously
  constructor(filelist) {
    this.lastEdited = new Date();
    this.fileList = new Array();
    if (filelist === undefined) {} else this.fileList = fileList

  }
  //do not forget to remove createFolder from domain-model. It's useless
  renameFolder(name) {
    name = new Folder(this.fileList);
    //this = null;
    //TODO do nodejs stuff to actually rename the folder.
  }
  deleteFolder() { //deleteFolder shouldn't take arguments
    //TODO do nodejs stuff to actually delete the folder
    //this = null;
  }
}

class gitRepository extends Folder {
  constructor(name, path, description, owner, dateCreated, commits) {
    this.name = name;
    this.path = path;
    this.description = description;
    this.owner = owner;
    this.dateCreated = dateCreated;
    this.commits = commits;
  }
  push(file) {
    try {
      //TODO do stuff to upload the file to server. Will do later
      return true;
    } catch (e) {
      return false;
    }
  }
  pull(path) {
    try {
      //TODO do stuff to pull files from server.
      return true;
    } catch (e) {
      return false;
    }
  }
}




class CallWindow { //extends BrowserWindow
  constructor(callId, duration, startedAt, callStartedBy) {
    this.callId = callId;
    this.duration = duration;
    this.startedAt = startedAt;
    this.callStartedBy = callStartedBy;
  }

  muteSelf(member) {
    member.voiceVolume = 0; //logika kapws etsi tha ginetai
  }

  unmuteSelf(member) {
    //fetch previous voiceVolume
    //member.voiceVolume = previous voiceVolume
  }
}

class VideoCallInfo { //isws na mhn prepei na einai klasi,
  //den to exoume sto domain, einai sto robustness UC4
}

class Message {
  constuctor(text, date, sender) {
    this.text = text;
    this.sender = sender
    this.dateSent = date
  }
  //TODO add functions
}

class Logs {
  constructor(info, timestamp, comments) {
    this.info = info //this should be of type "message", "timestamp" is useless, do not forget
    this.comments = comments;
  }
  clear() {
    //this = null;
  }
}