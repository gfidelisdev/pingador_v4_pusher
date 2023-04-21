const knex = require("../database/database")
class Model {
    id = null
    table = null
    fields = []
    fillable = []

    constructor() {}
    save() {
        let register = {}
        this.fillable.forEach((field) => {
            if (this[field]) register[field] = this[field]
        })
        return knex(this.table).insert(register)
    }
    get(id) {
        return knex(this.table).first().where({ id })
    }
    update() {}
    upsert() {
        if (this.id) {
            this.update()
        } else {
            this.save()
        }
    }
    delete() {}
    purge() {}
    findById(id) {}

    setValues(values) {
        console.log(
            "🚀 ~ file: Model.js:39 ~ Model ~ setValues ~ values:",
            values
        )
        this.fillable.forEach((el) => {
            this[el] = values[el]
        })
    }

    find(params) {
        let qParams = {}

        this.fields.forEach((field) => {
            if (params[field]) qParams[field] = params[field]
        })
        return knex
            .select()
            .from(this.table)
            .where(qParams)
            .where("deleted_at", null)
    }
    list() {
        return knex.select().from(this.table).where("deleted_at", null)
    }
}

module.exports = Model
