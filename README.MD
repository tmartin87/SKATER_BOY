# SKATER BOY README

## Descripción

Skater boy es un sencillo juego de plataformas en 2D, inspirado en el famoso juego del dinosaurio de Google Chrome que aparece cuando no hay conexión a Internet. En este juego, el jugador controla a un chico skater que patina sin parar por el parque, y debe saltar sobre obstáculos para evitar colisionar con ellos. A medida que el tiempo avanza, la velocidad del juego aumenta, haciendo que sea más desafiante.


## Características

- Control sencillo: Un solo botón para saltar.
- Gráficos minimalistas: Estilo retro en pixel art.
- Aumento progresivo de dificultad: El skater patina cada vez contra mas obstáculos.
- Obstáculos variados: policias, ancianas y perros.
- Marcador de puntuación: La puntuación aumenta cuanto más tiempo sobrevivas.
- Modo de juego infinito: Patina todo lo que puedas sin chocar con un obstáculo.


## Controles

- Espacio: Saltar
- Flecha hacia arriba: Salto alternativo (opcional)
- Flecha hacia abajo: Agacharse (si se implementa en versiones futuras)


## Reglas del juego

1. El skater comienza patinando automáticamente.
2. El jugador debe saltar sobre los obstáculos para evitar chocar.
3. El juego termina cuando el skater colisiona con un obstáculo.
4. La puntuación se calcula en función del tiempo que el jugador ha logrado evitar los obstáculos.
5. El juego se vuelve más difícil a medida que el skater patina.


## Dependencias

Este juego está desarrollado utilizando las siguientes tecnologías:

- HTML para la estructura web del juego.
- JavaScript usando opp (clases) para la lógica del juego.
- CSS para los estilos visuales.





# ORGANIZACIÓN DE OPP (CLASES)

Dividir el juego en varias clases de JavaScript ayuda a mantener el código organizado, modulable y más fácil de mantener. Aquí explico la estructura del juego usando clases:


## Clase Game

Esta será la clase principal que gestionará la información bascica del juego, la puntuación del jugador, el area del juego y el tiempo.


## Clase Player

Esta clase es para toda la información que necesitamos del jugador, posicion, velocidad, direccion, y dimensiones. En esta clase tendremos el metodo move() donde indicaremos como se movera el jugador.

## Clase Enemy

Esta clase sera donde pondremos la informacion de los obstaculos que se ira encontrando el Skater, posicion, movimineto y direccion.

## Clase Logic

En esta clase tendremos toda la informacion relacionada con la logica del juego, como actuan los controles, y como interactuan el Player con los Enemies.
