const Model = require ("./Model")

class Cluster extends Model {
    ip
    name
    place
    created_at
    created_by
    updated_at
    deleted_at
    cluster_father
    fillable = [
        'name',
        'place',
        'cluster_father'
    ]
    static table = 'clusters'
    constructor(){
        super()
        this.table = 'clusters'
    }


}

module.exports = Cluster