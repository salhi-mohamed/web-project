// Récupération des boutons d'achat
const boutonsAchat = document.querySelectorAll('.bouton-achat');

// Fonction appelée lorsqu'un bouton d'achat est cliqué
function ajouterAuPanier(event) {
  // Récupération des informations sur l'article à ajouter
  const article = {
    nom: event.target.dataset.nom,
    prix: parseFloat(event.target.dataset.prix)
  };
  function ajouterAuPanier() {
      panier.push(article);
      total += article.prix;
      afficherPanier();
    }
  // Récupération du panier actuel dans le stockage local (ou un tableau vide si le panier n'existe pas encore)
  const panier = JSON.parse(localStorage.getItem('panier')) || [];
 
  // Ajout de l'article au panier
  panier.push(article);

  // Sauvegarde du panier dans le stockage local
  localStorage.setItem('panier', JSON.stringify(panier));

  // Mise à jour de l'affichage du panier
  afficherPanier();
}

// Fonction appelée pour afficher le contenu du panier
function afficherPanier() {
  // Récupération du panier actuel dans le stockage local (ou un tableau vide si le panier n'existe pas encore)
  const panier = JSON.parse(localStorage.getItem('panier')) || [];

  // Récupération de l'élément HTML qui contiendra la liste des articles du panier
  const listePanier = document.getElementById('liste-panier');

  // Réinitialisation de la liste des articles du panier
  listePanier.innerHTML = '';

  // Calcul du total du panier
  let total = 0;

  // Ajout de chaque article du panier à la liste et au total
  for (let article of panier) {
    const li = document.createElement('li');
    li.innerText = `${article.nom} - ${article.prix}€`;
    listePanier.appendChild(li);
    total += article.prix;
  }

  // Mise à jour de l'affichage du total du panier
  const totalPanier = document.getElementById('total-panier');
  totalPanier.innerText = `Total : ${total}€`;
}

localStorage.setItem('panierTotal', total);
localStorage.setItem('panierArticles', JSON.stringify(panier));

// Ajout d'un écouteur d'événement à chaque bouton d'achat
for (let bouton of boutonsAchat) {
  bouton.addEventListener('click', ajouterAuPanier);
  
}
afficherPanier();

const url = `http://localhost/PDO/ajout/ajout.php?total=${total}&articles=${JSON.stringify(panier)}`;
const valider = document.querySelector('.bouton-valider');
valider.setAttribute('href', url);
  