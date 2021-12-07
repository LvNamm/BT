var btn = document.getElementById("btn")
btn.addEventListener('click',onclick);
function onclick(){
    var question1 = document.getElementById("question1");
    var answer1 = question1.options[question1.selectedIndex].text;
    var question2 = document.getElementById("question2");
    var answer2 = question2.options[question1.selectedIndex].text;
    var question3 = document.getElementById("question3");
    var answer3 = question3.options[question1.selectedIndex].text;
    var img = document.getElementById("img");
    var tianw = document.getElementById("title-answer");
    var teanw = document.getElementById("text_anwser");
    if(answer1=="Never" && answer2=="Yes, I eat when I hungry" && answer3=="I don't watch this movie"){
        var tianw = document.getElementById("title-answer");
        tianw.textContent = "You are Human";
        var teanw = document.getElementById("text_anwser");
        teanw.textContent = "Well, you look like a human";
        img.src ="human.jpg";
    }
    else if(answer1=="Yes,I usually talk with them" && answer2=="What is eat??" && answer3=="He is my friend"){
        tianw.textContent = "You are Alien";
        teanw.textContent = "Well, you look like a Alien";
        img.src ="alien.jfif";
    }
    else{
        tianw.textContent = "you are truly bizarre person";
        teanw.textContent = "?????????????????";
        img.src ="shocked.jpg";
    }
}