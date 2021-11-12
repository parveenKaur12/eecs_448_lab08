let currentValue = 0;

function goleft() {
    if (currentValue == 0) {
        pictureArray[currentValue].style.display = "none";
        currentValue = 4;
        pictureArray[currentValue].style.display = "";
    } else {
        pictureArray[currentValue].style.display = "none";
        currentValue--;
        pictureArray[currentValue].style.display = "";
    }

}

function goRight() {
    if (currentValue == 4) {
        pictureArray[currentValue].style.display = "none";
        currentValue = 0;
        pictureArray[currentValue].style.display = "";
    } else {
        pictureArray[currentValue].style.display = "none";
        currentValue++;
        pictureArray[currentValue].style.display = "";
    }

}