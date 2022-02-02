const {Storage} = require('@google-cloud/storage');
const csv = require('csv-parser');

exports.readObservation = (file, context) => {

const gcs = new Storage();
  const dataFile = gcs.bucket(file.bucket).file(file.name);
    
  dataFile.createReadStream()

    .on('error',()=> {
        console.log(error);
    })
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
        printDict(row);
    })
    .on('end', () => {
        console.log('end of file');
    });
}

//HELPER FUNCTIONS

function printDict(row){
    for (let key in row){
        console.log(key + ' : ' + row[key]);
    }
}