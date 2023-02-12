import PackageItem from '../packageItem/packageItem.component';
import './package.style.scss';

const Package = ({ cost, items }) => {
  const date = new Date(Date.now());
  const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  return (
    <div className="package">
      <div className="package__header">
        <h3 className="package__label">
          <b>Ordered at:</b> {formattedDate}
        </h3>
        <span className="package__cost">
          <b>Package cost:</b> {cost}$
        </span>
      </div>
      <ul className="package__items">
        {items.map((item) => (
          <PackageItem
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Package;