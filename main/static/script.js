function ChangeImage(){
    let displayImage = document.getElementById('SharifLogo')
    
    if(displayImage.src.match('/static/images/eee.png')){
        displayImage.src = '/static/images/A.png'
        
    }
    else  displayImage.src = '/static/images/eee.png'
            
    
}

var slider_img = document.querySelector('.slider-img');
var images_1 = [
    '/static/images/daneshkade.jpg',
    '/static/images/lobby.jpg',
    '/static/images/lobby2.jpg',
    '/static/images/lobby3.jpg',
    '/static/images/logo-intro.jpg',
    '/static/images/OIP.jpg',
    '/static/images/KRC1.jpg',
    '/static/images/RTS.jpg',
    '/static/images/KishCampus.jpeg',
    '/static/images/students.jpg',
    '/static/images/R.jpg'];
var images_2 = [
    '/static/images/set0.jpg',
    '/static/images/set2.jpg',
    '/static/images/set3.jpg',
    '/static/images/set4.jpg'
];
var images_3=[
    '/static/images/tet0.jpg',
    '/static/images/tet1.jpg',
    '/static/images/tet2.jpg',
    '/static/images/tet3.jpg',
    '/static/images/tet4.jpg'

    
];
var i =0; // current image index
function prev(){
    if(i<=0) i = images.length;
    i--;
    return setImg();
}

function next(){
    if(i>=images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', images[i]);
}