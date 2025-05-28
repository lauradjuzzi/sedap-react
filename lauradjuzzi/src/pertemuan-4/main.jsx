import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./frameworklist";
import FrameworkListFilter from "./frameworklistfilter";
import "./responsivedesign";
import ResponsiveDesign from "./responsivedesign";
import ProductList from "./productlist";

createRoot(document.getElementById("root")).render(
  <div>
    {/*<FrameworkList />*/}
    <FrameworkListFilter />
    <ResponsiveDesign/>
    <ProductList/>
  </div>
);

