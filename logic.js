document.addEventListener('keydown', (event) => {
    if (event.key === " " || event.key === "ArrowUp") { 
      player.jump();
    }
  });