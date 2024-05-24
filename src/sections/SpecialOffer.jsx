import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={100}
          height={100}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-red-600">Special</span> Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Take advantage of our exclusive discounts on a wide range of electric
          guitars. From beginner models to professional-grade instruments, find
          incredible deals that suit every budget and style.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Do not miss out on our limited-time offers, featuring top brands at
          unbeatable prices. Enjoy additional perks like free shipping and
          extended warranties, making it the perfect time to upgrade your gear.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
