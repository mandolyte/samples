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
const x = {"G39720":1,"G14010":2,"G23160":13,"G06520":1,"G11610":8,"G24240":4,"G55470":4,"G25960":8,"G41020":6,"G15880":1,"G25320":37,"G19220":1,"G02250":2,"G35880":61,"G21500":1,"G19090":2,"G16800":3,"G22220":2,"G01660":3,"G37390":9,"G18610":1,"G08930":1,"G42530":1,"G55500":1,"G53190":1,"G25400":1,"G23980":4,"G30560":5,"G08460":8,"G17220":13,"G27820":1,"G41000":2,"G14730":19,"G20030":2,"G49900":6,"G51030":1,"G11030":1,"G50430":2,"G28390":1,"G54850":4,"G15150":1,"G05750":2,"G39620":1,"G37780":5,"G54840":2,"G06200":1,"G47710":8,"G29140":1,"G24430":13,"G30070":2,"G19300":1,"G25250":1,"G41720":1,"G42450":1,"G56130":2,"G12990":1,"G14870":1,"G51000":2,"G15100":16,"G04100":2,"G15200":2,"G11350":1,"G04350":2,"G21920":2,"G41030":3,"G33610":13,"G27240":1,"G08100":1,"G22280":2,"G05060":2,"G12100":3,"G10630":6,"G19850":1,"G36230":1,"G08290":1,"G37110":1,"G39430":1,"G41310":1,"G01460":1,"G02350":4,"G53820":1,"G53580":1,"G49980":3,"G13420":1,"G37410":1,"G14680":1,"G04720":1,"G13220":1,"G14150":1,"G38700":3,"G13190":4,"G51980":4,"G04830":2,"G16510":3,"G41830":2,"G31510":1,"G54230":1,"G31220":1,"G15370":4,"G40610":1,"G19930":1,"G37480":1,"G36500":1,"G36240":1,"G03960":1,"G13210":1,"G01500":1,"G27710":1,"G30040":2,"G43960":1,"G29120":1,"G01040":1,"G55830":1,"G25560":1,"G23420":1,"G10640":1,"G06920":1,"G31410":1,"G02270":1,"G12230":3,"G01560":1,"G06640":1,"G43370":1,"G24510":1,"G34540":1,"G17850":1,"G04440":5,"G06540":1,"G39560":14,"G25130":3,"G33920":2,"G05710":1,"G37620":1,"G35630":1,"G48930":1,"G36700":1,"G14920":2,"G20410":8,"G07200":2,"G09470":1,"G05450":2,"G43140":5,"G00180":4,"G00960":1,"G29800":2,"G42410":1,"G42460":1,"G35240":1,"G45860":1,"G00260":1,"G52810":1,"G42470":1,"G56150":2,"G26880":1,"G24120":1,"G12280":1,"G33660":1,"G36310":1,"G14020":1,"G25670":1,"G49940":1,"G35010":1,"G53620":1,"G53880":1,"G00530":1,"G36260":1,"G52930":3,"G09870":2,"G35125":1,"G49930":1,"G40120":3,"G45720":1,"G39300":1,"G51790":1,"G25700":5,"G08627":1,"G45870":1,"G51990":1,"G01760":1,"G17270":1,"G17880":1,"G33670":4,"G53370":1,"G12030":1,"G21010":1,"G35570":1,"G17310":2,"G28850":1,"G20140":2,"G49920":1,"G38110":1,"G07630":1,"G28860":1,"G19390":2,"G49960":1,"G13460":1,"G21530":1,"G21980":1,"G35680":1,"G01650":1,"G43270":1,"G31070":1,"G20150":1,"G13910":1,"G31730":1,"G13250":1,"G14380":2,"G52280":1,"G30840":1,"G04580":1,"G25110":1,"G29920":1,"G40410":1,"G22070":1,"G33260":4,"G40650":1,"G52790":1,"G07460":1,"G18490":1,"G39800":1,"G20920":1,"G02690":1,"G19330":1,"G42400":1,"G42180":1,"G04530":1,"G41050":1,"G13980":1,"G22370":1,"G41640":1,"G25490":1,"G53550":1,"G12360":1,"G47670":1,"G34040":1,"G02400":1,"G37530":1,"G55440":1,"G53630":1,"G37560":1,"G13430":1,"G41600":1,"G16560":1,"G49820":1,"G30670":1,"G38240":1,"G03420":1,"G41510":1,"G00400":1,"G16320":1,"G41460":1,"G13440":1,"G15650":1,"G28180":1,"G10960":1,"G10140":1,"G12260":1,"G54310":1,"G42910":2,"G56240":1,"G34740":1,"G22140":1,"G10760":1,"G20540":1,"G31630":1,"G35440":2,"G40260":1,"G05120":1,"G31520":1,"G01410":1,"G12080":1,"G35590":1,"G38680":1,"G37540":1,"G16120":1,"G51080":1,"G02640":1,"G08430":1,"G37520":1,"G39920":1,"G07340":1,"G51900":1,"G47040":1,"G20640":1,"G15190":2,"G35330":1,"G15630":1,"G29190":1,"G39140":1,"G22110":1,"G06250":1,"G47090":1,"G43110":1,"G31290":1,"G22510":1,"G03160":1,"G55320":1,"G01750":1,"G07820":2,"G53680":1};
const y = obj_to_map(x);
let gkeys = Array.from(y.keys());
let g1keys = Array.from(Object.keys(x));
g1keys.map(k => (
  console.log(k,x[k])
));

var myData=['237','124','255','124','366','255']

var uniqueAndSorted = [...new Set(myData)].sort() 
console.log("Sorted Unique:");
console.log(uniqueAndSorted);

/*
for (var [k,v] of y.entries() ) {
  console.log(k,v);
}

/*

https://appdividend.com/2018/12/27/javascript-object-keys-example-object-keys-tutorial/#Javascript_Object_Keys_Example

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/