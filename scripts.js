document.addEventListener('DOMContentLoaded', function() {
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

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
