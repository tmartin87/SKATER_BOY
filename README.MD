SKATER BOY README
Descripción
Skater Boy es un sencillo juego de plataformas en 2D, inspirado en el famoso juego del dinosaurio de Google Chrome que aparece cuando no hay conexión a Internet. En este juego, el jugador controla a un chico skater que patina sin parar por el parque y debe saltar sobre obstáculos para evitar colisionar con ellos. A medida que el tiempo avanza, la velocidad del juego aumenta, haciendo que sea más desafiante.

Características
Control sencillo: Un solo botón para saltar.

Gráficos minimalistas: Estilo retro en pixel art.

Aumento progresivo de dificultad: El skater patina cada vez contra más obstáculos.

Obstáculos variados: Policías, ancianas y perros.

Marcador de puntuación: La puntuación aumenta cuanto más tiempo sobrevivas.

Modo de juego infinito: Patina todo lo que puedas sin chocar con un obstáculo.

Controles
Espacio: Saltar

Flecha hacia arriba: Salto alternativo (opcional)

Flecha hacia abajo: Agacharse (si se implementa en versiones futuras)

Reglas del juego
El skater comienza patinando automáticamente.

El jugador debe saltar sobre los obstáculos para evitar chocar.

El juego termina cuando el skater colisiona con un obstáculo.

La puntuación se calcula en función del tiempo que el jugador ha logrado evitar los obstáculos.

El juego se vuelve más difícil a medida que el skater avanza.

Dependencias
Este juego está desarrollado utilizando las siguientes tecnologías:

HTML para la estructura web del juego.

JavaScript usando OOP (clases) para la lógica del juego.

CSS para los estilos visuales.

ORGANIZACIÓN DE OOP (CLASES)
Dividir el juego en varias clases de JavaScript ayuda a mantener el código organizado, modular y más fácil de mantener. Aquí explico la estructura del juego usando clases:

Clase Game
Esta será la clase principal que gestionará la información básica del juego, la puntuación del jugador, el área del juego y el tiempo.

Clase Player
Esta clase contiene toda la información que necesitamos del jugador: posición, velocidad, dirección y dimensiones. En esta clase tendremos diferentes métodos como jump() o stop(), donde indicamos cómo salta el jugador y cuándo se detiene.

Clase Enemy
Esta clase contendrá la información de los obstáculos que se irá encontrando el skater: posición, movimiento y dirección. En ella tendremos métodos como move() o stop(), donde se indica cómo se mueve el enemigo y cuándo se detiene.

Clase Logic
En esta clase estará toda la información relacionada con la lógica del juego: cómo actúan los controles y cómo interactúan el Player con los Enemies.
