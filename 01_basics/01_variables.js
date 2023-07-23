const accountId = 1234
let accountEmail = "arth@gmail.com"
var accountPassword = "1234"
accountCity = "guj"
let accountState;

// accountId = 2 //not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "ab@gmail.com"
accountPassword ="2345"
accountCity = "delhi"

// console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
