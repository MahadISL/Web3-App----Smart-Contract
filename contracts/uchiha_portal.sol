// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol"; //loging

contract uchiha_portal {
    uint izanami;
    constructor(){
    console.log("Itachi San");
 }


function izanami_jutsu() public {
    izanami += 1;
    console.log("%s is in a never-ending illusion",msg.sender);
}

function get_total_izanami() view public returns (uint) {
    console.log("Izanami was used %d times", izanami);
    return izanami;
}
}