import { Lot } from '../provide';

contract('Lot', async accounts => {
    it('should create a new Lot', async () => {

        const symbol = 'TEST'
        const metaDataUrl = 'helloworld'
        const metaDataHash = '00000000'
        const maxSupply = 3
        const lotInstance = await Lot.new()
        await lotInstance.createLot(accounts[1],symbol,metaDataUrl,metaDataHash,maxSupply)

        assert.equal(
            await lotInstance.lotCreator(symbol),
            accounts[1],
        )
        assert.equal(
            await lotInstance.lotMetadataUrl(symbol),
            metaDataUrl
        )
        assert.equal(
            await lotInstance.lotMetadataHash(symbol),
            metaDataHash
        )
        assert.equal(
            (await lotInstance.lotMaxSupply(symbol)).toNumber(),
            maxSupply
        )
        assert.equal(
            (await lotInstance.lotCount(symbol)).toNumber(),
            0
        )
    })

    it('should')
})