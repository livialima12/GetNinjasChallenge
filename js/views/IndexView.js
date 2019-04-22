class IndexView {

    constructor(model){
        this.loadRequest(model.getRequestFields());
        this.loadUser(model.getUserFields());
    }

    loadRequest(requestInfo){
        let div = document.querySelector("#service_inputs");
        let templateInfo = this.templateRequest(requestInfo);
        div.innerHTML = templateInfo;        
    }

    templateRequest(requestInfo){
        this.requestFields = [];
        requestInfo.forEach(info => {
            const field = [`
                <div class="inputs">
                <label class="label">${info.label}</label>
                ${function(){                    
                    if(info.type =="enumerable"){
                        return `
                            <select name = "${info.name}" ${function(){
                                if(info.required == true){
                                    return `required class="required form_input"`
                                }
                                else{
                                    return `class="form_input"`
                                }}()} >
                                <option disabled selected hidden value = "">${info.placeholder}</option>
                                ${function(){
                                    const selects = Object.getOwnPropertyNames(info.values);
                                    const retorno = [];
                                    const x = selects.forEach(select => {
                                        let option = [`<option value="${select}">${select}</option>`]
                                        retorno.push(option)
                                    })
                                    let teste = retorno.join("")
                                    return teste
                                }()}
                            </select>
                            ${function(){
                                if(info.required){
                                    return `<span class="required_message">Este campo é requerido</span>`
                                } else {
                                    return ``
                                }
                            }()}
                        `
                    }
                    else if(info.type == "big_text"){
                        return `<textarea placeholder="${info.placeholder}" ${function(){
                            if(info.required == true){
                                return `required id="required"`
                            }
                            else{
                                return ``
                            }}()} class="form_input"></textarea>`
                    }
                }()}
                </div>
            `]
            this.requestFields.push(field)
        });

        let x = this.requestFields.join("");
        return x
    }

    loadUser(userInfo){
        let div = document.querySelector("#user_inputs");
        let templateUser = this.templateUser(userInfo);
        div.innerHTML = templateUser;
    }

    templateUser(userInfo){
        this.userFields = [];
        userInfo.forEach(info => {
            const field = [`
                <div class = "inputs">
                <label class="label">${info.label}</label>
                ${function(){
                    return `<input name = "${info.name}" type="${info.type}" placeholder = "${info.placeholder}" required ="${info.required}" class="form_input">`
                }()}
                </div>
            `];
            this.userFields.push(field)
        })
        let x = this.userFields.join("")
        return x
    }
}