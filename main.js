function startClassification(){
    navigator.mediaDevices.getUsermedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bThwGQtlW/model.json', modelReady);
}
function modelReady(){
classifier.classify(gotResults());
}
function gotResults(error, results){

}