//navigation
//home page
var action = document.getElementById('home');
action.addEventListener("click", function(){
   var etat = document.querySelector('.home-page').style.display;
   document.querySelector('.home-page').style.display="block";
   document.querySelector('.price-page').style.display="none";
   document.querySelector('.shop-page').style.display="none";
 }, false);
//prices page
var action = document.getElementById('prices');
action.addEventListener("click", function(){
   var etat = document.querySelector('.price-page').style.display;
   document.querySelector('.price-page').style.display="block";
   document.querySelector('.home-page').style.display="none";
   document.querySelector('.shop-page').style.display="none";
  }, false);
//shopping cart page
var action = document.getElementById('go-to');
action.addEventListener("click", function(){
   var etat = document.querySelector('.price-page').style.display;
   document.querySelector('.price-page').style.display="none";
   document.querySelector('.shop-page').style.display="block";
  document.querySelector('.bar').style.display="none";
  }, false);
//return prices
var action = document.getElementById('return');
action.addEventListener("click", function(){
   var etat = document.querySelector('.shop-page').style.display;
   document.querySelector('.price-page').style.display="block";
   document.querySelector('.shop-page').style.display="none";
   document.querySelector('.bar').style.display="block";
  }, false);
//fin navigation

//animation
var $loader = document.querySelector('.choice')

window.onload = function() {
  $loader.classList.remove('loader--active')
};

document.querySelector('.choice').addEventListener('click', function () {
  $choice.classList.add('choice--active')

  window.setTimeout(function () {
    $choice.classList.remove('choice--active')
  }, 5000)
})

//fin animation

var Qte_Minimum = 0;

// Nombre de produits minimum par lot
var Qte_Minimum_Valeur = 6;

// 0 pour désactiver l'ajout du prix de la livraison
// 1 pour activer la fonctionnalité de modification du prix total pour inclure le prix de la livraison selon un pourcentage du prix total
// 2 pour activer la fonctionnalité de modification du prix total pour inclure le prix de la livraison selon un forfait fixe



// ne pas modifier la suite sauf si vous désirez modifier le code
var MonPanier = (function() {
panier = [];
function Item(nom, prix, quantite) {
this.nom = nom;
this.prix = prix;
this.quantite = quantite;
}

function savepanier() {
sessionStorage.setItem('MonPanier', JSON.stringify(panier));
}

function loadpanier() {
panier = JSON.parse(sessionStorage.getItem('MonPanier'));
}
if (sessionStorage.getItem("MonPanier") != null) {
loadpanier();
}

var obj = {};

obj.ajouter_produit_dans_panier = function(nom, prix, quantite) {
for(var item in panier) {
  if(panier[item].nom === nom) {
panier[item].quantite ++;
savepanier();
return;
  }
}
var item = new Item(nom, prix, quantite);
panier.push(item);
savepanier();
}

obj.setquantiteForItem = function(nom, quantite) {
for(var i in panier) {
  if (panier[i].nom === nom) {
panier[i].quantite = quantite;
break;
  }
}
};

obj.enlever_produit_de_panier = function(nom) {
  for(var item in panier) {
if(panier[item].nom === nom) {
  panier[item].quantite --;
  if(panier[item].quantite === 0) {
panier.splice(item, 1);
  }
  break;
}
}
savepanier();
}

obj.enlever_produit_de_panier_tous = function(nom) {
for(var item in panier) {
  if(panier[item].nom === nom) {
panier.splice(item, 1);
break;
  }
}
savepanier();
}

obj.clearpanier = function() {
panier = [];
savepanier();
}

obj.totalquantite = function() {
var totalquantite = 0;
for(var item in panier) {
  totalquantite += panier[item].quantite;
}
return totalquantite;
}

obj.totalpanier = function() {
var totalpanier = 0;
for(var item in panier) {
  totalpanier += panier[item].prix * panier[item].quantite;
}
return Number(totalpanier.toFixed(2));
}

obj.listpanier = function() {
var panierCopy = [];
for(i in panier) {
  item = panier[i];
  itemCopy = {};
  for(p in item) {
itemCopy[p] = item[p];
  }
  itemCopy.total = Number(item.prix * item.quantite).toFixed(2);
  panierCopy.push(itemCopy)
}
return panierCopy;
}

return obj;
})();

$('.ajouter-panier').click(function(event) {
  event.preventDefault();
   var nom = $(this).data('nom');
  var prix = Number($(this).data('prix'));
  MonPanier.ajouter_produit_dans_panier(nom, prix, 1);
  afficherpanier();
});

$('.clear-panier').click(function() {
  MonPanier.clearpanier();
  afficherpanier();
});

function afficherpanier() {
  var panierArray = MonPanier.listpanier();
  var output = "";
  for(var i in panierArray) {
    output += "<tr>"
      + "<td>" + panierArray[i].nom + "</td>"
      + "<td>(" + panierArray[i].prix.toFixed(2) + ")</td>"
      + "<td class='form-inline'><div class='input-group'><button class='btn btn-primary moins-item' data-nom='" + panierArray[i].nom + "'>-</button>"
      + "<input type='number' min='1' class='form-control item-quantite' data-nom='" + panierArray[i].nom + "' value='" + panierArray[i].quantite + "'>"
      + "<button class='btn btn-primary plus-item' data-nom='" + panierArray[i].nom + "'>+</button></div></td>"
      + "<td><button class='btn btn-danger effacer-item' data-nom='" + panierArray[i].nom + "'>supp</button></td>"
      + " = "
      + "<td>" + panierArray[i].total + "</td>"
      +  "</tr>";
  }
  $('.show-panier').html(output);

$('.total-panier').html(((MonPanier.totalpanier())).toFixed(2));

  $('.total-panier-modal').html(MonPanier.totalpanier());
  $('.total-quantite').html(MonPanier.totalquantite());

}

$('.show-panier').on("click", ".effacer-item", function(event) {
  var nom = $(this).data('nom')
  MonPanier.enlever_produit_de_panier_tous(nom);
  afficherpanier();
})

$('.show-panier').on("click", ".moins-item", function(event) {
  var nom = $(this).data('nom')
  MonPanier.enlever_produit_de_panier(nom);
  afficherpanier();
})

$('.show-panier').on("click", ".plus-item", function(event) {
  var nom = $(this).data('nom')
  MonPanier.ajouter_produit_dans_panier(nom);
  afficherpanier();
})

$('.show-panier').on("change", ".item-quantite", function(event) {
   var nom = $(this).data('nom');
   var quantite = Number($(this).val());
  MonPanier.setquantiteForItem(nom, quantite);
  afficherpanier();
});

afficherpanier();
