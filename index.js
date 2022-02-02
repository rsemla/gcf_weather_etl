const {Storage} = require('@google-cloud/storage');

exports.readObservation = (file, context) => {

    console.log(` Event: ${context.eventID}`);
    console.log(` Event Type: ${context.eventType}`);
    console.log(` Bucket: ${file.bucket}`);
    console.log(` File: ${file.name}`);
}