const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://Aathithyan:SnapFolio2024@cluster0.tpt8xqc.mongodb.net/SnapFolio?retryWrites=true&w=majority'

module.exports = () => {
    return mongoose.connect(dbUri);
}