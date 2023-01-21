function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IXYPYNCmh/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var platypus = 0;
var tiger = 0;
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;


        document.getElementById("result_label").innerHTML = 'Voice is of --'+result[0].label;
        document.getElementById("result_count").innerHTML = 'Dog -'+dog+'Cat -'+cat+'Platypus-'+platypus+'Tiger -'+tiger;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_image');

        if(results[0].label == "Dog Bark") {
            img.src = 'Dog.png';
            dog = dog + 1;
        } else if (results[0].label == "Cat Meow") {
            img.src = 'Cat.png';
            cat = cat + 1;
       } else if (results[0].label == "Platypus Chatter") {
            img.src = 'Platypus.png';
            platypus = platypus + 1;
       }else if (results[0].label == "Tiger Roar") {
        img.src = 'Tiger Png.png';
        tiger = tiger + 1;
   }

}}