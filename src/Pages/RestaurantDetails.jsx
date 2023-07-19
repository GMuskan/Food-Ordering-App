import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReviewCard } from "../Components/ReviewCard";
import { ReviewModal } from "../Components/ReviewModal";
import { FoodContext } from "../Context/FoodContext";
export const RestaurantDetails = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const { restaurantListData } = useContext(FoodContext);
  const [reviewModal, setReviewModal] = useState(false);

  const restaurant = restaurantListData?.find(
    (item) => item?.id === Number(restaurantId)
  );
  return (
    <div className="restaurant-details-page">
      <button className="back-button">
        <i
          className="fa fa-long-arrow-left"
          aria-hidden="true"
          onClick={() => navigate("/")}
        ></i>
      </button>
      <div className="restaurant-details-section">
        <div className="restaurant-details">
          <h2>{restaurant?.name}</h2>
          <p>{restaurant?.menu?.map((item) => `${item?.name}, `)}</p>
          <p>{restaurant?.address}</p>
          <p>Average Rating: {restaurant?.averageRating}</p>
        </div>
        <div>
          <button onClick={() => setReviewModal(true)}>Add Review</button>
        </div>
      </div>
      <div className="reviews-section">
        <h3>Reviews</h3>
        {restaurant?.ratings?.map((review, index) => (
          <ReviewCard index={index} review={review} key={index} />
        ))}
      </div>
      {reviewModal && (
        <ReviewModal setReviewModal={setReviewModal} restaurant={restaurant} />
      )}
    </div>
  );
};
