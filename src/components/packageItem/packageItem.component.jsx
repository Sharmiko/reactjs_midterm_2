import './packageItem.style.scss';

const PackageItem = ({ name, imageUrl, price }) => {
  return (
    <li className="package-item">
      <h3 className="package-item__name">{name}</h3>
      <img src={imageUrl} alt={name} className="package-item__image" />
      <span className="package-item__price">{price}$</span>
    </li>
  );
};

export default PackageItem;