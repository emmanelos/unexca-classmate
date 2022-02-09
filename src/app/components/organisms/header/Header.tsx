import './Header.scss';
import encabezado from '../../../../assets/images/encabezado.png';

const Header = () => {
	return (
		<header className="header container">
			<img className="header__unexca" src={encabezado} alt="" />
			<div className="header__bottom">
				<div className="header__menu">
					<span className="header__hamburger"></span>
				</div>
				<h1 className="header__title">
					Unexca <p className="header__classmate">Classmate</p>
				</h1>
			</div>
		</header>
	);
};

export default Header;
