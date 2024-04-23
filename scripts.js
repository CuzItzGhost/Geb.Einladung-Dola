document.addEventListener('DOMContentLoaded', function() {
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
	const bsquare1 = document.getElementById('square_black1');
    const bsquare2 = document.getElementById('square_black2');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    const resizeSquares = () => {
        const pageWidth = window.innerWidth;
        const pageHeight = window.innerHeight;
        let sizeFactor;

        // Überprüfen, ob die Höhe kleiner ist als die Breite
        if (pageHeight < pageWidth) {
            sizeFactor = 0.15; // Faktor für den Fall, dass die Höhe kleiner ist
        } else {
            sizeFactor = 0.25; // Faktor für den Fall, dass die Breite kleiner ist
        }

        // Berechnung der neuen Größe für die Quadrate basierend auf der Breite und Höhe der Seite
        const size = Math.min(pageWidth, pageHeight) * sizeFactor;

        // Setzen der neuen Größe für die Quadrate
        square1.style.width = size + 'px';
        square1.style.height = size + 'px';
        square2.style.width = size + 'px';
        square2.style.height = size + 'px';
		bsquare1.style.width = size + 'px';
        bsquare1.style.height = size + 'px';
		bsquare2.style.width = size + 'px';
        bsquare2.style.height = size + 'px';

        // Setzen der CSS-Variable für die Größe
        const newSize = size + 20;
        document.documentElement.style.setProperty('--size', newSize + 'px');
    };

    // Event-Listener hinzufügen, um die Größe der Quadrate neu zu berechnen, wenn sich die Fenstergröße ändert
    window.addEventListener('resize', resizeSquares);

    // Initial die Größe der Quadrate festlegen
    resizeSquares();

    // Event-Listener für das Klicken auf die Quadrate hinzufügen
    square1.addEventListener('click', function() {
        console.log('Quadrat 1 auf Seite 1 wurde geklickt!');
        page1.classList.remove('active');
        page2.classList.add('active');
    });

    square2.addEventListener('click', function() {
        console.log('Quadrat 2 auf Seite 2 wurde geklickt!');
        page2.classList.remove('active');
        page1.classList.add('active');
    });

    // Standardmäßig die Seite 1 aktivieren
    page1.classList.add('active');
});
