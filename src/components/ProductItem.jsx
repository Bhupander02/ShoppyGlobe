export default function ProductItem({ itemDetails }) {
  return (
    <div>
      <div>
        <img src={itemDetails.coverImage} alt="Image" />
        <div>
          <h1>{itemDetails.title}</h1>
          <p>
            <span>{itemDetails.cost}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
