const {Storage} = require('@google-cloud/storage');

exports.readObservation = (file, context) => {

const gcs = new Storage();
  const dataFile = gcs.bucket(file.bucket).file(file.name);
    
  dataFile.createReadStream()

    .on('error',()=> {
        console.log(error);
    })
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('end of file');
    });
}