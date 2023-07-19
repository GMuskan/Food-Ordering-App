import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { RestaurantDetails } from "./Pages/RestaurantDetails";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restaurant-details/:restaurantId"
          element={<RestaurantDetails />}
        />
      </Routes>
    </div>
  );
}
