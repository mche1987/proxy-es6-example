let proxyRules = {
    get: function(obj, key){
        console.log("is this the key you're looking for?");
        return obj[key];
    },
    set: function(obj, key, val){ // should return a boolean
        if(typeof val != "number"){
            return false;
        } 
        obj[key] = val;
        return true;
    }
}

// let obj = new Proxy({}, proxyRules);
// obj.num = 10;
// obj.strAttempt = "100"
// console.log(obj.num);
// console.log(obj.strAttempt);
