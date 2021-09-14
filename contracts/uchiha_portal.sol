pragma solidity ^0.8.0;

import "hardhat/console.sol"; //loging

contract uchiha_portal {
    uint izanami;
    constructor(){
    console.log("Itachi San");
 }


function the_izanami_technique() public {
    izanami += 1;
    console.log("%s is in never-ending illusion",msg.sender);
}

function get_total_izanami() view public returns (uint) {
    console.log("Izanami was used %d times", izanami);
    return izanami;
}
}