import HomePageApi from "./HomePageApi";

const HomePage = () => {
  return (
    <div className="flex w-full ">
      <div className="grid grid-cols-12">
        <div
          className={"col-span-12 md:col-start-3 md:col-span-10 md:col-end-11"}
        >
          <HomePageApi />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
