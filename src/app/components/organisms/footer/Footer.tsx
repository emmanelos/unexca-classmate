import './Footer.scss';
const Footer = () => {
	return (
		<footer className="footer">
			<p className="footer__text">
				Copyright © 2022{' '}
				<a className="footer__link" href="http://www.unexca.edu.ve/">
					Universidad Nacional Experimental de la Gran Caracas – UNEXCA
				</a>
				. Todos los derechos reservados.
			</p>
		</footer>
	);
};

export default Footer;
