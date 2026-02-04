import React from 'react';
import SectionTitle from './SectionTitle.jsx';
import ProductsGrid from './ProductsGrid.jsx';

const FeaturedProducts = () => {
	return (
		<div className="pt-24">
			<SectionTitle text="featured products" />
			<ProductsGrid />
		</div>
	);
};

export default FeaturedProducts;
