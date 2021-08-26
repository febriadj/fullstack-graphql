const mongoose = require('mongoose');

const uri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/projects';

module.exports = async () => {
  try {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }

    await mongoose.connect(uri, options);
    console.log('Mongodb Connected');
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
}
