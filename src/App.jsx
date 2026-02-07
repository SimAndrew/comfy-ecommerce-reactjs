import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
	About,
	Landing,
	HomeLayout,
	Cart,
	Error,
	Login,
	Orders,
	Products,
	SingleProduct,
	Register,
	Checkout,
} from './pages/index.js';

import { ErrorElement } from './components/index.js';
import { loader as landingLoader } from './pages/Landing.jsx';
import { loader as singleProductLoader } from './pages/SingleProduct.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,

		hydrateFallbackElement: <div className="loading" />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{ path: 'products', element: <Products /> },
			{
				path: 'products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: singleProductLoader,
			},
			{ path: 'cart', element: <Cart /> },
			{ path: 'about', element: <About /> },
			{ path: 'checkout', element: <Checkout /> },
			{ path: 'orders', element: <Orders /> },
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
