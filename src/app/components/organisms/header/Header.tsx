import './Header.scss';
import encabezado from '../../../../assets/images/encabezado.png';
import HomeContainer from '../../../pages/home/HomeContainer';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header container">
			<img className="header__unexca" src={encabezado} alt="encabezado" />
			<div className="header__bottom">
				<div className="header__menu">
					<span className="header__hamburger"></span>
				</div>
				<h1 className="header__title">
					<Link to="/">
						Unexca <p className="header__classmate">Classmate</p>
					</Link>
				</h1>
			</div>
		</header>
	);
};

export default Header;
