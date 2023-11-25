const Block = require('../classes/block.js');

describe('Block Tests', () => {
    let data, previousBlock, block;

    beforeEach(() => {
        data = 'bar';
        previousBlock = Block.genesis();
        block = Block.mineBlock(previousBlock, data);
    });

    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });

    it('sets the `previousHash` to match the hash of the previous block', () => {
        expect(block.previousHash).toEqual(previousBlock.hash);
    });
});