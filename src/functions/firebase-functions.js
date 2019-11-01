
// updates image URI key-pair of eatery in fireabse DB
function updateImageUri(eateryName, storage, db) {
  // creating image ref
  var imagePath = eateryName.replace(/ /g, "-");
  var imageRef = storage.ref().child('eatery-data/' + imagePath + '.jpg');
  imageRef.getDownloadURL().then((url) => {
    db.ref('eatery-data/' + name).update({'imageUri' : url})
  }), (err) => {console.log("Error fetching URL")}
}


