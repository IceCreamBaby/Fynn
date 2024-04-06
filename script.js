window.onload = function() {
    var today = new Date();
    var birthdayDate = new Date('2024-04-06');
    var florianBirthday = new Date('2024-08-17');

    if (today.getDate() == birthdayDate.getDate() && today.getMonth() == birthdayDate.getMonth()) {
        window.location.href = 'frage.html';
    } else {
        document.querySelector('.container').innerHTML = '<h2>Du hast noch nicht Geburtstag!!!</h2>';
    }

    if (window.location.href.includes('frage.html') && today.getDate() == florianBirthday.getDate() && today.getMonth() == florianBirthday.getMonth()) {
        window.location.href = 'geburtstag.html';
    }
};
