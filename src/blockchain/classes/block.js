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
            previousHash: ${this.previousHash.substring(0, 10)}
            hash: ${this.hash.substring(0, 10)}
            data: ${this.data}
        `
    }

    static calculateHash(timestamp, previousHash, data) {
        return SHA256(timestamp + previousHash + JSON.stringify(data)).toString();
    }

    static genesis() {
        return new this('Genesis time', [], '-----', "first-hash-not-allowed-to-be-empty");
    }

    static mineBlock(previousBlock, data) {
        const timestamp = Date.now();
        const previousHash = previousBlock.hash;
        const hash = Block.calculateHash(timestamp, previousHash, data);

        return new this(timestamp, data, previousHash, hash);
    }

    static calculateHashFromBlock(block) {
        const { timestamp, previousHash, data } = block;
        return Block.calculateHash(timestamp, previousHash, data);
    }
}

module.exports = Block;