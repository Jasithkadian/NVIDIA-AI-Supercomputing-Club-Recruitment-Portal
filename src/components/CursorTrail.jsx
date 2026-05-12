import React, { useEffect } from 'react';

function CursorTrail() {
  useEffect(() => {
    let lastTime = 0;
    
    const onMouseMove = (e) => {
      if (Date.now() - lastTime < 40) return; // Spawn a dot every 40ms
      lastTime = Date.now();

      const dot = document.createElement('div');
      dot.style.position = 'fixed';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.width = '6px';
      dot.style.height = '6px';
      dot.style.borderRadius = '50%';
      dot.style.backgroundColor = '#76b900';
      dot.style.pointerEvents = 'none';
      dot.style.zIndex = '9998';
      dot.style.opacity = '0.6';
      dot.style.transform = 'translate(-50%, -50%)';
      dot.style.transition = 'opacity 0.4s ease-out';
      dot.style.boxShadow = '0 0 8px #76b900';
      
      document.body.appendChild(dot);
      
      // Trigger reflow then fade out
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          dot.style.opacity = '0';
        });
      });

      // Cleanup
      setTimeout(() => {
        dot.remove();
      }, 400);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
}

export default CursorTrail;
