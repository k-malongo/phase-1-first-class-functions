const { returns } = require("chai-spies")

function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction(){
    return function named(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}