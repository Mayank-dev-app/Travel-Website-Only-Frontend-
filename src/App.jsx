import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./components/Pages/Home";
import AdminLogin from "./components/Authentication/Admin/AdminLogin";
import CustomerLogin from "./components/Authentication/Customer/CustomerLogin";
import BookingSystem from "./components/Bookfolder/Bookpage";
import UserDashboard from "./components/Bookfolder/UserDashboard";
import Footer from "./components/Pages/Footer";
import Aboutus from "./components/Pages/Aboutus";
import Contact from "./components/Pages/Contact"
import Navbar from "./components/Pages/Navbar";
import CreateAccount from "./components/Authentication/CreateAccount";
import TourOperatorSignup from "./components/Authentication/Operator/OperatorLogin";
import HolyPlaces from "./components/Packages/HolyPlaces/HolyPlaces";
import AdventureTours from "./components/Packages/AdventurePlaces/AdventurePlaces";
import HolyToursDetails from "./components/Packages/HolyPlaces/TourDetails";
import AdventureToursDetails from "./components/Packages/AdventurePlaces/AdventureToursDetail";


function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet /> 
        <Footer />
      </>
    );
  }
  return (
    <>
      <Routes>
        {/* Tours Details */}
        <Route path="/holytours-details/:id" element={<HolyToursDetails />} />
        <Route path="/adventure-details/:id" element={ <AdventureToursDetails />} /> 

        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/holy-places/:locatin" element={<HolyPlaces />} />
          <Route path="/holy-places" element={<HolyPlaces />} />
          <Route path ="/adventure/:location" element ={<AdventureTours />} />
          <Route path ="/adventure" element ={<AdventureTours />} />
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
