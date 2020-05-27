class team {
    constructor(name) {
      this.teamName = name;
    }

    addMember(member) {
        //adding member code
        
        return ;
      }  

    removeMember(member){
        //removing member code
        
        return ;
    }

}

class browserWindow{
    static width;
    static height;
    //maybe some electron variables

    maximize(){
      this.width = maxWidth;
      this.height = maxHeight;
    }

    minimize(){
      this.width = 0;
      this.height = 0;
    }
}

class loginWindow extends browserWindow{
  
  static db;
  static client;
  static users;
  static type;

  userLoggedIn(){
    //method to check if user is logged in
  }

  mongoConnect(){
    //method to connect to mongo
  }

  findUser(){

  }

  createWindow(type, user){

  }

  registerForm(){
    
  }
}

