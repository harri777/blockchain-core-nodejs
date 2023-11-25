function getBlocks(req, res, blockchain){
    res.send(blockchain.chain);
};

function mineBlock(req, res, blockchain){
    const block = blockchain.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);
    res.redirect('/blocks');
}

module.exports = { getBlocks, mineBlock }