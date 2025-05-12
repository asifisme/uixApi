
interface newProductgProps {
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

const NewArrivalProductViews = ({views}:newProductgProps) => {
  return (
    <section>
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
      
       
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

        </div>
      </div>
    </section>
  );
};

export default NewArrivalProductViews;
