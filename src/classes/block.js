const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, data, previousHash = '', hash) {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
    }

    toString() {
        return `
            timestamp: ${this.timestamp}
            data: ${this.data}
            previousHash: ${this.previousHash.substring(0, 10)}
            hash: ${this.hash.substring(0, 10)}
        `
    }

    static calculateHash() {
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    }

    static genesis() {
        return new this('Genesis time', [], '-----', "f1r57-h45hdddkeoekk");
    }

    static mineBlock(previousBlock, data) {
        const timestamp = Date.now();
        const previousHash = previousBlock.hash;
        const hash = Block.calculateHash(timestamp, previousHash, data);

        return new this(timestamp, data, previousHash, hash);
    }

    static blockHash(block) {
        const { timestamp, previousHash, data } = block;
        return Block.calculateHash(timestamp, previousHash, data);
    }
}

module.exports = Block;