cat=0;
dog=0;

function startClassification() {

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/blxCVFSJP/model.json", modelReady);
  
  }
  
  function modelReady() {
  
    classifier.classify(gotResults);
  
  }
  
  function gotResults(error , results) {
  
    if(error){
  
      console.error(error);
  
    }
    else{
  
      console.log(results);
      random_number_R = Math.floor(Math.random()*255)+1;
      random_number_G = Math.floor(Math.random()*255)+1;
      random_number_B = Math.floor(Math.random()*255)+1;
  
      document.getElementById("result_label").innerHTML = "I can hear " + results[0].label;
      document.getElementById("result_label").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+")";
      document.getElementById("detected_dogs").innerHTML = ""
      document.getElementById("detected_dogs").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+"";
      document.getElementById("detected_cats").innerHTML = ""
      document.getElementById("detected_cats").style.color = "rgb("+random_number_R+","+random_number_G+","+random_number_B+"";
  
      img = document.getElementById("alien1");
      img1 = document.getElementById("alien2");
      img2= document.getElementById("alien3");
      img3= document.getElementById("alien4");
  
      if (results[0].label == "Background Noise") {
  
        document.getElementById("wtli").src = "listen.gif";
        document.getElementById("result_label").innerHTML = "Detected sound is of -- background noise";
  
      }
  
      else if (results[0].label == "catmeow") {
  
        document.getElementById("wtli").src = "meow.gif";
        document.getElementById("result_label").innerHTML = "Detected voice is of -- Meow";
        cat = cat + 1;
        document.getElementById("detected_dogs").innerHTML = "Detected cats -- " + cat;
  
      }
  
      else if (results[0].label == "dogbark") {
  
        document.getElementById("wtli").src = "bark.gif";
        document.getElementById("result_label").innerHTML = "Detected voice is of -- Barking";
        dog = dog + 1;
        document.getElementById("detected_dogs").innerHTML = "Detected dogs -- " + dog;
  
      }
  
      else{
  
        document.getElementById("wtli").src = "listen.gif";
        document.getElementById("result_label").innerHTML = "Detected voice is of --";

      }
  
    }
  
  }