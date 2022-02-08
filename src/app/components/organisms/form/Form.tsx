import { useContext } from 'react';
import { Portal } from '../../../context/Portal/Portal';
import PortalContext from '../../../context/Portal/PortalContext';

const Form = () => {
	const { modal } = useContext<Portal>(PortalContext);

	let action;

	if (modal === 'register') {
		action = (
			<form>
				<p>Register</p>
				<label htmlFor="text">Text</label>
				<input type="text" name="text" title="text" placeholder="text" />

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					title="email"
					placeholder="email"
					id="register-email"
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					title="password"
					placeholder="password"
					id="register-password"
				/>

				<select name="select" title="select" id="register-select">
					<option selected disabled hidden value="">
						Select
					</option>
					<option value="option">Option</option>
				</select>

				<label htmlFor="checkbox">Checkbox</label>
				<input
					type="checkbox"
					name="checkbox"
					title="checkbox"
					id="register-checkbox"
				/>

				<button type="submit">Submit</button>
			</form>
		);
	}

	if (modal === 'login') {
		action = (
			<form>
				<p>login</p>
				<label htmlFor="text">Text</label>
				<input type="text" name="text" title="text" placeholder="text" />

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					title="email"
					placeholder="email"
					id="email"
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					title="password"
					placeholder="password"
					id="password"
				/>

				<select name="select" title="select" id="select">
					<option selected disabled hidden value="">
						Select
					</option>
					<option value="option">Option</option>
				</select>

				<label htmlFor="checkbox">Checkbox</label>
				<input type="checkbox" name="checkbox" title="checkbox" id="checkbox" />

				<button type="submit">Submit</button>
			</form>
		);
	}

	return <>{action}</>;
};

export default Form;
