let poubelle = document.querySelector('.bin, .poubelle');

if (poubelle) {
    
    poubelle.addEventListener('click', function() {
if (document.querySelector('.dossier-container')) return
    // Conteneur parent
    const container = document.createElement('div');
    container.className = 'dossier-container';
    
    // Image du dossier
    const folder = document.createElement('img');
    folder.src = 'images/corbeille_folder.png';
    folder.alt = 'Dossier';
    folder.className = 'dossier';
    
    // Zone de fermeture X
    const closeZone = document.createElement('div');
    closeZone.className = 'close-zone';
    closeZone.addEventListener('click', function() {
        container.remove();
    });
    
    // Zone de fermeture -
    const closeZone2 = document.createElement('div');
    closeZone2.className = 'close-zone2';
    closeZone2.addEventListener('click', function() {
        container.remove();
    });
    
    // Ajouter au conteneur
    container.appendChild(folder);
    container.appendChild(closeZone);
    container.appendChild(closeZone2);
    
    document.body.appendChild(container);
    });
}