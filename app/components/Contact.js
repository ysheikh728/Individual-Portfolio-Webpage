// components/Contacts.js
import Link from "next/link";

const Contacts = () => {
  return (
    <div id="contact" className="bg-white text-black p-16 flex justify-center align-center">
      <div className="flex flex-col justify-around align-center">
        <h1 className="w-2/3 text-center text-5xl font-semibold mb-6">
          Let&rsquo;s Make Something Amazing Together.
        </h1>
        <h2 className="mt-8 text-center text-2xl font-semibold mb-6">
          Start by <Link className="text-red-500 underline underline-offset-1" href="/">saying hi</Link>
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

        <Link className="text-xl font-semibold text-black" href="/">Resume?</Link>

        <div className="bg-gray-400 w-60 rounded-full p-2">
          <span className="bg-green-500 rounded-full p-2">submit</span>
          <span className="ml-8">Email Address</span>
        </div>

        {/* Embed the Mailchimp form here */}
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style dangerouslySetInnerHTML={{ __html: `
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          `}} />
          {/* Mailchimp form HTML */}
          <div id="mc_embed_signup">
            <form action="https://njit.us21.list-manage.com/subscribe/post?u=7cb4f38d508b4cf09d7c3b353&amp;id=8b9d74d0bc&amp;f_id=00ff61e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                  <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>
                <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                  {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                  <input type="text" name="b_7cb4f38d508b4cf09d7c3b353_8b9d74d0bc" tabIndex="-1" value="" />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                    <p style={{ margin: "0px auto" }}>
                      <a href="http://eepurl.com/ixs0i2" title="Mailchimp - email marketing made easy and fun">
                        <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}>
                          <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center" }} />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            (function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';
              fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);
          `}} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
