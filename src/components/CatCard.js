import './CatCard.css';

function CatCard({ cat }) {
  return (
    <div className="cat-card">
      <img src={cat.image_link} alt={cat.name} className="cat-image" />
      <div className="cat-info">
        <h3>{cat.name}</h3>
        <p><strong>Origine:</strong> {cat.origin}</p>
        <p><strong>Family friendly:</strong> {cat.family_friendly}/5</p>
      </div>
    </div>
  );
}
export default CatCard;