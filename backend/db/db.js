const mongoose = require("mongoose")

const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.mongo_url)
        console.log('Db conneted');
    } catch (error){
        console.log('DB connection error');
    }
    
}

module.exports = {db}