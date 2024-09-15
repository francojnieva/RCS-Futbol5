const mongoose = require("mongoose")
try {
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("db conectada")
    })
  } catch (error) {
    console.log(error)
  }

  module.exports = mongoose