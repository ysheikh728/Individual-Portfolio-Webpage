// components/AboutSection.js
import Image from 'next/image'
import icon1 from '../../public/image/problem-icon.png'
import icon2 from '../../public/image/business-icon.png'
import icon3 from '../../public/image/software-icon.png'

const AboutSection = () => {
    return (
      <div id='about' className="bg-white text-gray-900 p-16">
        <div className="container mx-auto grid grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="container mx-auto flex flex-col justify-around items-center">
            <div className="w-2/3 bg-cyan-400 flex justify-between items-center px-8 py-4 rounded-full mb-4">
            <Image
              src={icon1} 
              alt="icon1"
              className="ml-4 object-cover h-20 w-20"
            />
            <h3 className='mr-4 text-xl text-center font-semibold'>Problem Solving</h3>
            </div>
            <div className="w-2/3 bg-cyan-400 flex justify-between items-center px-8 py-4 rounded-full mb-4">
            <Image
              src={icon2} 
              alt="icon3"
              className="ml-4 object-cover h-20 w-20"
            />
            <h3 className='mr-4 text-xl text-center font-semibold'>Bussiness development</h3>
            </div>
            <div className="w-2/3 bg-cyan-400 flex justify-between items-center px-8 py-4 rounded-full">
            <Image
              src={icon3} 
              alt="icon3"
              className="ml-4 object-cover h-20 w-20"
            />
            <h3 className='mr-4 text-xl text-center font-semibold'>Software development</h3>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <h2 className="text-5xl text-center font-semibold mb-4">Who Am I?</h2>
            <h4 className="text-xl text-center font-semibold mb-4">
            I am currently a Business Development
professional working in the market
intelligence and technology industry.
            </h4>
            <h4 className="text-xl text-center font-semibold mb-4">  
            With my extensive knowledge and work
in computer programming and software
engineering, I look forward to solving
the problems of the future.</h4>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;
  