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
        <Link href="https://www.linkedin.com/in/yahyasheikh28/">
  <a className="text-xl font-semibold text-black underline underline-offset-1">LinkedIn</a>
</Link>
<Link href="https://github.com/ysheikh728">
  <a className="text-xl font-semibold text-black underline underline-offset-1">GitHub</a>
</Link>
<Link href="http://eepurl.com/ixvRTI">
  <a className="text-xl font-semibold text-black underline underline-offset-1">Request My Resume!</a>
</Link>

        </div>

        </div>

    );
  };

  export default Contacts;
