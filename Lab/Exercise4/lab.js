function saveFunc() {

    // save al values into variables
    let redBackground = document.getElementById("valueForRedBG").value;
    let blueBackground = document.getElementById("valueForBlueBG").value;
    let greenBackground = document.getElementById("valueForGreenBG").value;
    // Border variables
    let redBorder = document.getElementById("valueForRed").value;
    let blueBorder = document.getElementById("valueForBlue").value;
    let greenBorder = document.getElementById("valueForGreen").value;
    let borderW = document.getElementById("valueForWidth").value;

    let BGcolor = "rgb(" + redBackground + "," + greenBackground + "," + blueBackground + ")";
    //alert(color);
    let borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")";

    document.getElementById("border").style.backgroundColor = BGcolor;
    document.getElementById("border").style.borderColor = borderColor;
    document.getElementById("border").style.borderWidth = borderW + "px";


}