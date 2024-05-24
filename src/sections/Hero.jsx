import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { guitars, statistics } from "../constants";
import { bigGuitar1 } from "../assets/images";
import GuitarCard from "../components/GuitarCard";

const Hero = () => {
  const [bigGuitarImg, setBigGuitarImg] = useState(bigGuitar1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-red-600">The Best Guitars</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]  font-bold z-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Buy a Guitar at
          </span>
          <br />
          <span className="text-red-600 inline-block mt-3">FretFire</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Find your perfect sound with our diverse range of electric guitars,
          crafted to inspire and perform.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 gb-primary bg-hero bg-cover bg-center">
        <img
          src={bigGuitarImg}
          alt="guitar collection"
          width={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {guitars.map((guitar) => (
            <div key={guitar.thumbnail}>
              <GuitarCard
                imgURL={guitar}
                changeBigGuitarImage={(guitar) => setBigGuitarImg(guitar)}
                bigGuitarImg={bigGuitarImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
