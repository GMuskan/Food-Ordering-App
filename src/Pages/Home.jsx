import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DishCard } from "../Components/DishCard";
import { FoodContext } from "../Context/FoodContext";

export const Home = () => {
  const navigate = useNavigate();

  const [restaurantList, setRestaurantList] = useState([]);
  const { cuisineData, restaurantListData } = useContext(FoodContext);
  return (
    <div className="container">
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine: </h2>
      <div>
        {cuisineData?.map((item) => (
          <button
            key={item?.id}
            className="cuisine-btn"
            onClick={() => {
              const list = restaurantListData?.filter(
                (restaurant) => restaurant?.cuisine_id === item?.id
              );
              setRestaurantList(list);
            }}
          >
            {item?.name}
          </button>
        ))}
      </div>
      <div className="restaurant-list">
        {restaurantList?.map((item) => (
          <div
            className="restaurant"
            key={item?.id}
            onClick={() => navigate(`/restaurant-details/${item?.id}`)}
          >
            <h3>Dishes by {item?.name}</h3>
            <div className="dishes-row">
              {item?.menu?.map((dish) => (
                <DishCard dish={dish} restaurant={item} key={dish?.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
