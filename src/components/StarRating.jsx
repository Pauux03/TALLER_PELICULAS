function StarRating({ value, onRate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <button
          key={star}
          onClick={() => onRate(star)}
          style={{ color: star <= value ? "gold" : "gray" }}
        >
          ★
        </button>
      ))}
    </div>
  );
}
export default StarRating;