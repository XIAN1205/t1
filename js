function changeFont() {
    var studentIdElement = document.getElementById('studentId');
    var nameElement = document.getElementById('name');
    studentIdElement.style.fontFamily = 'Arial, sans-serif';
    studentIdElement.style.color = 'blue';
    nameElement.style.fontFamily = 'Arial, sans-serif';
    nameElement.style.color = 'green';
}

function addBorder() {
    var avatarElement = document.getElementById('avatar');
    avatarElement.style.borderRadius = '50%';
    avatarElement.style.border = '4px solid red';
}

function changeImage() {
    var avatarElement = document.getElementById('avatar');
    avatarElement.src = 'life_photo.jpg';
}
