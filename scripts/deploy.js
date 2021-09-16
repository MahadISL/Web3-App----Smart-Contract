async function main() { 
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Token = await hre.ethers.getContractFactory("uchiha_portal");
    const token = await Token.deploy();

    console.log("unchiha_portal Adress:", token.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});