import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
      type: String,
      unique: true
  }
});

//create a static method on the userSchema that allows to check if user exists by username or email
userSchema.statics.findByLogin = async function (login){
    let user = await this.findOne({
        username: login
    })

    if(!user) {
        user = await this.findOne({email:login})
    }
}

const User = mongoose.model('User', userSchema);
export default User;