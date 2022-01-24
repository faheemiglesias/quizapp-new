// module.exports = {
//   HOST: "localhost",
//   PORT: 27017,
//   DB: "faheem_db"
// };
// module.exports = {
//   url: "mongodb+srv://localhost:27017/faheem_db"
// };
// module.exports = {
//   mongodb+srv://Faheem:<password>@testmongodb.t6xjd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// }

//db.js

module.exports = {
  url: `mongodb+srv://Faheem:Faheem123*@testmongodb.t6xjd.mongodb.net/quizappdb?retryWrites=true&w=majority`
}

// const mongoose = require('mongoose')

// const url = `mongodb+srv://Faheem:Faheem123*@testmongodb.t6xjd.mongodb.net/quizappdb?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })