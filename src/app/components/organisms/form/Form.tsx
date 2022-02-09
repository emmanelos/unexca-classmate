import { useContext } from 'react';
import { Portal } from '../../../context/Portal/Portal';
import PortalContext from '../../../context/Portal/PortalContext';
import './Form.scss';

import { Link } from 'react-router-dom';

const Form = () => {
	const { modal, togglePortal } = useContext<Portal>(PortalContext);

	let action;

	if (modal === 'register') {
		action = (
			<form className="form">
				<div className="form__control">
					<label className="form__label" htmlFor="name">
						Nombre
					</label>
					<input className="form__input-text" type="text" name="name" title="name" />
				</div>

				<div className="form__control">
					<label className="form__label" htmlFor="lastname">
						Apellido
					</label>
					<input
						className="form__input-text"
						type="text"
						name="lastname"
						title="lastname"
					/>
				</div>

				<div className="form__control">
					<label className="form__label" htmlFor="email">
						Email
					</label>
					<input
						className="form__input-text"
						type="email"
						name="email"
						title="email"
						placeholder="email"
						id="register-email"
					/>
				</div>

				<div className="form__control">
					<label className="form__label" htmlFor="permissions">
						Permisos
					</label>
					<select name="permissions" title="select" id="permissions">
						<option selected disabled hidden value="">
							Selecciona
						</option>
						<option value="DOCENTE">Docente</option>
						<option value="ESTUDIANTE">Estudiante</option>
					</select>
				</div>

				<div className="form__control">
					<label className="form__label" htmlFor="password">
						Password
					</label>
					<input
						className="form__input-text"
						type="password"
						name="password"
						title="password"
						placeholder="password"
						id="register-password"
					/>
				</div>

				<div className="form__control">
					<label className="form__label" htmlFor="confirm-password">
						Confirmar contraseña
					</label>
					<input
						className="form__input-text"
						type="confirm-password"
						name="confirm-password"
						title="confirm-password"
						id="confirm-password"
					/>
				</div>

				<button className="form__button" type="submit">
					Registrarse
				</button>
			</form>
		);
	}

	if (modal === 'login') {
		action = (
			<form className="form">
				<div className="form__control">
					<label className="form__label" htmlFor="email">
						Email
					</label>
					<input
						className="form__input-text"
						type="email"
						name="email"
						title="email"
						placeholder="email"
						id="email"
					/>
				</div>

				<div className="form__control">
					<label className="form__label" htmlFor="password">
						Password
					</label>
					<input
						className="form__input-text"
						type="password"
						name="password"
						title="password"
						placeholder="password"
						id="password"
					/>
				</div>

				<button className="form__button">
					<Link to="/welcome" onClick={() => togglePortal('', false)}>
						Iniciar sesión
					</Link>
				</button>
			</form>
		);
	}

	return <>{action}</>;
};

export default Form;
