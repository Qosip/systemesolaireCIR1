//
// Created by François on 28/06/2022.
//

#include "energie.h"
double energiepotentielle(planete a, double g, double m){
    //Calcul l'énergie potentielle
    double e = (g * a.masse * m)/ pow(norme(a.traj.traject.r),2);
    return e;
}
double energiecinetique(planete a){
    //Calcul l'énergie cinétique
    double e = a.masse* pow(norme(a.traj.traject.v),2);
    return e;
}
double energietotale(double ep, double ec){
    //Calcul l'énergie totale
    double e = ep + ec;
    return e;
}