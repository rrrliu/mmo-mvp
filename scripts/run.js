const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("Game");
  const gameContract = await gameContractFactory.deploy(
    ["Luffy", "Katakuri", "Usopp"], // Names
    [
      "https://imgur.com/TyemgL3", // Images
      "https://imgur.com/3512Jr5",
      "https://imgur.com/FWbOAS6",
    ],
    [300, 250, 100], // HP values
    [100, 150, 25] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
