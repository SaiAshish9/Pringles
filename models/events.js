const mongoose=require('mongoose')
const mongoosastic=require('mongoosastic')

var eventSchema=mongoose.Schema({
  _id:String,
  name:String,
  time:String,
  address:String,
  category:String
})

eventSchema.plugin(mongoosastic,{ 
  hosts:[
    'localhost:3000',
    'localhost:9200'
  ]
})

var Event=mongoose.model("Event",eventSchema)
module.exports = Event
