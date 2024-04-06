window.onload = function() {
    var today = new Date();
    var selectedDate = new Date(document.getElementById('date').value);
    var florianBirthday = new Date(today.getFullYear(), 7, 17); // 17.08 ohne Jahr

    if (selectedDate.getDate() == today.getDate() && selectedDate.getMonth() == today.getMonth()) {
        window.location.href = 'frage.html';
    }
};

