import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      stars = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.02 + 0.01,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawStar = (star: Star, time: number) => {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
      const currentOpacity = star.opacity * twinkle;

      // Glow effect
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, star.size * 3
      );
      gradient.addColorStop(0, `rgba(255, 250, 240, ${currentOpacity})`);
      gradient.addColorStop(0.3, `rgba(200, 220, 255, ${currentOpacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(200, 220, 255, 0)');

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Slow upward drift
        star.y -= star.speed;
        star.x += Math.sin(time * 0.0001 + star.twinklePhase) * 0.1;

        // Wrap around
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < -10) star.x = canvas.width + 10;
        if (star.x > canvas.width + 10) star.x = -10;

        drawStar(star, time);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;
