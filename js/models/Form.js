class Form{
    constructor(){}

    setRequestFields(requestInfo){
        this.requestInfo = requestInfo;
    }
    
    getRequestFields(){
        return this.requestInfo;
    }

    setUserFields(userInfo){
        this.userInfo = userInfo;
    }

    getUserFields(){
        return this.userInfo;
    }
}