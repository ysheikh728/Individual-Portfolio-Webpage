// components/Skills.js
import htm from '../../public/image/html.png'
import cs from '../../public/image/css.png'
import js from '../../public/image/js.png'
import sql from '../../public/image/sql.png'
import Image from 'next/image'

const Skills = () => {
    return (

      <div id='skills' className="bg-amber-50 text-black p-16">
        <h1 className="text-center text-6xl font-semibold mb-6">
            Skills
        </h1>
        <div className="w-4/5 mx-auto container flex flex-wrap gap-8 items-center">
         
        <div className="w-80 bg-green-400 flex justify-between items-center px-8 py-4 rounded-full mb-4">
           
            <h3 className='mr-4 text-xl text-center font-semibold'>HTML</h3>
            <Image
              src={htm} 
              alt="icon1"
              className="ml-4 object-cover h-20 w-20"
            />
            </div>
            <div className="w-80 bg-green-400 flex justify-between items-center px-8 py-4 rounded-full mb-4">
           
           <h3 className='mr-4 text-xl text-center font-semibold'>CSS3</h3>
           <Image
             src={cs} 
             alt="icon1"
             className="ml-4 object-cover h-20 w-20"
           />
           </div>
           <div className="w-80 bg-green-400 flex justify-between items-center px-8 py-4 rounded-full mb-4">
           
           <h3 className='mr-4 text-xl text-center font-semibold'>JavaScript</h3>
           <Image
             src={js} 
             alt="icon1"
             className="ml-4 object-cover h-20 w-20"
           />
           </div>
           <div className="ml-80 w-80 bg-green-400 flex justify-between items-center px-8 py-4 rounded-full mb-4">
           
           <h3 className='mr-4 text-xl text-center font-semibold'>SQL</h3>
           <Image
             src={sql} 
             alt="icon1"
             className="ml-4 object-cover h-20 w-20"
           />
           </div>
        
          </div>
        </div>
      
    );
  };
  
  export default Skills;
  