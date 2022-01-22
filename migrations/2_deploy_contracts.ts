/* const Buy = artifacts.require("Buy");
const Openable = artifacts.require("Openable"); */
import { Contract } from '../provide'

module.exports = function (deployer: Truffle.Deployer, network: string, accounts: string[]) {
    deployer.deploy(Contract)
}