import React, { useEffect, useRef } from 'react';

const colors = [
  '#FF1E56', '#FF9F1C', '#2EC4B6', '#E71D36', 
  '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#FF007F'
];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;
    this.size = Math.random() * 8 + 4;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.alpha = Math.random() * 0.5 + 0.1;
    this.life = 1;
    this.decay = Math.random() * 0.02 + 0.01;
    this.drag = 0.95;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.life -= this.decay;
    this.alpha = Math.max(0, this.life);
  }
  
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = this.size * 2;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function HoliOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createBurst = (x, y) => {
      for (let i = 0; i < 40; i++) {
        particles.push(new Particle(x, y));
      }
    };

    // Auto bursts
    const burstInterval = setInterval(() => {
      if (Math.random() > 0.5) return;
      
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.6); // Mostly upper part
      createBurst(x, y);
    }, 1500);

    // Initial burst
    createBurst(window.innerWidth / 2, window.innerHeight / 3);
    createBurst(window.innerWidth / 4, window.innerHeight / 4);
    createBurst((window.innerWidth * 3) / 4, window.innerHeight / 4);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
      
      particles = particles.filter(p => p.life > 0);
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      clearInterval(burstInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.8,
        mixBlendMode: 'screen',
      }}
      aria-hidden="true"
    />
  );
}
