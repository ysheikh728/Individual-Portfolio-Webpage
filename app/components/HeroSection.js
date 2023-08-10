// components/HeroSection.js
import user_img from '../../public/image/prof.png'
import bf_img from '../../public/image/bg.png'
import Image from 'next/image'
const HeroSection = () => {
    return (
      <div id='home' className="relative bg-amber-50 text-black p-16">
        {/* Background lines */}
        <div className='w-4/6 container mx-40 flex justify-around items-center'>
              {/* Intro Text */}
          <h1 className="w-2/3 text-7xl font-semibold mb-2">
            Nice to meet you,
             I'm Yahya
          </h1>
          {/* Top Right Statement */}
          <h2 className="text-2xl ml-2 mt-20">
            A passion to Code and open endless doors!
          </h2>

        </div>

       
        
        <div className="container flex justify-center items-center mx-20 text-center z-10 p-16">

{/* Bottom Left Experience */}
<div className="text-2xl text-center ml-2 mb-2">
            2+ Years Experience
          </div>
      <div className="relative">
      {/* Background Image */}
      <Image
        src={bf_img} // Replace with your background image path
        alt="Background"
        className="w-2/3"
      />

      {/* Overlay with Image */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="p-4 rounded">
          <Image
            src={user_img} // Replace with your overlay image path
            alt="Overlay"
            className="w-2/3 h-2/3 object-cover"
          />
        </div>
      </div>
    </div> 
        
          {/* Bottom Right Position */}
          <div className="text-2xl text-center mr-40 mb-2">
           <h3> Senior Enterprises</h3>
           <h3> Bussiness development</h3>
           <h3> Associate</h3>
           

          </div>
          
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  