class Model {
    id=null
    table = null
    fields = []
    fillable = []
    

    constructor(){
    }
    save(){
        let register = {}
        this.fillable.forEach(field=>{
            if (this[field]) register[field] = this[field]
        })
        console.log(register)
    }
    get(){
    }
    update(){
    }
    upsert(){
        if (this.id){
            this.update()
        }
        else {
            this.save()
        }
    }
    delete(){
    }
    purge(){
    }
    static findById(id){
    }
    static find(params){
    }
    static list(){
    }
}

module.exports = Model