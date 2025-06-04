import HomePageApi from "./HomePageApi";

const HomePage = () => {
  return (
    <div className="flex w-full bg-[#18181b]">
      <div className="grid grid-cols-12">
        <div
          className={"col-span-12 md:col-start-2 md:col-span-10 md:col-end-12"}
        >
          <HomePageApi />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
