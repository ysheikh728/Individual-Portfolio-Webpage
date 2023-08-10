// components/Contacts.js
import Link from "next/link";

const Contacts = () => {
  return (
    <div id="contact" className="bg-white text-black p-16 flex justify-center align-center">
      {/* Existing contact information */}
      <div className="flex flex-col justify-around align-center">
        {/* ... */}
      </div>
      
      {/* Mailchimp email input field */}
      <div className="flex flex-col justify-around align-center">
        {/* ... */}
        <div className="bg-gray-400 w-60 rounded-full p-2">
          <span className="bg-green-500 rounded-full p-2">submit</span>
          <span className="ml-8">Email Address</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
