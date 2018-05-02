const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
userName:String,
password:String,
age :Number
})
mongoose.model('users',UserSchema);