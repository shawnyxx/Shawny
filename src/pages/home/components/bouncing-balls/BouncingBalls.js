import React, { useRef, useEffect } from 'react';
import './BouncingBalls.css';

class Ball {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(canvasWidth, canvasHeight) {
        if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvasHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

const Canvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const balls = [];
        const numBalls = 10;

        for (let i = 0; i < numBalls; i++) {
            const radius = 15;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 4;
            const dy = (Math.random() - 0.5) * 4;
            const color = 'white';
            balls.push(new Ball(x, y, dx, dy, radius, color));
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            balls.forEach(ball => {
                ball.update(canvas.width, canvas.height);
                ball.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return <canvas ref={canvasRef} />;
};

function BouncingBalls() {
    return (
        <div>
            <Canvas />
        </div>
    );
}

export default BouncingBalls;