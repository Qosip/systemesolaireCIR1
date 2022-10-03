//
// Created by François on 23/06/2022.
//

#ifndef PROJETCIR1_GROUPE12_CALCUL_H
#define PROJETCIR1_GROUPE12_CALCUL_H

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define NBPOINT 60237
#define DELTAT  86400//86400s donc 24h
#include "Vecteur.h"
#include "Init.h"
#include "energie.h"

planete calculeuler(planete a, double m, double g,FILE* terre);
planete calculeulerasymetrique(planete a, double m, double g,FILE* terre);
planete rungekuttaordre2(planete a, double m, double g,FILE* terre);

#endif //PROJETCIR1_GROUPE12_CALCUL_H
