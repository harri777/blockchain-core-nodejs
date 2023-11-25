const Blockchain = require('../src/classes/blockchain.js');
const Block = require('../src/classes/block.js');

describe('Blockchain Tests', () => {
    let blockchain, blockchain2;

    beforeEach(() => {
        blockchain = new Blockchain();
        blockchain2 = new Blockchain();
    });

    it('starts with the genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'foo';
        blockchain.addBlock(data);

        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
    });
});