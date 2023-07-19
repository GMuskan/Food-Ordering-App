import { useContext, useState } from "react";
import { FoodContext } from "../Context/FoodContext";

export const ReviewModal = ({ setReviewModal, restaurant }) => {
  const ratingsArray = [1, 2, 3, 4, 5];
  const [review, setReview] = useState({ rating: 0, comment: "" });
  const { addReview } = useContext(FoodContext);
  return (
    <div className="review-modal-wrapper">
      <div className="review-modal">
        <div className="review-modal-header">
          <h1>Add Your Review</h1>
          <i
            className="fa fa-times-circle"
            aria-hidden="true"
            onClick={() => setReviewModal(false)}
          ></i>
        </div>
        <div className="add-review-details">
          <div className="add-rating">
            <label htmlFor="rating">Rating:</label>
            <select
              name="rating"
              id="rating"
              onChange={(e) =>
                setReview((prev) => ({ ...prev, rating: e.target.value }))
              }
            >
              {ratingsArray?.map((rating) => (
                <option key={rating} className="rating-count">
                  {rating}
                </option>
              ))}
            </select>
          </div>
          <div className="review-comment">
            <label htmlFor="comment">
              Comment:
              <input
                type="text"
                id="comment"
                onChange={(e) =>
                  setReview((prev) => ({ ...prev, comment: e.target.value }))
                }
              />
            </label>
          </div>
          <button
            className="btn-submit"
            onClick={() => {
              addReview(review, restaurant);
              setReviewModal(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
