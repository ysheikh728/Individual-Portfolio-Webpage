// components/Project.js
import icon3 from '../../public/image/database.png'
import Image from 'next/image'

const Projects = () => {
    return (

      <div id='projects' className="bg-amber-50 text-black p-16">
        <h1 className="text-center text-6xl font-semibold mb-4">
            Projects
        </h1>
        <div className="container mx-auto grid grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="container mx-auto flex flex-col justify-around items-center">
          <h2 className="w-2/3 text-center text-4xl font-semibold mb-4">
            Bank DataBase Management System
        </h2>  
        <ul className='list-disc p-4'>
<li className='text-xl font-semibold mb-4'>Designed and implemented the database schema,
ensuring data integrity, normalization, and efficient query
execution.</li>
<li className='text-xl font-semibold mb-4'>Created tables for customers, accounts, transactions,
loans, and other relevant entities, defining appropriate
data types, primary keys, and relationships.</li>
<li className='text-xl font-semibold mb-4'>
Developed SQL scripts for database creation, population
with sample data, and schema updates as needed.</li>
            <li className='text-xl font-semibold mb-4'> Implemented stored procedures, triggers, and views to
automate repetitive tasks and enforce business rules and
constraints.
            </li>
            </ul>  
           
          </div>
          
          {/* Right Column */}
          <div>

          <div className=" flex flex-col justify-between items-center">
            <Image
              src={icon3} 
              alt="icon3"
              className="ml-4 object-cover h-80 w-80 mb-4"
            />
            <h2 className="text-2xl text-center font-semibold mb-4">April 2020- May 2023</h2>
           
            </div>
           
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  