import { data } from "../../../data/data";
import { useState } from "react";
const Products = () => {
  const [shoes, setShoes] = useState(data);

  //   filter shoses
  const filterType = (brand) => {
    setShoes(
      data.filter((item) => {
        return item.brand === brand;
      })
    );
  };
  return (
    <div className="pt-44">
      <h1 className=" font-bold text-3xl text-center capitalize">
        Experience Comfort and Style with Our Collection of Shoes
      </h1>
      <div className="flex gap-6 mt-16 justify-center">
        <button onClick={() => setShoes (data)} className="bg-[var(--primary-clr)] px-4 py-2 rounded-md">
          All
        </button>
        <button onClick={() => filterType ('nike')} className="bg-[var(--primary-clr)] px-4 py-2 rounded-md">
          Nike
        </button>
        <button onClick={() => filterType ('jordan')} className="bg-[var(--primary-clr)] px-4 py-2 rounded-md">
          Jordan
        </button>
        <button onClick={() => filterType ('soccer')} className="bg-[var(--primary-clr)] px-4 py-2 rounded-md">
          Soccer
        </button>
      </div>
      {/* display shoes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-3">
        {shoes.map((item) => (
          <div key={item.id} className="hover:scale-105 duration-300">
            <img
              src={item.image}
              alt="{item.name}"
              className="rounded-md w-full h-[250px] object-cover 2xl:h-[300px]"
            />
            <h1 className="p-3 font-bold text-center capitalize">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
