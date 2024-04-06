function checkDate(event) {
    event.preventDefault();
    var selectedDate = new Date(document.getElementById('date').value);

    if (selectedDate.getDate() == 7 && selectedDate.getMonth() == 3) {
        window.location.href = 'frage.html';
    } else {
        alert('Du hast heute nicht dein Geburtstag!');
    }
}

window.onload = function() {
    var birthdayForm = document.getElementById('birthdayForm');
    if (birthdayForm) {
        birthdayForm.onsubmit = function(event) {
            event.preventDefault();
            var selectedDate = new Date(document.getElementById('birthdate').value);

            if (selectedDate.getDate() == 17 && selectedDate.getMonth() == 7) {
                window.location.href = 'geburtstag.html';
            } else {
                alert('Bitte wähle den richtigen Geburtstag aus.');
            }
        };
    }
};
