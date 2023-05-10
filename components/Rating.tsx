export function Rating({ rating: rawRating }: { rating: number | string }) {
  try {
    const rating = parseFloat(rawRating);
    const fullStarsCount = Math.floor(rating);
    const fraction = rating - fullStarsCount;
    const fullStars = new Array(fullStarsCount).fill("⭐");

    return (
      <span className="inline-flex items-center" title={rating.toString()}>
        {fullStars.map((star, index) => (
          <span key={index} className="w-[21px]">
            {star}
          </span>
        ))}
        <span
          className={`inline-block overflow-hidden `}
          style={{ width: 21 * fraction }}
        >
          ⭐
        </span>
      </span>
    );
  } catch (e) {
    return "-";
  }
}
