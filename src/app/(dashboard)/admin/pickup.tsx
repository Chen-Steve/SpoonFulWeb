import React from 'react';

const PickUp: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <main>
        <h1 className="text-2xl font-bold text-text-color-custom">spoonful</h1>
        <section className="my-8 p-8 border-dashed border-2 border-border rounded">
          <div className="upload-area mb-6">
            <button className="upload-button w-12 h-12 bg-input border-2 border-border rounded-full text-lg cursor-pointer flex items-center justify-center">+</button>
            <p className="text-muted-foreground">please upload a picture...</p>
          </div>
          <div className="questions-area">
            <p className="mb-2 font-bold text-text-color-custom">... and answer some questions</p>
            <ul>
              <li className="bg-muted p-2 rounded mb-2">1. ___________________</li>
              <li className="bg-muted p-2 rounded mb-2">2. ___________________</li>
              <li className="bg-muted p-2 rounded mb-2">3. ___________________</li>
            </ul>
          </div>
        </section>
        <footer>
          <p className="font-bold">thank you.</p>
        </footer>
      </main>
    </div>
  );
};

export default PickUp;