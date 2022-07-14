class Model {
    id=null
    table = null
    fields = []
    fillable = []

    constructor(){
        this.id = null
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
}

module.exports = Model