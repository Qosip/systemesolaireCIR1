//
// Created by François on 28/06/2022.
//

#include "Init.h"



double perihelie(double dmga, double excen){
    //Calcul la périhélie
    double r = dmga * ( 1 - excen );
    return r;
}
double vitesseinit(double dmga, double excen, double G, double M){
    //Calcul la vitesse initiale
    double vitinit = sqrt((G*M*(1+excen))/(dmga*(1-excen)));
    return vitinit;
}
planete init(constante b, FILE* terre){
    //Calcul la premiere position et vitesse de la planete
    planete cop;
    cop.masse = b.masse;
    cop.perihelie = b.perihelie;
    cop.traj.traject.r.x = b.perihelie;
    cop.traj.traject.r.y = 0;
    cop.traj.traject.r.z = 0;
    cop.traj.traject.v.x = 0;
    cop.traj.traject.v.y = b.vinit;
    cop.traj.traject.v.z = 0;
    cop.traj.traject.t = 0;
    //fprintf(terre,"[");
    //fprintf(terre, "[%lf],[%lf],[%lf]]\n", cop.traj.traject.r.x,cop.traj.traject.r.y,cop.traj.traject.r.z);
    fprintf(terre, "[%lf,%lf,%lf],[%lf,%lf,%lf],%lf]\n", cop.traj.traject.r.x,cop.traj.traject.r.y,cop.traj.traject.r.z,cop.traj.traject.v.x,cop.traj.traject.v.y,cop.traj.traject.v.z,cop.traj.traject.t);
    return cop;
}
