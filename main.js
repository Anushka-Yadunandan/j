function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Uh7XuTq3v/model.json ', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

var dog = 0
var cat = 0
var cow = 0
var lion = 0

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected voice is of - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Detected Dog - ' + dog + ' Detected Cat - ' + cat + 'Detected Cow - ' + cow + 'Detected Lion - ' + lion;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('Cute Cow');
        img1 = document.getElementById('Cute Cat');
        img2 = document.getElementById('Cute Dog');
        img3 = document.getElementById('Cute Lion');

        if (results[0].label == "Meow") {
            img.src = 'Cute Cat.webp';
            cat = cat + 1 
        } else if (results[0].label == "Bark") {
            img.src = 'Cute Dog.webp';
            dog = dog + 1
        } else if (results[0].label == "Moo") {
            img.src = 'Cute Cow.webp';
            cow = cow + 1
        } else if (results[0].label == "Roar") {
            img.src = 'Cute Lion.webp';
            lion = lion + 1
        }
    }
}