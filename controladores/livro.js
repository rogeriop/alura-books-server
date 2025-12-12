function getLivros (req, res) {
    try {
        res.send("Alô, Mundo");
    } catch (error) {
        res.status(500).send({ message: error.message });        
    }
}

module.exports = {getLivros};