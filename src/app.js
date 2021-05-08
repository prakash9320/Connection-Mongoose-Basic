const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/prakash", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connction successfully ...."))
    .catch((err) => console.log(err));


// schema
// A mongoose schema define the structure of the document
// default values , validators , etc..

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// A mongo model is wrapper on the mongoose Schema
// A Mongos Schemadefine the structure of the document
// dedualt value, validators, etc. ,wheres a mongo model 
// provides an inteface  to the database for creating,
// quering ,updating ,deleting records , etc..

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

// creating  document or insert

const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            // change the name in flutter
            name: "angular js",
            Ctype: "front-end",
            videos: 11,
            author: "shukla",
            active: true,

        })
        const mongoPlaylist = new Playlist({
            name: "mongoDB",
            Ctype: "database",
            videos: 11,
            author: "prakash shukla",
            active: true,

        })
        const mongoosePlaylist = new Playlist({
            name: "mongoose js",
            Ctype: "back-end",
            videos: 4,
            author: "prakash shukla",
            active: true,

        })
        const fullstackPlaylist = new Playlist({
            name: "Anujtodankar",
            Ctype: "back-end",
            videos: 201,
            author: "anuj todakar ",
            active: true,

        })
        const expessPlaylist = new Playlist({
            name: "hello",
            Ctype: "back-end",
            videos: 201,
            author: "prakash ",
            active: true,

        })                         // insert multiple data add in mongodb
        const result = await Playlist.insertMany([mongoosePlaylist, fullstackPlaylist, mongoPlaylist, expessPlaylist, reactPlaylist])
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
createDocument();
// find  specific document in mongo db collections  
const getdocument = async () => {                            // show only name in in document
    const result = await Playlist.find({ $and: [{ Ctype: "font-end" }, { author: "shukla" }] });
    console.log(result);
}

getdocument();


const updateDocument = async (_id) => {
    const result = await Playlist.updateOne({ _id }, {
        $set: {
            name: "Flutter"
        },
    },
        console.log(result)
    );
}


updateDocument("60965e66b3b562069081a45e")