import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
	const response = await customFetch(url);

	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta };
};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};

export default Products;
