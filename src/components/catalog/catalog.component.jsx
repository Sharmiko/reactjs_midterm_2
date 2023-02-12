import { useSelector } from 'react-redux';
import Product from '../product/product.component';

const Catalog = () => {
  const { status, products } = useSelector((state) => state.catalog);

  return (
    <>
      {status === 'loading' ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="catalog">
          {products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              name={product.title}
              rating={product.rating}
              description={product.description}
              price={product.price}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Catalog;