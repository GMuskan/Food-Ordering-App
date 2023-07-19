import { createContext, useState } from "react";
import { cuisineData, restaurantsData } from "../data";
export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [restaurantListData, setRestaurantListData] = useState(restaurantsData);

  const addReview = (review, restaurant) => {
    const restro = restaurantListData?.find(
      (item) => item?.id === restaurant?.id
    );
    const newRatings = [
      ...restro?.ratings,
      {
        rating: review?.rating,
        comment: review?.comment,
        revName: "Muskan Gupta",
        pp: "https://picsum.photos/32/32"
      }
    ];

    const newAverageRating =
      newRatings?.reduce((acc, curr) => acc + Number(curr?.rating), 0) /
      newRatings?.length;

    setRestaurantListData(
      restaurantListData?.map((item) =>
        item?.id === restaurant?.id
          ? {
              ...item,
              ratings: newRatings,
              averageRating: newAverageRating
            }
          : item
      )
    );
  };
  return (
    <FoodContext.Provider
      value={{ cuisineData, restaurantListData, addReview }}
    >
      {children}
    </FoodContext.Provider>
  );
};
