export const ReviewCard = ({ review }) => {
  return (
    <div className="review-item">
      <div className="review-header">
        <img src={review?.pp} alt="reviewer-pic" />
        <p className="review-rating">
          {review?.rating} <i className="fa fa-star-o" aria-hidden="true"></i>
        </p>
      </div>
      <div>{review?.comment}</div>
    </div>
  );
};
