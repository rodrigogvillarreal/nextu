const mongoose = require('mongoose'),
      Schema = mongoose.Schema

      let UserSchema = new Schema({
          usuario:{ type: String, require: true, unique: true },
          password:{ type: String, require: true },
          nombreCompleto:{ type: String },
          estado:{ type: String, require: true, enum: ['Activo', 'Inactivo'] }
      })

      let UserModel = mongoose.model('users', UserSchema)
      module.exports = UserModel