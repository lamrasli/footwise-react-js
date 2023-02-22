import { Link } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { TbShoe } from "react-icons/tb";

const pricing = () => {
  return (
    <div className=" pt-40 ">
      <p className=" text-center mx-auto mb-8 max-w-4xl font-light text-lg 2xl:max-w-6xl">
        Our shoes are available at different price points to suit different
        budgets and needs, ranging from Basic shoes under $50 for casual use or
        light exercise, to Premium Range shoes priced above $250 for elite
        athletes and those with specific needs.
      </p>
      <div className=" max-w-[1100px] mx-auto xxl:max-w-[1540px] grid grid-cols-1 justify-items-center gap-5 lg:grid-cols-3 lg:max-w-[1540px]">
        {/* card1 */}
        <div className="bg-gradient-to-t from-[var(--primary-clr)] to-[var(--secondary-clr)] p-5 rounded-xl text-center flex flex-col gap-6 items-center max-w-[350px] 2xl:max-w-[400px]">
          <h2 className="text-lg">Budget Range</h2>
          <h1 className="text-3xl font-bold">50$ to 100$</h1>
          <ul className="mx-8 text-start flex-grow ">
            <li className="list-disc mb-3">
              <strong>Under $50:</strong> Basic shoes with essential features
              for casual use or light exercise.
            </li>
            <li className="list-disc mb-3">
              <strong>$50 to $80:</strong> Comfortable shoes with added support
              and durability for regular use.
            </li>
            <li className="list-disc">
              <strong>$80 to $100:</strong> Shoes with extra cushioning and
              stability for longer runs or more intense workouts.
            </li>
          </ul>
          <button className=" bg-[var(--secondary-clr)] rounded-md px-4 py-2">
            Get Started
          </button>
        </div>
        {/* card2 */}
        <div className="bg-gradient-to-t from-[var(--secondary-clr)] to-[var(--primary-clr)] p-5 rounded-xl text-center flex flex-col gap-6 items-center max-w-[350px] 2xl:max-w-[400px]">
          <h2 className="text-lg">Mid-Range</h2>
          <h1 className="text-3xl font-bold">$100 to $200</h1>
          <ul className="mx-8 text-start grow">
            <li className="list-disc mb-3">
              <strong>$100 to $120:</strong> Shoes with advanced cushioning and
              support features for serious athletes or those with specific foot
              conditions.
            </li>
            <li className="list-disc mb-3">
              <strong>$120 to $150:</strong> Shoes with additional traction and
              breathability for outdoor activities or varying terrain.
            </li>
            <li className="list-disc">
              <strong>$150 to $200:</strong> Shoes with specialized technologies
              for improved performance, such as better energy return or reduced
              impact.
            </li>
          </ul>
          <button className=" bg-[var(--primary-clr)] rounded-md px-4 py-2">
            Get Started
          </button>
        </div>
        {/* card3 */}
        <div className="bg-gradient-to-t from-[var(--primary-clr)] to-[var(--secondary-clr)] p-5 rounded-xl text-center flex flex-col gap-6 items-center max-w-[350px] 2xl:max-w-[400px]">
          <h2 className="text-lg">Premium Range</h2>
          <h1 className="text-3xl font-bold">200$ to 250$</h1>
          <ul className="mx-8 text-start grow">
            <li className="list-disc mb-3">
              <strong>$200 to $250:</strong> Shoes with advanced technologies
              for elite athletes or those with specific needs, such as improved
              speed or agility.
            </li>
            <li className="list-disc mb-3">
              <strong>Above $250:</strong> Shoes with the most cutting-edge
              features and materials for top performance and durability,
              typically used by professional athletes.
            </li>
          </ul>
          <button className=" bg-[var(--secondary-clr)] rounded-md px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
      {/* services */}
      <div className="py-20">
        <h1 className="text-center text-4xl font-bold mb-3">
          Strategy & Consulting Services
        </h1>
        <h2 className="font-light text-center">
          Our management consulting services focus on our clients' most critical
          issues and opportunities.
        </h2>
        <div className="mt-28 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* card1 */}
          <div className="flex gap-6 ">
            <div>
              <RiMoneyDollarCircleFill
                size={"4.5em"}
                className="text-[color:var(--primary-clr)]"
              />
            </div>
            <div className="flex flex-col justify-between items-start">
              <h1 className="text-2xl font-bold">Easy Returns and Exchanges</h1>
              <p className="font-light">
                Hassle-free returns and exchanges for your peace of mind. At our
                e-commerce store, we understand that sometimes you may need to
                return or exchange a pair of shoes.
              </p>
              <Link
                to=""
                className=" border-b-orange-400 border-b-2 text-[color:var(--primary-clr)] "
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* card2 */}
          <div className="flex gap-6">
            <div>
              <FaShippingFast
                size={"4.5em"}
                className="text-[color:var(--primary-clr)]"
              />
            </div>
            <div className=" flex flex-col justify-between items-start">
              <h1 className="text-2xl font-bold ">Free Shipping and Delivery</h1>
              <p className="font-light">
                Enjoy free shipping and delivery on all orders. We offer free
                shipping and delivery on all orders, with no minimum purchase
                required.
              </p>
              <Link
                to=""
                className=" border-b-orange-400 border-b-2 text-[color:var(--primary-clr)] "
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* card3 */}
          <div className="flex gap-6 ">
            <div>
              <TbShoe
                size={"4.5em"}
                className="text-[color:var(--primary-clr)]"
              />
            </div>
            <div className="flex flex-col justify-between items-start">
              <h1 className="text-2xl font-bold">
                Personalized Shoe Recommendations
              </h1>
              <p className="font-light">
                Get personalized recommendations based on your preferences and
                needs. With our personalized shoe recommendation service, we
                help you find the perfect pair of shoes for your needs.
              </p>
              <Link
                to=""
                className=" border-b-orange-400 border-b-2 text-[color:var(--primary-clr)] "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pricing;
