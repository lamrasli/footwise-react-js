const Model = () => {
  return (
    <div className="pb-20 ">
      <div className="flex items-center justify-center flex-wrap mb-5">
        <img
          src={"/assets/shoes1.png"}
          alt="shoes model 1"
          className=" max-w-[350px] rounded-xl mb-5"
        />
        <div className="max-w-2xl mx-8 ">
          <p className=" text-xl text-[color:var(--primary-clr)]">
            Introducing The New XYZ Sport Shoes
          </p>
          <h1 className="text-4xl font-bold my-4 capitalize">
            Durable and long-lasting design
          </h1>
          <p className="text-justify">
            Experience the ultimate comfort and support with our latest sport
            shoes. Designed for high-performance athletes and weekend warriors
            alike, these shoes are perfect for running, jumping, and everything
            in between.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 flex-wrap-reverse">
        <div className="max-w-2xl mx-8">
          <p className="text-xl text-[color:var(--primary-clr)]">
            Do Not Machine Wash Or Tumble Dry
          </p>
          <h1 className="text-4xl font-bold my-4 capitalize">
            Experience the Future of Technology
          </h1>
          <p>
          Our shoes come in a variety of sizes to ensure a perfect fit for every foot. Refer to our size chart for more information.
          </p>
          <ul className="list-disc m-3">
            <li>Wipe clean with a damp cloth</li>
            <li>Allow to air dry away from direct sunlight or heat</li>
            <li>Do not machine wash or tumble dry</li>
          </ul>
        </div>
        <img
          src={"/assets/shoes2.jfif"}
          alt="shoes model 2"
          className=" max-w-[350px] rounded-xl mb-5"
        />
      </div>
    </div>
  );
};

export default Model;
