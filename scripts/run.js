async function main() {

    const [owner, rando_person] = await hre.ethers.getSigners()
    const itachiContractFactory = await hre.ethers.getContractFactory("uchiha_portal");
    const itachiContract = await itachiContractFactory.deploy();
    await itachiContract.deployed();
    console.log("Contract deployed to:", itachiContract.address);
    console.log("Contract deployed by:", owner.address);

    let izanami_jutsu_count;
    izanami_jutsu_count = await itachiContract.get_total_izanami();

    let izanami_jutsu_txn = await itachiContract.izanami_jutsu();
    await izanami_jutsu_txn.wait();

    izanami_jutsu_count = await itachiContract.get_total_izanami();

    izanami_jutsu_txn = await itachiContract.connect(rando_person).izanami_jutsu();
    await izanami_jutsu_txn.wait();

    izanami_jutsu_count = await itachiContract.get_total_izanami();
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});