import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-wrap justify-between my-16 pt-16 gap-10 border-t-[1px] border-orange-400 ">
      <div className="max-w-[500px]">
        <div className="flex items-center mb-4">
          <img src="/assets/logo.png" alt="" className=" w-16 " />
          <Link to="/" className="text-3xl font-bold">
            Foot
            <span className="font-bold text-[color:var(--primary-clr)]">
              Wise
            </span>
          </Link>
        </div>
        <p className="font-light text-justify">
          Welcome to our online store for high-performance sports shoes! We
          offer a wide range of top-quality athletic footwear for all types of
          sports, from running and training to basketball and soccer.
        </p>
        {/* social media */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href="http://www.instagram.com/badr__lamrasli/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram
              size={26}
              className=" text-[color:var(--primary-clr)]"
            />
          </a>
          <a
            href="https://www.tiktok.com/@badr_lamrasli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={21} className=" text-[color:var(--primary-clr)]" />
          </a>
          <a
            href="https://www.facebook.com/badr.lamrasli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook
              size={26}
              className=" text-[color:var(--primary-clr)]"
            />
          </a>
          <a
            href="https://github.com/lamrasli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              size={26}
              className=" text-[color:var(--primary-clr)]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/badr-lamrasli-8a19471b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin
              size={26}
              className=" text-[color:var(--primary-clr)]"
            />
          </a>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-4">About Us</h2>
        <ul className="flex flex-col gap-4 cursor-pointer">
          <li>Our Story</li>
          <li> Meet the Team</li>
          <li>Careers</li>
          <li> Contact Us</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-4">Customer Care </h2>
        <ul className="flex flex-col gap-4 cursor-pointer">
          <li>Order Status</li>
          <li>Shipping and Delivery</li>
          <li>Returns and Exchanges</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-xl mb-4">Resources </h2>
        <ul className="flex flex-col gap-4 cursor-pointer">
          <li>Recipe directory</li>
          <li>Help center</li>
          <li>Privacy & terms</li>
        </ul>
      </div>
      <div>
        <h2>Enter your email address to receive news and promotions. </h2>
        <input name="email" type="text" placeholder="E-mail..." className="mt-3 p-1 bg-transparent border-b focus:outline-none placeholder:text-gray-300 " />
      </div>
      <p className="w-full text-center"> &copy; 2023 FootWise. All rights reserved | Coded and designed by <a href="https://lamraslibadr.netlify.app/" target="_blank" rel="noopener noreferrer" className="
      border-b">Badr Lamrasli</a></p>
    </div>
  );
};

export default Footer;
