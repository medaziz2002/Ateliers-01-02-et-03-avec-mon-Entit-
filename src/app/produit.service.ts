import { Injectable } from '@angular/core';
import { Produit } from './model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[];
  produit! : Produit;
  constructor() {
   //un tableau de Produit

this.produits = [
  {idProduit : 1, nomProduit : "Iphone 15", prixProduit : 3000, dateCreation : new Date("11/14/2022"), societe : "Apple"},
  {idProduit : 2, nomProduit : "Snmsung A21S", prixProduit : 750, dateCreation : new Date("10/17/2019"),societe : "Snmsung"},
  {idProduit : 3, nomProduit :"Nokia", prixProduit : 900, dateCreation : new Date("02/19/2002") ,societe : "Nokia"}
];

}
listeProduits():Produit[] {
  return this.produits;
}
ajouterProduit( prod: Produit){
this.produits.push(prod);
}
supprimerProduit( prod: Produit){
  //supprimer le produit prod du tableau produits
  const index = this.produits.indexOf(prod, 0);
  if (index > -1) {
  this.produits.splice(index, 1);
  }
}
consulterProduit(id:number): Produit{
  this.produit = this.produits.find(p => p.idProduit == id)!;
  return this.produit;
}
updateProduit(p:Produit)
{
// console.log(p);
this.supprimerProduit(p);
this.ajouterProduit(p);
}
}
