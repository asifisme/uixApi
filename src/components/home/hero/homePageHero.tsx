
interface ProductImage {
  id: number;
  product: number;
  product_image: string;
  is_primary: boolean;
  alt_text: string;
}

interface SliderInfo {
  views: {
    name: string;
    title: string;
    description: string;
    price: string;
    stock: number;
    uid: string;
    slug: string;
    images: ProductImage[];
  };
  handleAddItem: (uid: string, quantity: number) => Promise<void> | void;
}

const HomePageHero = ({ views, handleAddItem }: SliderInfo) => {
  return (
    <section className="mt-10 bg-white py-10 px-6 md:px-16 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="md:basis-1/3">
          <p className="text-blue-500 font-medium uppercase text-sm mb-2">
            SELL TO GET WHAT YOU LOVE
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-2">
            {views.name}
          </h1>
          <h2 className="text-2xl text-gray-700 font-semibold mb-4">
            {/* {views.title} */}
          </h2>
          <p className="text-gray-600 mb-4">{views.description}</p>
          <p className="text-lg font-bold text-yellow-500 mb-4">
            Only ${views.price}
          </p>
          <button
            onClick={() => handleAddItem(views.uid, 1)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded shadow-md transition"
          >
            Start Buying..
          </button>
        </div>

        {/* Image Section */}
        <div className="md:basis-2/3">
          <img
            src={
              views.images &&
              views.images.length > 0 &&
              views.images[0]?.product_image
                ? views.images[0].product_image
                : "https://placehold.co/600x400"
            }
            className="rounded-lg w-full object-contain max-h-[400px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
