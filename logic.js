document.addEventListener('keydown', (event) => {
    if (event.key === ' ') { 
      if (!player.classList.contains('saltando')) {
        player.classList.add('saltando');
  
        
        setTimeout(() => {
          player.classList.remove('saltando');
        }, 500); 
      }
    }
  });