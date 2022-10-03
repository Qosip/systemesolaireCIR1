#include "calcul.h"

int main() {
    //Le main crée toutes les planete et appelle les différentes fonctions pour les mettre dans le fichier json
    //moduleTest(); //Test des opérations de vecteurs de base
    double Msoleil = 1.989*pow(10,30);
    double G = 6.674184*pow(10,-11);
    double ep;
    double ec;
    double e;
    double tab[2];
    tab[0] = 0;
    tab[1] = 0;
    //printf("%lf", Msoleil); // test d'affichage de double (la valeur n'est etrangement pas exacte, des nombre se rajoutent)
    //printf("\n%.17lf", G);
    ////////////////////////////////////////////////////////  EULER  //////////////////////////////////////////////////////////////////
    // Création de la terre puis calcul euler
    constante Terre;
    Terre.demigrandaxe = 149598023000;
    Terre.excentricite = 0.01671022;
    Terre.masse = 5.9*pow(10, 24);
    Terre.perihelie = perihelie(Terre.demigrandaxe,Terre.excentricite);
    printf("%lf", Terre.perihelie);
    Terre.vinit = vitesseinit(Terre.demigrandaxe,Terre.excentricite, G, Msoleil);
    FILE * terre = fopen("planet.json", "w+"); //Création puis ouverture du fichier
    if ( terre == NULL ) {
        printf( "Le fichier ne peut être ouvert\n");
        exit(0);
    }
    fprintf(terre,"{\"eartheuler\" : [[");
    planete terreinit = init(Terre,terre);
    planete pourterre = terreinit;
    for (int p=0; p<NBPOINT; p++){
        /*ep = energiepotentielle(pourterre, G, Msoleil); // essaye de calcul d'energie pour la Terre
        ec = energiecinetique(pourterre);
        e = energietotale(ep, ec);
        tab[0] = tab[1];
        tab[1] = e;
        if (tab[0]!=0){
            if(tab[0]!=tab[1]){
                printf("Energie non conservée %d\n", e);
            }
            else{
                printf("Energie conservée %d\n", e);
            }
        }*/
        fprintf(terre,",");
        pourterre = calculeuler(pourterre, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Mercure puis calcul euler
    constante Mercure;
    Mercure.demigrandaxe = 57909050000;
    Mercure.excentricite = 0.20563069;
    Mercure.masse = 5.9*pow(10, 24);
    Mercure.perihelie = perihelie(Mercure.demigrandaxe,Mercure.excentricite);
    printf("\n%lf", Mercure.perihelie);
    Mercure.vinit = vitesseinit(Mercure.demigrandaxe,Mercure.excentricite, G, Msoleil);
    fprintf(terre,",\"mercuryeuler\" : [[");
    planete Mercureinit = init(Mercure,terre);
    planete pourMercure = Mercureinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourMercure = calculeuler(pourMercure, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Mars puis calcul euler
    constante Mars;
    Mars.demigrandaxe = 227939200000;
    Mars.excentricite = 0.09341233;
    Mars.masse = 6.39*pow(10, 23);
    Mars.perihelie = perihelie(Mars.demigrandaxe,Mars.excentricite);
    printf("\n%lf", Mars.perihelie);
    Mars.vinit = vitesseinit(Mars.demigrandaxe,Mars.excentricite, G, Msoleil);
    fprintf(terre,",\"marseuler\" : [[");
    planete Marsinit = init(Mars,terre);
    planete pourMars = Marsinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourMars = calculeuler(pourMars, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Venus puis calcul euler
    constante Venus;
    Venus.demigrandaxe = 108208475000;
    Venus.excentricite = 0.00677323;
    Venus.masse = 4.867 *pow(10, 24);
    Venus.perihelie = perihelie(Venus.demigrandaxe,Venus.excentricite);
    printf("\n%lf", Venus.perihelie);
    Venus.vinit = vitesseinit(Venus.demigrandaxe,Venus.excentricite, G, Msoleil);
    fprintf(terre,",\"venuseuler\" : [[");
    planete Venusinit = init(Venus,terre);
    planete pourVenus = Venusinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourVenus = calculeuler(pourVenus, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Jupiter puis calcul euler
    constante Jupiter;
    Jupiter.demigrandaxe = 778340821000;
    Jupiter.excentricite = 0.04839266;
    Jupiter.masse = 1.898 *pow(10, 27);
    Jupiter.perihelie = perihelie(Jupiter.demigrandaxe,Jupiter.excentricite);
    printf("\n%lf", Jupiter.perihelie);
    Jupiter.vinit = vitesseinit(Jupiter.demigrandaxe,Jupiter.excentricite, G, Msoleil);
    fprintf(terre,",\"jupitereuler\" : [[");
    planete Jupiterinit = init(Jupiter,terre);
    planete pourJupiter = Jupiterinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourJupiter = calculeuler(pourJupiter, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Saturne puis calcul euler
    constante Saturne;
    Saturne.demigrandaxe = 1426666422000;
    Saturne.excentricite = 0.05415060;
    Saturne.masse = 1.898 *pow(10, 27);
    Saturne.perihelie = perihelie(Saturne.demigrandaxe,Saturne.excentricite);
    printf("\n%lf", Saturne.perihelie);
    Saturne.vinit = vitesseinit(Saturne.demigrandaxe,Saturne.excentricite, G, Msoleil);
    fprintf(terre,",\"saturneeuler\" : [[");
    planete Saturneinit = init(Saturne,terre);
    planete pourSaturne = Saturneinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourSaturne = calculeuler(pourSaturne, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Uranus puis calcul euler
    constante Uranus;
    Uranus.demigrandaxe = 2870658186000;
    Uranus.excentricite = 0.04716771;
    Uranus.masse = 8.681 *pow(10, 25);
    Uranus.perihelie = perihelie(Uranus.demigrandaxe,Uranus.excentricite);
    printf("\n%lf", Uranus.perihelie);
    Uranus.vinit = vitesseinit(Uranus.demigrandaxe,Uranus.excentricite, G, Msoleil);
    fprintf(terre,",\"uranuseuler\" : [[");
    planete Uranusinit = init(Uranus,terre);
    planete pourUranus = Uranusinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourUranus = calculeuler(pourUranus, Msoleil, G,terre);
    }
    fprintf(terre,"]");
    // Création de Neptune puis calcul euler
    constante Neptune;
    Neptune.demigrandaxe = 4498396441000;
    Neptune.excentricite = 0.00858587;
    Neptune.masse = 8.681 *pow(10, 25);
    Neptune.perihelie = perihelie(Neptune.demigrandaxe,Neptune.excentricite);
    printf("\n%lf", Neptune.perihelie);
    Neptune.vinit = vitesseinit(Neptune.demigrandaxe,Neptune.excentricite, G, Msoleil);
    fprintf(terre,",\"neptuneeuler\" : [[");
    planete Neptuneinit = init(Neptune,terre);
    planete pourNeptune = Neptuneinit;
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourNeptune = calculeuler(pourNeptune, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    ////////////////////////////////////////////////////////  EULER ASYMETRIQUE //////////////////////////////////////////////////////////////////
    // Calcul de la terre euler-asymétrique
    fprintf(terre,"\"earth-as\" : [[");
    init(Terre,terre);
    pourterre = terreinit;
    tab[0] = 0;
    tab[1] = 0;
    for (int p=0; p<NBPOINT; p++){
        /*
        ep = energiepotentielle(pourterre, G, Msoleil); // essaye de calcul d'energie pour la Terre
        ec = energiecinetique(pourterre);
        e = energietotale(ep, ec);
        tab[0] = tab[1];
        tab[1] = e;
        if (tab[0]!=0){
            if(tab[0]!=tab[1]){
                printf("Energie non conservée %d    %lf / %lf\n", e, tab[0],tab[1]);
            }
            else{
                printf("Energie conservée %d    %lf / %lf\n", e, tab[0],tab[1]);
            }
        }
        */
        fprintf(terre,",");
        pourterre = calculeulerasymetrique(pourterre, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Mercure euler-asymétrique
    pourMercure = Mercureinit;
    fprintf(terre,"\"mercury-as\" : [[");
    init(Mercure,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourMercure = calculeulerasymetrique(pourMercure, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Mars euler-asymétrique
    pourMars = Marsinit;
    fprintf(terre,"\"mars-as\" : [[");
    init(Mars,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourMars = calculeulerasymetrique(pourMars, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Venus euler-asymétrique
    pourVenus = Venusinit;
    fprintf(terre,"\"venus-as\" : [[");
    init(Venus,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourVenus = calculeulerasymetrique(pourVenus, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Jupiter euler-asymétrique
    pourJupiter = Jupiterinit;
    fprintf(terre,"\"jupiter-as\" : [[");
    init(Jupiter,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourJupiter = calculeulerasymetrique(pourJupiter, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Saturne euler-asymétrique
    pourSaturne = Saturneinit;
    fprintf(terre,"\"saturne-as\" : [[");
    init(Saturne,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourSaturne = calculeulerasymetrique(pourSaturne, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Uranus euler-asymétrique
    pourUranus = Uranusinit;
    fprintf(terre,"\"uranus-as\" : [[");
    init(Uranus,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourUranus = calculeulerasymetrique(pourUranus, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de neptune euler-asymétrique
    pourNeptune = Neptuneinit;
    fprintf(terre,"\"neptune-as\" : [[");
    init(Neptune,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourNeptune = calculeulerasymetrique(pourNeptune, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    ////////////////////////////////////////////////////////  RUNGE KUTTA ORDRE 2 //////////////////////////////////////////////////////////////////
    // Calcul de la terre rk2
    fprintf(terre,"\"earth-rk2\" : [[");
    init(Terre,terre);
    pourterre = terreinit;
    tab[0] = 0;
    tab[1] = 0;
    for (int p=0; p<NBPOINT; p++){
        /*
        ep = energiepotentielle(pourterre, G, Msoleil); // essaye de calcul d'energie pour la Terre
        ec = energiecinetique(pourterre);
        e = energietotale(ep, ec);
        tab[0] = tab[1];
        tab[1] = e;
        if (tab[0]!=0){
            if(tab[0]!=tab[1]){
                printf("Energie non conservée %d    %lf / %lf\n", e, tab[0],tab[1]);
            }
            else{
                printf("Energie conservée %d    %lf / %lf\n", e, tab[0],tab[1]);
            }
        }
        */
        fprintf(terre,",");
        pourterre = rungekuttaordre2(pourterre, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Mercure rk2
    pourMercure = Mercureinit;
    fprintf(terre,"\"mercury-rk2\" : [[");
    init(Mercure,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourMercure = rungekuttaordre2(pourMercure, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Mars rk2
    pourMars = Marsinit;
    fprintf(terre,"\"mars-rk2\" : [[");
    init(Mars,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourMars = rungekuttaordre2(pourMars, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Venus rk2
    pourVenus = Venusinit;
    fprintf(terre,"\"venus-rk2\" : [[");
    init(Venus,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourVenus = rungekuttaordre2(pourVenus, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Jupiter rk2
    pourJupiter = Jupiterinit;
    fprintf(terre,"\"jupiter-rk2\" : [[");
    init(Jupiter,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourJupiter = rungekuttaordre2(pourJupiter, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Saturne rk2
    pourSaturne = Saturneinit;
    fprintf(terre,"\"saturne-rk2\" : [[");
    init(Saturne,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourSaturne = rungekuttaordre2(pourSaturne, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de Uranus rk2
    pourUranus = Uranusinit;
    fprintf(terre,"\"uranus-rk2\" : [[");
    init(Uranus,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourUranus = rungekuttaordre2(pourUranus, Msoleil, G,terre);
    }
    fprintf(terre,"],");
    // Calcul de neptune rk2
    pourNeptune = Neptuneinit;
    fprintf(terre,"\"neptune-rk2\" : [[");
    init(Neptune,terre);
    for (int p=0; p<NBPOINT; p++){
        fprintf(terre,",");
        pourNeptune = rungekuttaordre2(pourNeptune, Msoleil, G,terre);
    }
    /// fin du fichier
    fprintf(terre,"]}");
    //fprintf(terre,"]");
    fclose(terre); //fermeture du fichier
    return 0;
}