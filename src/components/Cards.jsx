import {Link} from 'react-router-dom'
const cards = () => {
  return (
    <div className="py-20  flex flex-col items-center">
      <h1 className="text-center text-4xl md:text-5xl font-semibold mx-3 ">
        Find Your Perfect Fit At Foot
        <span className="text-[color:var(--primary-clr)]">Wise</span>
      </h1>
      <div className="mt-8 flex gap-3 flex-wrap justify-center">
        {/* card1 */}
        <div className="relative">
          <img
            src="/assets/card1.jpg"
            alt="Fluorite-shoes"
            className=" w-[350px] rounded-xl hover:brightness-50  duration-200 2xl:w-[500px] "
          />
          <div className="absolute bottom-5 right-5 left-5">
            <h3 className="text-lg font-bold 2xl:text-2xl">
              Nike Air Max 270
            </h3>
            <p className="font-light 2xl:text-lg text-justify">
              With a variety of colors and styles to choose from, you'll find
              the perfect pair to match your unique style.
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="relative">
          <img
            src="/assets/card3.jpg"
            alt="Fluorite-shoes"
            className=" rounded-xl w-[350px] hover:brightness-50  duration-200 2xl:w-[500px]"
          />
          <div className="absolute right-5 bottom-5 left-5">
            <h3 className="text-lg font-bold 2xl:text-2xl ">Nike Cortez</h3>
            <p className=" font-light  2xl:text-lg text-justify">
              If you're looking for a shoe that can handle any workout, our
              cross-training shoes are the perfect choice.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="relative">
          <img
            src="/assets/card2.jpg"
            alt="Fluorite-shoes"
            className=" w-[350px] rounded-xl hover:brightness-50 duration-200 2xl:w-[500px]"
          />
          <div className="absolute bottom-5 right-5 left-5">
            <h3 className="text-lg font-bold 2xl:text-2xl">Nike Air Force 1</h3>
            <p className=" font-light 2xl:text-lg text-justify">
              Our shoes are designed with the latest technology to help you
              perform at your best and reach your goals.
            </p>
          </div>
        </div>
      </div>
      <button><Link
        to="/Products"
        className="text-[color:var(--primary-clr)] mt-8 block text-lg border-b border-orange-500"
      >
        See All Products
      </Link></button>
     
    </div>
  );
};

export default cards;
