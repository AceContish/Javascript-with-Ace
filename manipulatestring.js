var str1 = "honda";
var str2 = "honda, audi, tesla";
var str3 = "honda, audi, tesla, ferrari";

console.log(str1.length); //to count length of "honda"
console.log(str2.indexOf("audi")); //to search index of "audi"
console.log(str2.slice(7,10)); //cut and retrive index between 7 to 10
console.log(str3.replace(" ferrari", " jaguar")); //replace " ferrari" with " jaguar"