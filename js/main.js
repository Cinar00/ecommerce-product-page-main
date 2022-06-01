
// changing picture 

function changePicture(pictureno) {
    document.getElementById('mainImage').src='images/big'+pictureno+'.jpg';
    //document.querySelector('#minpic1', '#minpic2').classList.add('active');
} 

function changeClass(classno) {
    document.getElementById('minpic'+classno).classList.add('active');
}