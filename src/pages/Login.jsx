import { Form, Link, redirect, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FormInput, SubmitBtn } from '../components';
import { loginUser } from '../features/user/userSlice.js';
import { customFetch } from '../utils';

// eslint-disable-next-line react-refresh/only-export-components
export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post('/auth/local', data);

			store.dispatch(loginUser(response.data));
			toast.success('logged in successfully');
			return redirect('/');
		} catch (error) {
			console.log(error);
			const errorMessage =
				error?.response?.data?.error?.message ||
				'please double check your credentials';

			toast.error(errorMessage);
			return null;
		}
	};

const Login = () => {
	return (
		<section className="h-screen grid place-items-center">
			<Form
				method="POST"
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
			>
				<h4 className="text-center text-3xl font-bold capitalize">Login</h4>
				<FormInput
					type="email"
					label="email"
					name="identifier"
					defaultValue="test@test.com"
				/>
				<FormInput
					type="password"
					label="password"
					name="password"
					defaultValue="secret"
				/>

				<div className="mt-4">
					<SubmitBtn text="login" />
				</div>
				<button
					type="button"
					className="btn btn-secondary btn-block capitalize"
				>
					guest user
				</button>
				<p className="text-center">
					Not a member yet?
					<Link
						to="/register"
						className="ml-2 link link-hover link-primary capitalize"
					>
						register
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Login;
