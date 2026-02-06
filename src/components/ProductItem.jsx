export default function ProductItem({ itemDetails }) {
  return (
    <div className="product-card">
      <img src={itemDetails.coverImage} alt={itemDetails.title} loading="lazy"/>
      <div className="product-card-body">
        <h3 className="product-title">{itemDetails.title}</h3>
        <p className="product-seller">Seller: {itemDetails.seller}</p>
        <p className="product-rating">⭐ {itemDetails.rating}</p>
        <p className="product-price">${itemDetails.cost}</p>
      </div>
    </div>
  );
}
