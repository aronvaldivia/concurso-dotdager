import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
          


    <div className="min-h-screen   bg-zinc-900 pt-20" >

      
<div className='foto-redes'>
       
         
       <img src="" />
       </div> 
      
      <div className="max-w-7xl mx-auto px-4 py-16" >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Mis <span className="text-red-600">Redes</span>
        </h1>

        
        
        {/* Contact Info Cards */}
        
        <div className="grid md:grid-cols-3 gap-8 mb-20 h-40 "  >
          <div  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm grid md:grid-cols-2 " >
              
             <a href="https://discord.com/invite/4NFk6TamAB" className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-80 pt-5">
             <img 
                src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/69c11b2b-2ed2-05d4-7a4f-693f5173c76c.png "
                alt="Guitarist portrait"
                className="rounded-lg shadow-2xl flex content-center"
                
                width={100}
              />
             </a>

             <h3 className="text-4xl font-semibold mb-2 pt-10">Discord</h3>
            
            
            
          </div> 

          <div  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm grid md:grid-cols-2 " >
              
              <a href="https://www.instagram.com/dager.32/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-80 pt-5">
              <img 
                 src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/a3e0ca28-9a73-c0a8-d4d1-c6be25fdcd07.png "
                 alt="Guitarist portrait"
                 className="rounded-lg shadow-2xl "
                 
                 width={100}
               />
              </a>
 
              <h3 className="text-4xl font-semibold mb-2 pt-10 ">Instagram</h3>
            
             
             
           </div> 

           <div  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm grid md:grid-cols-2 " >
              
              <a href="https://www.youtube.com/@DotDager/videos" className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-80 ">
              <img 
                 src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/297d90df-fa44-7c9b-7045-882982c5b2f3.png "
                 alt="Guitarist portrait"
                 className="rounded-lg shadow-2xl flex content-center"
                 
                 width={100}
               />
              </a>
 
              <h3 className="text-4xl font-semibold mb-2 pt-10">YouTube</h3>
           
             
             
           </div> 

           <div  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm grid md:grid-cols-2 " >
              
              <a href="https://github.com/MarianoVilla" className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-80 pt-5">
              <img 
                 src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/894bdb59-75e2-09bb-23ac-ce5703ffa200.png"
                 alt="Guitarist portrait"
                 className="rounded-lg shadow-2xl flex content-center"
                 
                 width={100}
               />
              </a>
 
              <h3 className="text-4xl font-semibold mb-2 pt-10">GitHub</h3>
             
             
             
           </div> 

           <div  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm grid md:grid-cols-2 " >
              
              <a href="https://discord.com/invite/4NFk6TamAB" className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-80 pt-5">
              <img 
                 src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/7cc567a3-ff9c-fdcd-da2d-6faefff24947.png"
                 alt="Guitarist portrait"
                 className="rounded-lg shadow-2xl flex content-center"
                 
                 width={100}
               />
              </a>
              <h3 className="text-4xl font-semibold mb-2 pt-10">Twitch</h3>
             
                        
           </div> 
           <div  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm grid md:grid-cols-2 " >
              
              <a href="https://discord.com/invite/4NFk6TamAB" className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-80 pt-5">
              <img 
                 src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/b9f528a1-be27-b867-3b8d-69aa854696d0.png"
                 alt="Guitarist portrait"
                 className="rounded-lg shadow-2xl flex content-center"
                 
                 width={100}
               />
              </a>
 
              <h3 className="text-4xl font-semibold mb-2 pt-10">Spotify</h3>
           
                        
           </div> 

        </div>

       

        {/* Contact Form 
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={20} /> 
            </button>
          </form>  
        </div>*/}
      </div>
    </div>
  );
}