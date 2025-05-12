interface TopSellingProps {
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

const TopSellingProductViews = ({ views }: TopSellingProps) => {
  return (
    <section className="flex">
      <div className="basis-1/2">
        <div className="p-15">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {views.title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            {views.desc}
          </p>
          <a href="#" className="bg-purple-400 py-5 p-5 rounded-2xl mr-4 ">
            Get started
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
      </div>
      <div className="basis-1/2 ">
        <img
          src={
            views.images?.[0]?.image ||
            "https://placehold.co/600x400?text=No+Image"
          }
          alt={views.name}
          className="h-[450px] w-full object-cover rounded-2xl shadow-lg border border-gray-200"
        />
      </div>
    </section>
  );
};

export default TopSellingProductViews;
