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
    fields = [
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
    table = 'network_points'
    
    constructor(){
        super()
    }
}

module.exports = NetworkPoint