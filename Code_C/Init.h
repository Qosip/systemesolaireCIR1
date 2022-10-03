//
// Created by François on 28/06/2022.
//

#ifndef PROJETCIR1_GROUPE12_INIT_H
#define PROJETCIR1_GROUPE12_INIT_H

#include "Vecteur.h"

typedef struct S_trajectoire{
    p traject;
}trajectoire;

typedef struct S_planete{
    char nom[25];
    double masse;
    trajectoire traj;
    double perihelie;
}planete;

typedef struct S_constante{
    char nom[25];
    double demigrandaxe;
    double excentricite;
    double perihelie;
    double masse;
    double vinit;
}constante;

double perihelie(double dmga, double excen);
double vitesseinit(double dmga, double excen, double G, double M);
planete init(constante b, FILE* terre);
#endif //PROJETCIR1_GROUPE12_INIT_H
