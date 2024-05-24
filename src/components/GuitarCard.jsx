const GuitarCard = ({ imgURL, changeBigGuitarImage, bigGuitarImg }) => {
  const handleClick = () => {
    if (bigGuitarImg !== imgURL.bigGuitar) {
      changeBigGuitarImage(imgURL.bigGuitar);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigGuitarImg === imgURL.bigGuitar
          ? "border-red-500"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="guitar collection"
          width={160}
          className="object-contain"
        />
      </div>
    </div>
  );
};
export default GuitarCard;
