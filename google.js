let google = document.querySelector('.google');

google.addEventListener('click', function() {
    // Conteneur parent
    var container2 = document.createElement('div');
    container2.className = 'dossier-container';
    
    // Image du dossier
    var reach = document.createElement('img');
    reach.src = 'images/google2.png';
    reach.alt = 'google';
    reach.className = 'google';
    
    // Zone de fermeture X
    var closeZone = document.createElement('div');
    closeZone.className = 'close-zone';
    closeZone.addEventListener('click', function() {
        container2.remove();
    });
    
    // Zone de fermeture -
    var closeZone2 = document.createElement('div');
    closeZone2.className = 'close-zone2';
    closeZone2.addEventListener('click', function() {
        container2.remove();
    });
    
    // Ajouter au conteneur
    container2.appendChild(reach);
    container2.appendChild(closeZone);
    container2.appendChild(closeZone2);
    
    document.body.appendChild(container2);
});