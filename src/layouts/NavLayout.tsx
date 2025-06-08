
import NavLayoutViews from "../components/nav/NavLayoutViews";
import NavHero from "@/components/nav/NavHero";

function NavLayout() {
 
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-12 md:col-start-3 md:col-span-10 md:col-end-11">
        <NavLayoutViews />
        <NavHero />
      </div>
    </section>
  );
}

export default NavLayout;
