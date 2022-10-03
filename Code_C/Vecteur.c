//
// Created by François on 28/06/2022.
//
#include "Vecteur.h"
vecteur add(vecteur a, vecteur b){
    //Calcul de l'addition de deux vecteurs
    vecteur c;
    c.x = a.x + b.x;
    c.y = a.y + b.y;
    c.z = a.z + b.z;
    return c;
}
vecteur sous(vecteur a, vecteur b){
    //Calcul d'une soustraction de deux vecteurs
    vecteur c;
    c.x = a.x - b.x;
    c.y = a.y - b.y;
    c.z = a.z - b.z;
    return c;
}
vecteur multsca(vecteur a, int b){
    //calcul d'une multiplication par un scalaire
    vecteur c;
    c.x = a.x * b;
    c.y = a.y * b;
    c.z = a.z * b;
    return c;
}
double norme(vecteur a){
    //Calcul d'une norme
    double b = sqrt(pow(a.x,2)+pow(a.y,2)+pow(a.z,2));
    return b;
}

void moduleTest(){
    //fonction de test sur les vecteurs
    vecteur un, deux, trois; //création de trois vecteurs
    //initialisation des 3 vecteurs
    un.x = 1;
    un.y = 2;
    un.z = 3;
    deux.x = 7;
    deux.y = 4;
    deux.z = 5;
    trois.x = 6;
    trois.y = 3;
    trois.z = 1;
    vecteur res = add(un,deux);
    vecteur resdeux = sous(deux,trois);
    vecteur restrois = multsca(un,3);
    double resquatre = norme(trois);
    printf("Test :\n\nVecteur 1 + vecteur 2 : (%lf, %lf, %lf)\nVecteur 2 - vecteur 3 : (%lf, %lf, %lf)\nVecteur 1 scalaire 3 :(%lf, %lf, %lf)\nNorme du vecteur 3 : (%lf)",res.x,res.y,res.z, resdeux.x, resdeux.y, resdeux.z, restrois.x, restrois.y, restrois.z, resquatre);
}

