//======================================Connection=============================================//
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tourism-places", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("Mongoose connection failed!");
  console.log("____________________________________________________");
});

db.once("open", function() {
  console.log("Mongoose connection initiated successfully!");
  console.log("____________________________________________________");
});

//========================================Schema===============================================//
let placesSchema = new mongoose.Schema({
  name: String,
  description: String,
  photosUrl: String
});

let Places = mongoose.model("places", placesSchema);

//========================================Schema===============================================//
let formsSchema = new mongoose.Schema({
  placeName: String,
  placeDescription: String,
  // placePhoto:String
});

let Forms = mongoose.model("forms", formsSchema);

//========================================Schema===============================================//
let photosSchema = new mongoose.Schema({
  photo:String
});

let Photos = mongoose.model("photos", photosSchema);



//=========================================GET=================================================//
let getPlaces = callBack => {
  console.log("GET PLACES FROM DATABASE");
  Places.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};

let getForm = callBack => {
  console.log("GET FORM DATA FROM DATABASE");
  Forms.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};

let getPhoto = callBack => {
  console.log("GET PHOTO DATA FROM DATABASE");
  Photos.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};
//=====================================GET BY ID===============================================//

let placeById = (callBack, _id) => {
  Places.findById(_id, function(err, docs) {
    if (err) {
      console.log("err :", err);
    }
    console.log("docs by id :", docs);
    callBack(docs);
  });
};
//=========================================ADD=================================================//
let addPlace = (callBack, obj) => {
  console.log("INSERT DATA TO DATABASE");
  Places.insertMany(
    [
      {
        name: obj.name,
        description: obj.description,
        photosUrl: obj.photosUrl
      }
    ],
    function(err, newPlace) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("NEW PLACE:", newPlace);
      getPlaces(callBack);
    }
  );
};



let addForm = (callBack, obj) => {
  console.log("INSERT DATA TO DATABASE");
  Forms.insertMany(
    [
      {
        placeName: obj.placeName,
        placeDescription: obj.placeDescription,
        // placePhoto:obj.placePhoto
      }
    ],
    function(err, newData) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("NEW Data:", newData);
      getForm(callBack);
    }
  );
};

let addPhoto = (callBack, obj) => {
  console.log("INSERT PHOTO TO DATABASE");
  Photos.insertMany(
    [
      {
        placePhoto:obj.placePhoto
      }
    ],
    function(err, newPhoto) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("NEW PHOTO:", newPhoto);
      getPhoto(callBack);
    }
  );
};
//=====================================MODULE EXPORTS=============================================//
module.exports = {
  getPlaces,
  addPlace,
  placeById,
  getForm,
  addForm,
  getPhoto,
  addPhoto
};
