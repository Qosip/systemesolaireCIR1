//
// Created by François on 28/06/2022.
//

#ifndef PROJETCIR1_GROUPE12_VECTEUR_H
#define PROJETCIR1_GROUPE12_VECTEUR_H

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct S_vecteur{
    //structure d'un vecteur qui servira pour la position, la vitesse et l'accélération
    double x;
    double y;
    double z;
}vecteur;

typedef struct S_point{
    vecteur r; //vecteur position
    vecteur v; //vecteur vitesse
    double t; //double temps
}p;

vecteur add(vecteur a, vecteur b);
vecteur sous(vecteur a, vecteur b);
vecteur multsca(vecteur a, int b);
double norme(vecteur a);
void moduleTest();
#endif //PROJETCIR1_GROUPE12_VECTEUR_H
