'use client';

import { useEffect, useRef } from 'react';

const SplineModel = ({ splineUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let app;
    async function loadSpline() {
      const { Application } = await import('@splinetool/runtime');
      app = new Application(canvasRef.current);
      app.load(splineUrl);
    }

    loadSpline();

    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, [splineUrl]);

  // Fullscreen style for the canvas
  const splineStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1,
  };

  return <canvas ref={canvasRef} style={splineStyle}></canvas>;
};

export default SplineModel;

