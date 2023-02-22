import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero h-screen bg-hero bg-center bg-cover ">
      <div className="flex flex-col h-full justify-center " >
        <div className=" max-w-md pl-5">
          <h1 className="text-4xl md:text-5xl font-bold lg:text-[var(--secondary-clr)] ">
            Get Ready For Any Adventure
          </h1>
          <p className="mt-4 lg:text-[var(--secondary-clr)] text-justify">
          Ghop the latest Nike and Jordan shoes in style and comfort at our online store, featuring a wide range of options including eco-friendly choices made from recycled materials. 
          </p>
          <button className="bg-[var(--secondary-clr)] p-3 rounded-md mt-4">
          <Link to="/Products">View Products</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
