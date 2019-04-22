class IndexController{

    constructor(){
        this.model = new Form();
        this.import = new Import();
        this.setObject();
        // this.validadeField()
    }

    setObject(){

        const formInfo = this.import.getInfo("https://api.myjson.com/bins/17n330");
        this.setForm(formInfo);

    }
    
    setForm(formInfo){
        formInfo.then((info) => {
            this.model.setRequestFields(info._embedded.request_fields);
            this.model.setUserFields(info._embedded.user_fields);
            this.view = new IndexView(this.model)
            this.searchProfessionals();
        });

    }

    searchProfessionals(){
        const button = document.querySelector("#search_professionals");

        button.addEventListener("click", (e) => {
            e.preventDefault();
            const select = document.querySelectorAll(".required");
            for (let i = 0; i < select.length; i++) {
                if((!select[i].value)){
                    return;
                }
            }
            service.classList.add("hidden")
            user.classList.remove("hidden")
        })
    }
}