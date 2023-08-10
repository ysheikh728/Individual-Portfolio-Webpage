// components/Contacts.js

import Link from "next/link";

const Contacts = () => {
    return (

      <div id="contact" className="bg-white text-black p-16 flex justify-center align-center">
        <div className="flex flex-col justify-around align-center">
        <h1 className="w-2/3 text-center text-5xl font-semibold mb-6">
        Let’s Make Something Amazing Together.
        </h1>
        <h2 className="mt-8 text-center text-2xl font-semibold mb-6">
             Start by <Link className="text-red-500 underline underline-offset-1" href='/' >saying hi</Link>
        </h2>
        </div>
        <div className="flex flex-col justify-around align-center">
        <h2 className="text-center text-2xl font-semibold mb-6">
             Contact Information
        </h2>
        <Link className="text-xl font-semibold text-balck underline underline-offset-1" href='/' >LinkedIn</Link>
        <Link className="text-xl font-semibold text-black underline underline-offset-1" href='/' >Github</Link>
        <Link className="text-xl font-semibold text-black" href='/' >Resume?</Link>
       
        <div className="bg-gray-400 w-60 rounded-full p-2" >
        <span className="bg-green-500 rounded-full p-2" >submit</span>
        <span className="ml-8">Email Address</span>
        </div>
       

        </div>
       
        </div>
      
    );
  };
  
  export default Contacts;
  