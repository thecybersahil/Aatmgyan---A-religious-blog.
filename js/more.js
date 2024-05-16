


<script id="messenger-widget-b" src="https://cdn.botpenguin.com/website-bot.js" defer>6646240ecfd9270cd3cf8761,66462338b820619917c818f0</script>

 
 function evtEllipse(info) {
    info.nextElementSibling.classList.toggle('more');
    info.classList.toggle('more');
  }
  function spanEllipse(info) {
    info.classList.toggle('more');
    info.previousElementSibling.classList.toggle('more')
  }

  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.postcard');
  
    cards.forEach(card => {
      // Generate random color for each card
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      card.style.backgroundColor = randomColor;    
  
      card.addEventListener('mouseover', function() {
        // Generate random glow color
        const glowColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        card.style.boxShadow = `0 0 20px ${glowColor}, 0 0 40px ${glowColor}, 0 0 80px ${glowColor}`;
      });
  
      card.addEventListener('mouseout', function() {
        card.style.boxShadow = 'none';
      });
    });
  });



    
