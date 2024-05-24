import { guitar8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Offer You
          <span className="text-red-600"> Super</span>
          <span className="text-red-600"> Quality</span> Guitars
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          We offer a curated selection of top-quality electric guitars from
          renowned manufacturers. Each guitar is chosen for its exceptional
          craftsmanship, sound, and reliability. Trust in our expert selection
          to find the perfect instrument for your musical journey.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Whether you are a beginner or a professional, our collection caters to
          all skill levels and styles. Elevate your performance with a guitar
          that truly resonates.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img src={guitar8} alt="guitar8" width={420} className="object-contain" />
      </div>
    </section>
  );
};
export default SuperQuality;
