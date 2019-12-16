function checkAge(){
    var age = document.getElementById("varsta").value;
    if (age < 6){
        document.getElementById("raspuns").innerHTML = "Generation Alpha"
    } else if (age >= 6 && age < 21) {
        document.getElementById("raspuns").innerHTML = "Generation Z"
    } else if (age >= 20 && age < 36) {
        document.getElementById("raspuns").innerHTML = "Generation Y"
    } else if (age >= 35 && age < 51) {
        document.getElementById("raspuns").innerHTML = "Generation X"
    } else if (age >= 51 && age < 69) {
        document.getElementById("raspuns").innerHTML = "Baby Boomers"
    } else if (age > 70) {
        document.getElementById("raspuns").innerHTML = "Builders"
    }
}