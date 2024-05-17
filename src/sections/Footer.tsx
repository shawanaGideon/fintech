import KobodropLight from "../assets/logos/kobodrop_logo_bright.png";
import StoreLink, { BtnTypes } from "../common/StoreLink";
import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Linkedin from "../assets/logos/icons8-linkedin.svg";

function Footer() {
  return (
    <section className="bg-gray-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <img
              className="mb-4 w-36"
              src={KobodropLight}
              alt="Light version of Kobodrop"
            />
            <p className="text-sm">Start spending the smart way</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray">Product</p>
              <a href="#">Overview</a>
              <a href="#features">Feature</a>
              <a href="#">Solutions</a>
              <a href="#">Contact</a>
              <a href="#">Releases</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray">Resources</p>
              <a href="#">Blog</a>
              <a href="#">Newsletter</a>
              <a href="#">Events</a>
              <a href="#">Help centre</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="w-fit">
            <h2>Get the app</h2>
            <StoreLink type={BtnTypes.Variant} />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="text-gray-400">
            &copy; 2024 Gideon Shawana. All rights reserved
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400"
            >
              <img src={Twitter} alt="Twitter Logo" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400"
            >
              <img src={Facebook} alt="Facebook Logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/gideonshawana/"
              target="_blank"
              className="text-gray-400"
            >
              <img src={Linkedin} alt="Linkedin Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
