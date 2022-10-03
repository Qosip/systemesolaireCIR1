//
// Created by François on 23/06/2022.
//

#include "calcul.h"

planete calculeuler(planete a, double m, double g,FILE* terre){
    //calcul avec la méthode d'euler
    double r = norme(a.traj.traject.r);
    double ax = ((-g*m)/pow(r,3)) * a.traj.traject.r.x;
    double ay = (-g*m)/pow(r,3) * a.traj.traject.r.y;
    double az = ((-g*m)/pow(r,3)) * a.traj.traject.r.z;
    a.traj.traject.r.x = a.traj.traject.r.x + a.traj.traject.v.x*DELTAT;
    a.traj.traject.r.y = a.traj.traject.r.y + a.traj.traject.v.y*DELTAT;
    a.traj.traject.r.z = a.traj.traject.r.z + a.traj.traject.v.z*DELTAT;
    a.traj.traject.v.x = a.traj.traject.v.x + ax*DELTAT;
    a.traj.traject.v.y = a.traj.traject.v.y + ay*DELTAT;
    a.traj.traject.v.z = a.traj.traject.v.z + az*DELTAT;
    a.traj.traject.t ++;
    //fprintf(terre, ",[[%lf],[%lf],[%lf]]\n", a.traj.traject.r.x,a.traj.traject.r.y,a.traj.traject.r.z);
    fprintf(terre, "[[%lf,%lf,%lf],[%lf,%lf,%lf],%lf]\n", a.traj.traject.r.x,a.traj.traject.r.y,a.traj.traject.r.z,a.traj.traject.v.x,a.traj.traject.v.y,a.traj.traject.v.z,a.traj.traject.t);
    return a;
}
planete calculeulerasymetrique(planete a, double m, double g,FILE* terre){
    //calcul avec la méthode d'euler asymétrique
    double r = norme(a.traj.traject.r);
    a.traj.traject.r.x = a.traj.traject.r.x + a.traj.traject.v.x*DELTAT;
    a.traj.traject.r.y = a.traj.traject.r.y + a.traj.traject.v.y*DELTAT;
    a.traj.traject.r.z = a.traj.traject.r.z + a.traj.traject.v.z*DELTAT;
    double ax = ((-g*m)/pow(r,3)) * a.traj.traject.r.x;
    double ay = (-g*m)/pow(r,3) * a.traj.traject.r.y;
    double az = ((-g*m)/pow(r,3)) * a.traj.traject.r.z;
    a.traj.traject.v.x = a.traj.traject.v.x + ax*DELTAT;
    a.traj.traject.v.y = a.traj.traject.v.y + ay*DELTAT;
    a.traj.traject.v.z = a.traj.traject.v.z + az*DELTAT;
    a.traj.traject.t ++;
    fprintf(terre, "[[%lf,%lf,%lf],[%lf,%lf,%lf],%lf]\n", a.traj.traject.r.x,a.traj.traject.r.y,a.traj.traject.r.z,a.traj.traject.v.x,a.traj.traject.v.y,a.traj.traject.v.z,a.traj.traject.t);
    //fprintf(terre, ",[[%lf],[%lf],[%lf]]\n", a.traj.traject.r.x,a.traj.traject.r.y,a.traj.traject.r.z);
    return a;
}
planete rungekuttaordre2(planete a, double m, double g,FILE* terre){
    //calcul avec la méthode de runge kutta d'ordre 2
    double r = norme(a.traj.traject.r);
    //k1r
    double k1rx = DELTAT * a.traj.traject.v.x;
    double k1ry = DELTAT * a.traj.traject.v.y;
    double k1rz = DELTAT * a.traj.traject.v.z;
    //k1v
    double k1vx = -DELTAT*((g*m)/pow(r,3))* a.traj.traject.r.x;
    double k1vy = -DELTAT*((g*m)/pow(r,3))* a.traj.traject.r.y;
    double k1vz = -DELTAT*((g*m)/pow(r,3))* a.traj.traject.r.z;
    //k2r
    double k2rx = DELTAT * (a.traj.traject.v.x+(k1vx/2));
    double k2ry = DELTAT * (a.traj.traject.v.y+(k1vy/2));
    double k2rz = DELTAT * (a.traj.traject.v.z+(k1vz/2));
    //k2v
    vecteur besoin;
    besoin.x = a.traj.traject.r.x+ (k1rx/2);
    besoin.y = a.traj.traject.r.y+ (k1ry/2);
    besoin.z = a.traj.traject.r.z+ (k1rz/2);
    r = norme(besoin);
    double k2vx = -DELTAT * ((g*m)/pow(r,3)) * (a.traj.traject.r.x + (k1rx/2)) ;
    double k2vy = -DELTAT * ((g*m)/pow(r,3)) * (a.traj.traject.r.y + (k1ry/2));
    double k2vz = -DELTAT * ((g*m)/pow(r,3)) * (a.traj.traject.r.z + (k1rz/2));
    a.traj.traject.r.x = a.traj.traject.r.x + k2rx;
    a.traj.traject.r.y = a.traj.traject.r.y + k2ry;
    a.traj.traject.r.z = a.traj.traject.r.z + k2rz;
    a.traj.traject.v.x = a.traj.traject.v.x + k2vx;
    a.traj.traject.v.y = a.traj.traject.v.y + k2vy;
    a.traj.traject.v.z = a.traj.traject.v.z + k2vz;
    a.traj.traject.t ++;
    fprintf(terre, "[[%lf,%lf,%lf],[%lf,%lf,%lf],%lf]\n", a.traj.traject.r.x,a.traj.traject.r.y,a.traj.traject.r.z,a.traj.traject.v.x,a.traj.traject.v.y,a.traj.traject.v.z,a.traj.traject.t);
    return a;
}