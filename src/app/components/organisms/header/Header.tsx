import './Header.scss';
import encabezado from '../../../../assets/images/encabezado.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header container">
			<img className="header__unexca" src={encabezado} alt="encabezado" />
			<div className="header__bottom">
				<h1 className="header__title">
					Unexca <p className="header__classmate">Classmate</p>
				</h1>
			</div>
		</header>
	);
};

export default Header;
