function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dciQR-eyh/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)


        document.getElementById("hear").innerHTML = "I can hear - " + results[0].label;


        document.getElementById("hear").style.color = "rgb(" + random_number_r + ", " + random_number_g + " , " + random_number_b + ") "



        img1 = document.getElementById("Cow.png")

        img2 = document.getElementById("lion.png")

        img3 = document.getElementById("Dog.png")

        img4 = document.getElementById("Cat.png")


        if (results[0].label == 'Bark') {
            img4.src ="Cat.png"

        }
        else if (results[0].label == 'Meow') {
            img3.src = "Dog.png"
        }
        else if(results[0].label == 'Roar'){
            img2.src = "lion.png"
            
        }
        else if (results[0].label == 'Moo'){
            img1.src = "Cow.png"

        }

    }


}
