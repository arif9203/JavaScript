const accountId = 3234235

// accountId =2 // not allow for const variable

let accountEmail = " arif@gamil.com"

/*
Prefer not use var
because of issue in block scope and functional scope
*/
var accountPassword = 123455

// this is not good way to decleare to variable  but this works in JS
accountCity = "Maharajganj"

accountEmail = "asif@gamil.com"
accountPassword = 34422
accountCity = "Gkp"

let accountState;

console.log(accountId);
console.table([accountEmail, accountId ,accountPassword, accountCity, accountState])