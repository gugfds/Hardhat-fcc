const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    /* line 5 & 6 are the same as line 7*/
    // const blockTask = async function() => {} 
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number ${blockNumber}`)
    }
)

module.exports = {}
