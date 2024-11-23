import React from 'react';
import VideoSlider from '../components/VideoSlider';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/6d854443-432b-ca33-2c4c-2c6efffe689b.jpg"
            alt="Guitarist performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center">
          
          <div className='container-proyecto flex justify-center items-cente py-10'>
          <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/c6af8287-16b2-b3bc-1131-3d3dbdda4f9d.png"
                  className="profe-image w-200 h-30 flex justify-center items-center"
                />
                </div>
          <p className="text-xl md:text-4xl text-gray-200 " >
            Creador de contenido - programador y amante de los pepinos  
            

          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ultimos <span className="text-red-600">Videos</span>
          </h2>
          <VideoSlider />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative glow-effect">
              <img
                src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/7076337d-b9de-e992-e77d-619f4323ec9f.png"
                alt="Guitarist portrait"
                className="rounded-lg shadow-2xl floating-animation"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Acerca <span className="text-red-600">de mi</span>
              </h2>
              <p className="text-gray-300 mb-6 text-xl" >
              Soy un creador de contenido que Le encanta
               la programación, los gatos, las guitarras,
              los pepinillos y la filosofía.

              </p>
              <p className="text-gray-300 text-xl" >
                <p>no te saltes y lee compledo chupa p.. </p>
                Creo contenido dedicado a la programacion , en mis ratos libres me gusta 
                tocar la guitarra y hacerme el boludo.

              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}