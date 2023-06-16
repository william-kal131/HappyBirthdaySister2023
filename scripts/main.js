let myImage = document.querySelector('#wish');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/wish1.png') {
        myImage.setAttribute('src', 'images/wish2.png');
    } else {
        myImage.setAttribute('src', 'images/wish1.png');
    }
}