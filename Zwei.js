document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            html2canvas(document.body).then(function(canvas) {
                var a = document.createElement('a');
                a.href = canvas.toDataURL('image/png');
                a.download = 'Seiteninhalt.png';
                a.click();

                // Optional: Verstecken des "erstelle den Plan" Buttons
                var erstellePlanButton = document.getElementById('Essenmachen');
                if (erstellePlanButton) {
                    erstellePlanButton.style.display = 'none';
                }
            });
        });
    }
});



