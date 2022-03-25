function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lO13RQkBq/model.json', modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}