import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import AdminLogin from "./components/Authentication/Admin/AdminLogin";
import CustomerLogin from "./components/Authentication/Customer/CustomerLogin";
import TourePackages from "./components/Packages/TourePackages";
import BookingSystem from "./components/Bookfolder/Bookpage";
import UserDashboard from "./components/Bookfolder/UserDashboard";
import TourDetails from "./components/Packages/TourDetails";
import Footer from "./components/Pages/Footer";
import Aboutus from "./components/Pages/Aboutus";
import Contact from "./components/Pages/Contact"
import Navbar from "./components/Pages/Navbar";

import CreateAccount from "./components/Authentication/CreateAccount";
import TourOperatorSignup from "./components/Authentication/Operator/OperatorLogin";


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />  {/* Yaha child route load hoga */}
        <Footer />
      </>
    );
  }
  return (
    <>
      <Routes>
        {/* Tours Details */}
        <Route path="/tours-details/:id" element={<TourDetails />} />

        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tours" element={<TourePackages />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/booktour" element={<BookingSystem />} />
        <Route path="/userDashboard" element={<UserDashboard />} />


        {/* Login Routes */}
        <Route path="/login/administrator" element={<AdminLogin />} />
        <Route path="/login/user" element={<CustomerLogin />} />



        {/* Create Account  */}
        <Route path="/register/customer" element={<CreateAccount />} />
        <Route path="/register/tour-operator" element={<TourOperatorSignup />} />
      </Routes>
    </>
  );
}

export default App;
