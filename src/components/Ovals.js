// src/components/Ovals.js
import React, { useEffect, useState } from 'react';

const Ovals = () => {
  const initialOvals = Array.from({ length: 10 }).map(() => {
    const size = Math.random() * 20 + 40; // Random size between 20 and  40px
    return {
      position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
      velocity: { vx: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 1 + 0.1), vy: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.5 + 0.1) }, // Random speed
      rotation: 0,
      size: size, // Use the same size for width and height
    };
  });

  const [ovals, setOvals] = useState(initialOvals);

  useEffect(() => {
    const moveOvals = () => {
      setOvals(prevOvals => 
        prevOvals.map(oval => {
          let newX = oval.position.x + oval.velocity.vx;
          let newY = oval.position.y + oval.velocity.vy;

          // Check for collision with the right or left edge
          if (newX <= 0 || newX >= window.innerWidth - oval.size) {
            oval.velocity.vx = -oval.velocity.vx; // Reverse x direction
            newX = Math.max(0, Math.min(newX, window.innerWidth - oval.size)); // Keep within bounds
          }
          // Check for collision with the top or bottom edge
          if (newY <= 0 || newY >= window.innerHeight - oval.size) {
            oval.velocity.vy = -oval.velocity.vy; // Reverse y direction
            newY = Math.max(0, Math.min(newY, window.innerHeight - oval.size)); // Keep within bounds
          }

          // Update position and rotation
          return {
            position: { x: newX, y: newY },
            velocity: oval.velocity,
            rotation: oval.rotation + 5, // Increment rotation
            size: oval.size,
          };
        })
      );
    };

    const interval = setInterval(moveOvals, 20); // Move every 20 milliseconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // No dependencies, run once on mount

  return (
    <>
      {ovals.map((oval, index) => (
        <div 
          key={index} 
          className="oval" 
          style={{ 
            transform: `translate(${oval.position.x}px, ${oval.position.y}px) rotate(${oval.rotation}deg)`,
            position: 'fixed',
            width: `${oval.size}px`, // Use the same size for width
            height: `${oval.size}px`, // Use the same size for height
            backgroundColor: `#FDD140CC`, // Color of the circle
            borderRadius: '50%', // Make it a circle
            pointerEvents: 'none', // Prevent interaction
          }} 
        ></div>
      ))}
    </>
  );
}

export default Ovals;