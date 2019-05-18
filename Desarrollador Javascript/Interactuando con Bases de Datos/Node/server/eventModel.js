const mongoose = require('mongoose'),
      Schema = mongoose.Schema

      let EventSchema = new Schema({
          id: { type: Number, require: true, unique: true },
          title: { type: String },
          start: { type: Date },
          start_hour: { type: Date },
          end: { type: Date },
          end_hour: { type: Date },     
          user:{ type: String }
      })

      let EventModel = mongoose.model('events', EventSchema)
      module.exports = EventModel