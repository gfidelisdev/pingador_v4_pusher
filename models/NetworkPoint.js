const Model = require ("./Model")

class NetworkPoint extends Model {
    ip
    fqdn
    name
    created_at
    updated_at
    deleted_at
    fillable = [
        'fqdn',
        'name',
        'ip'
    ]
    static table = 'network_points'
    constructor(){
        super()
        this.table = 'network_points'
    }

}

module.exports = NetworkPoint