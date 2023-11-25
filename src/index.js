const Block = require('./classes/block.js');

const block = new Block('foo', 'bar', 'zoobazwjkwdjsjdosjdio', 'bazwjkwdjsjbazwjkwdjsjdosjdiodosjdio');
console.log(block.toString());

const genesisBlock = Block.genesis();
console.log(Block.genesis().toString());
const fooBlock = Block.mineBlock(genesisBlock, 'foo');
console.log(fooBlock.toString());
