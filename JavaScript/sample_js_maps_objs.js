//var json = '{"1":{"result":true, "count":42},"2":{"result":false,"count":0}}';
//obj = JSON.parse(json);
// constructing an object by code:
var obj = {}
obj["1"] = {}
obj["1"]["result"] = true;
obj["1"]["count"] = 42;
obj["2"] = {}
obj["2"]["result"] = false;
obj["2"]["count"] = 0;
// convert function defined; an object to a map. if an array, the keys are indexes
// convert object to map
const obj_to_map = ( ob => {
    const mp = new Map;
    Object.keys ( ob ). forEach (k => { mp.set(k, ob[k]) });
    return mp;
});

// convert map to object
const map_to_obj = ( mp => {
  const obj = {};
  mp.forEach((v,k) => {obj[k]=v});
  return obj;
})

// peeking into an object
console.log("index into:",obj["1"]["count"]);
// seeing the keys of an object
console.log("keys of:", Object.keys(obj) );
// convert an object to a map
mapobj = obj_to_map(obj);
// loop thru the keys of a map
for (var e of mapobj.keys()) {
	console.log("key=",e, " val=", mapobj.get(e));
}
// loop thru the entries in the object
Object.keys(obj).forEach(item => {
  console.log(item,obj[item]);
});
// display the keys of an object
console.log ( obj_to_map ( obj ).keys() );;

// loop thru the values of a map
for (var v of mapobj.values()) {
  console.log("v=",v)
}

// loop thru the entries of a map
for (var [k,v] of mapobj.entries()) {
  console.log("entry:",k,v)
}

// convert 

/*
https://appdividend.com/2018/12/27/javascript-object-keys-example-object-keys-tutorial/#Javascript_Object_Keys_Example

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/