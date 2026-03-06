import { Form, redirect } from 'react-router';
import { toast } from 'react-toastify';
import FormInput from './FormInput.jsx';
import SubmitBtn from './SubmitBtn.jsx';
import { clearCart } from '../features/cart/cartSlice.js';
import { customFetch, formatPrice } from '../utils';

// eslint-disable-next-line react-refresh/only-export-components
export const action =
	(store, queryClient) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);
		const user = store.getState().userState.user;
		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;

		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatPrice(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			/* eslint-disable-next-line */
			const response = await customFetch.post(
				'/orders',
				{ data: info },
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				},
			);

			queryClient.removeQueries(['orders']);
			store.dispatch(clearCart());
			toast.success('order placed successfully');
			return redirect('/orders');
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				'there was an error placing your order';
			toast.error(errorMessage);

			if (error?.response?.status === 401 || error?.response?.status === 403)
				return redirect('/login');
			return null;
		}
	};

const CheckoutForm = () => {
	return (
		<Form method="POST" className="flex flex-col gap-y-4">
			<h4 className="font-medium text-xl">Shipping Information</h4>
			<div className="form-control">
				<label htmlFor="name" className="block text-sm font-medium">
					First Name
				</label>
				<FormInput name="name" type="text" size="input-sm" />
			</div>

			<div className="form-control">
				<label htmlFor="address" className="block text-sm font-medium">
					Address
				</label>
				<FormInput name="address" type="text" size="input-sm" />
			</div>

			<div className="mt-4">
				<SubmitBtn text="Place Your Order" />
			</div>
		</Form>
	);
};

export default CheckoutForm;
