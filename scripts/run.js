async function main() {

    const [owner, rando_person] = await hre.ethers.getSigners()
    const itachiContractFactory = await hre.ethers.getContractFactory("uchiha_portal");
    const itachiContract = await itachiContractFactory.deploy();

 
    await itachiContract.deployed();
    console.log("Contract deployed to:", itachiContract.address);
    console.log("Contract deployed by:", owner.address);

    let the_izamai_technique_Count;
    the_izamai_technique_Count = await itachiContract.get_total_izanami();

    let the_izamai_technique_Txn = await itachiContract.the_izanami_technique();
    await the_izamai_technique_Txn.wait();

    the_izamai_technique_Count = await itachiContract.get_total_izanami();

    the_izamai_technique_Txn = await itachiContract.connect(rando_person).the_izanami_technique();
    await the_izamai_technique_Txn.wait();

    the_izamai_technique_Count = await itachiContract.get_total_izanami();
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});