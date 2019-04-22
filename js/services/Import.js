class Import{

    constructor(){
        this._http = new HttpService();
        
    }
    
    getInfo(url){
        const info = this._http.get(url)
        return info;
    }
}