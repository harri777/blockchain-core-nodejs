function getBlocks(req, res, blockchain){
    res.send(blockchain.chain);
};

function mineBlock(req, res, blockchain, p2pServer){
    const block = blockchain.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    p2pServer.syncChains();
    res.redirect('/blocks');
}

module.exports = { getBlocks, mineBlock }