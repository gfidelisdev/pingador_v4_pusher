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
        'ip_address'
    ]
    static fields = [
        'fqdn',
        'name',
        'ip_address',
        'nwp_role_id',
        'cluster_id',
        'created_by',
        'created_at',
        'updated_at',
        'deleted_at'


    ]
    static table = 'network_points'
    constructor(){
        super()
        this.table = 'network_points'
    }

}

module.exports = NetworkPoint