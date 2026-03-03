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
import { loader as productsLoader } from './pages/Products.jsx';
import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';
import { loader as checkoutLoader } from './pages/Checkout.jsx';
import { action as checkoutAction } from './components/CheckoutForm.jsx';

import { store } from './store.js';

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
			{
				path: 'products',
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: productsLoader,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: singleProductLoader,
			},
			{ path: 'cart', element: <Cart /> },
			{ path: 'about', element: <About /> },
			{
				path: 'checkout',
				element: <Checkout />,
				loader: checkoutLoader(store),
				action: checkoutAction(store),
			},
			{ path: 'orders', element: <Orders /> },
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
		action: loginAction(store),
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
