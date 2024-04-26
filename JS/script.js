// Récupération des boutons d'achat
const boutonsAchat = document.querySelectorAll('.bouton-achat');

// Fonction appelée lorsqu'un bouton d'achat est cliqué
function ajouterAuPanier(event) {
  // Récupération des informations sur l'article à ajouter
  const article = {
    nom: event.target.dataset.nom,
    prix: parseFloat(event.target.dataset.prix)
  };

  // Récupération du panier actuel dans le stockage local (ou un tableau vide s'il n'y en a pas encore)
  const panier = JSON.parse(localStorage.getItem('panier')) || [];

  // Ajout de l'article au panier
  panier.push(article);

  // Sauvegarde du nouveau panier dans le stockage local
  localStorage.setItem('panier', JSON.stringify(panier));
}

// Ajout d'un gestionnaire d'événements "click" à chaque bouton d'achat
for (const bouton of boutonsAchat) {
  bouton.addEventListener('click', ajouterAuPanier);
}

const tableauPanier = document.getElementById('tableau-panier');
const panier = JSON.parse(localStorage.getItem('panier')) || [];
let total = 0;

for (const article of panier) {
  const ligne = document.createElement('tr');

  const colonneNom = document.createElement('td');
  colonneNom.textContent = article.nom;
  ligne.appendChild(colonneNom);

  const colonnePrix = document.createElement('td');
  colonnePrix.textContent = article.prix.toFixed(2) + ' €';
  ligne.appendChild(colonnePrix);

  tableauPanier.appendChild(ligne);

  total += article.prix;
}

const ligneTotal = document.createElement('tr');
ligneTotal.classList.add('total');

const colonneTotalNom = document.createElement('td');
colonneTotalNom.textContent = 'Total';
ligneTotal.appendChild(colonneTotalNom);

const colonneTotalPrix = document.createElement('td');
colonneTotalPrix.textContent = total.toFixed(2) + ' €';
ligneTotal.appendChild(colonneTotalPrix);

tableauPanier.appendChild(ligneTotal);
