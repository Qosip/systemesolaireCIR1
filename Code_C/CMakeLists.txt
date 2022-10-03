cmake_minimum_required(VERSION 3.18)
project(projetCIR1_groupe12 C)

set(CMAKE_C_STANDARD 99)

add_executable(projetCIR1_groupe12 main.c calcul.c calcul.h Vecteur.c Vecteur.h Init.c Init.h energie.c energie.h)
target_link_libraries(projetCIR1_groupe12 m)