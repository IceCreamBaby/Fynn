function checkDate(event) {
    event.preventDefault();
    var today = new Date();
    var selectedDate = new Date(document.getElementById('date').value);
    var florianBirthday = new Date(today.getFullYear(), 7, 17); // 17.08 ohne Jahr

    if (selectedDate.getDate() == today.getDate() && selectedDate.getMonth() == today.getMonth()) {
        window.location.href = 'frage.html';
    } else {
        alert('Bitte wähle das heutige Datum aus.');
    }
}

window.onload = function() {
    var birthdayForm = document.getElementById('birthdayForm');
    if (birthdayForm) {
        birthdayForm.onsubmit = function(event) {
            event.preventDefault();
            var selectedDate = new Date(document.getElementById('birthdate').value);
            var florianBirthday = new Date(selectedDate.getFullYear(), 7, 17); // 17.08 ohne Jahr

            if (selectedDate.getDate() == 17 && selectedDate.getMonth() == 7) {
                window.location.href = 'geburtstag.html';
            } else {
                alert('Bitte wähle den richtigen Geburtstag aus.');
            }
        };
    }
};
