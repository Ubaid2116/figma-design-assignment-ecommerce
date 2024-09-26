import Hero from "./components/layout/hero";
import GridLayout from "./components/layout/grid-layout";
import Brandlogo from "./components/layout/brand-logo";
import Products from "./components/layout/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brandlogo />
      <GridLayout />
      <Products />
    </div>
  );
}
