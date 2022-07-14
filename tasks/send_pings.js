let cache = {}
const CACHE_LIMIT = 15
function initializeCache(){
    
}
function ipException(err) {
    if (err == 'ip_format') return 'The IP format is incorrect!'
    if (err == 'ip_order' ) return 'The initial IP value must be smaller than the final IP value!'
    return 'Unexpected issue!'
}

function sendPings (server_list){
    let results = {}
    return results
}

function pushResults(ip, result){
    cache.shift()
    cache.push({ip,result})
}


function getCache(){
    return cache
} 

module.exports = {sendPings, ipException, getCache}