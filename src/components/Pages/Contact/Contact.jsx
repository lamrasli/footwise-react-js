import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Load the Google Maps JavaScript API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDv8HByHsuLCSrg1W1IKN8SJo5SkmglkvI&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    // Initialize the map
    function initMap() {
      const location = { lat: 32.292866, lng: -9.233423 }; // Set the location
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8,
      }); // Create the map
      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Location",
      }); // Add a marker to the map
    }
  }, []);

  return (
    <div className="pt-44 ">
      <div className="grid grid-cols-1 justify-items-center items-center gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <AiFillPhone
              size={30}
              className="text-[color:var(--primary-clr)]"
            />
            <h3>+212626353454</h3>
          </div>
          <div className="flex items-center gap-3">
            <AiTwotoneMail
              size={30}
              className="text-[color:var(--primary-clr)]"
            />
            <h3>Lamrasli98badr@gmail.com</h3>
          </div>
          <div className="flex items-center gap-3">
            <BiTimeFive size={30} className="text-[color:var(--primary-clr)]" />
            <h3>Mon-Fri : 8am - 9pm </h3>
            <h3>Sat-Sun : Closed </h3>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
          <div className="flex flex-col gap-4 mt-4 text-black">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded p-2 text-sm focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="rounded p-2 text-sm focus:outline-none"
            />

          </div>
        </div>
      </div>
      {/* map */}
      <div id="map" className="h-[300px] w-full rounded-lg my-8"></div>
      <p className="font-light text-justify text-lg">
        Get in touch with us! We'd love to hear from you. Our team is always
        ready to answer any questions you may have about our services or
        products. Whether you prefer to give us a call, shoot us an email, or
        fill out our contact form, we're here to help you in any way we can.
      </p>
    </div>
  );
};

export default Contact;
