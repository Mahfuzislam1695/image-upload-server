// module.exports = {
//     db: `mongodb+srv://important-think:jqRC9R3a3CsM4fVR@cluster0.5zsfm.mongodb.net`
//  };

// module.exports = {
//     db: 'mongodb+srv://important-think:jqRC9R3a3CsM4fVR@cluster0.5zsfm.mongodb.net/important'
//  };
//  mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db, {
//     useNewUrlParser: true
// }).then(() => {
//     console.log('Database sucessfully connected')
// },
//     error => {
//         console.log('Database could not be connected: ' + error)
//     }
// )

const mongoose = require('mongoose');

//db connection
mongoose
.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("Database connection is successfully");
})
.catch((err)=>{
  console.log("error", err);
})