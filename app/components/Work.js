// components/Work.js
import logo1 from '../../public/image/logo-1.png'
import logo2 from '../../public/image/logo-2.png'
import Image from 'next/image'

const Projects = () => {
    return (

      <div id='work' className="bg-white text-gray p-16">
        <h1 className="text-center text-6xl font-semibold mb-6">
            Work Experience
        </h1>
        <div className="container mx-auto grid grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="container mx-auto flex flex-col justify-around items-center">
          <div className=" flex flex-col justify-between items-center">
            <Image
              src={logo1} 
              alt="icon3"
              className="ml-4 object-cover h-full w-full mb-4"
            />
            <h2 className="text-2xl text-center font-semibold mb-4">September 2022- Present</h2>
           
            </div>
            <div className="mt-2 flex flex-col justify-between items-center">
            <Image
              src={logo2} 
              alt="icon3"
              className="ml-4 object-cover h-full w-full mb-4"
            />
            <h2 className="text-2xl text-center font-semibold mb-4">August 2017- May 2020</h2>
           
            </div>
           
          </div>
          
          {/* Right Column */}
          <div>
          
          <div className="flex flex-col justify-between items-center">
           
            <h2 className="w-2/3 text-2xl text-center font-semibold mb-4">Enterprise Business Development Associate</h2>
            
          
            <h4 className="text-xl text-center mb-4">
            I created strategic cadences to target fortune 500
companies and C-level executives alongside SAMs
and AEs on $1.5mln+ ARR deals.
In addition, I focused on the fintech and insurance
landscape to consult clients and customers on how
to leverage SAAS in their day-to-day business tasks
            </h4>
           
            <h2 className="w-2/3 text-2xl text-center font-semibold mb-4">    Assistant Undergraduate
Recruiter</h2>
        

<h4 className="text-xl text-center  mb-4">
            I assisted prospective students with inquiries
regarding admissions process by guiding them
through the application process
In addition, I conducted analysis of data entries in
Microsoft Excel to effectively target and recruit
top high school students in NYC.
            </h4>

            </div>
          
            </div>
          </div>
        </div>
      
    );
  };
  
  export default Projects;
  