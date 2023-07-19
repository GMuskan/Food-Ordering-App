export const DishCard = ({ dish, restaurant }) => {
  return (
    <div className="dish-card">
      <img src={dish.imgSrc} alt="dish-pic" />
      <p className="dishName">{dish?.name}</p>
      <p>
        Rs. {dish?.price} for {dish?.qty}
      </p>
      <p>{restaurant?.name}</p>
    </div>
  );
};
