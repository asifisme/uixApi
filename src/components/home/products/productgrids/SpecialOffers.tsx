interface SpecialOffersProps {
  views: {
    name: string;
    title: string;
    desc: string;
    price: string;
    stock: number;
    uid: string;
    images: { image: string }[];
  };
}

const SpecialOffersViews = ({views}:SpecialOffersProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      <div className="absolute top-4 left-4 bg-yellow-400 text-white text-sm font-bold py-1 px-2 rounded-full">
        Special Offer
      </div>
      <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold py-0.5 px-1.5 rounded-sm">
        Save <span className="ml-0.5">$120</span>
      </div>
      <img
        src={views.images[0]?.image || "https://placehold.co/300x200"}
        alt={views.name}
        className="h-96 w-96  p-4"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-blue-500 mb-1">
          {views.name}
        </h3>
        <p className="text-xs text-gray-500 mb-1">{views.title}</p>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 line-through mr-2">$99.00</span>
          <span className="text-red-600 font-bold text-xl">
            ${views.price}
          </span>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mb-2">
          <span>Available: {views.stock}</span>
          <span>Already Sold: {50 - views.stock}</span>
        </div>
        <div className="bg-yellow-100 rounded-md p-2 text-xs text-gray-700">
          <p className="font-semibold">Hurry Up! Offer ends in:</p>
          <div className="flex gap-1 mt-1">
            <div className="bg-yellow-200 rounded-sm p-1">
              <span className="font-bold">08</span>{" "}
              <span className="text-xxs">HOURS</span>
            </div>
            <span className="font-bold">:</span>
            <div className="bg-yellow-200 rounded-sm p-1">
              <span className="font-bold">19</span>{" "}
              <span className="text-xxs">MINS</span>
            </div>
            <span className="font-bold">:</span>
            <div className="bg-yellow-200 rounded-sm p-1">
              <span className="font-bold">54</span>{" "}
              <span className="text-xxs">SECS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersViews;
