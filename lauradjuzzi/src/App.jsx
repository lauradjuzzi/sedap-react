import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users"));
const NotFound = React.lazy(() => import("./pages/auth/NotFound"));
// const Error400 = React.lazy(() => import("./pages/error400"));
// const Error401 = React.lazy(() => import("./pages/Error401"));
// const Error403 = React.lazy(() => import("./pages/Error403"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));
const About = React.lazy(() => import("./components/Guest/About"));
const Footer = React.lazy(() => import("./components/Guest/Footer"));
const Hero = React.lazy(() => import("./components/Guest/Hero"));
const Navbar = React.lazy(() => import("./components/Guest/Navbar"));
const Testimonials = React.lazy(() => import("./components/Guest/Testimonials"));
const TopProduct = React.lazy(() => import("./components/Guest/TopProduct"));
const MemberCheck = React.lazy(() => import("./components/Guest/MemberCheck"));
const Products = React.lazy(() => import("./pages/Product"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          {/* <Route path="/error400" element={<Error400 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/error403" element={<Error403 />} /> */}
        </Route>

        <Route element={<AuthLayout />}>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="/guest" element={<GuestLayout />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/topProduct" element={<TopProduct />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/membercheck" element={<MemberCheck />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
