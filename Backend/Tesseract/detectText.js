// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
//const fileName = 'C:/Users/HK/Desktop/ReactClean/Full/Med/Backend/Tesseract/images/test4.png';
 async function getText(url){
    var textArr = [];
    const [result] = await client.textDetection(url);
    const detections = result.textAnnotations;
    detections.forEach(text=> textArr.push(text.description))
    return textArr[0];
}

exports.getText = getText
//set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\HK\Desktop\ReactClean\Full\Med\Backend\Tesseract\api_key.json