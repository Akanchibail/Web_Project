document.addEventListener('DOMContentLoaded', function() {
    var noteForm = document.getElementById('noteForm');

    if (noteForm) {
        noteForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var note = document.getElementById('note').value;

            var noteObj = { note: note };

            console.log(noteObj);
        });
    }
});