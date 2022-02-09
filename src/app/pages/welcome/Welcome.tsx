import { Link } from 'react-router-dom';
import './Welcome.scss';

const Welcome = () => {
	return (
		<section className="content welcome container">
			<p className="welcome__menu">
				<span className="welcome__menu-item">Mi perfil</span>
				<span className="welcome__menu-item">
					<Link to="/">Salir</Link>
				</span>
			</p>

			<div className="welcome__comentarios">
				<div className="welcome__comentario">
					<div className="welcome__comentario-container">
						<p className="welcome__autor">Docente: Luis Villamizar</p>
						<p className="welcome__fecha">30 nov 2021</p>
						<p className="welcome__cuerpo">
							Saludos Buenos dias En el transcurso de esta semana estaré actualizando y
							verificando las notas en SGA UNEXCA... ya empiezo a ver los diplomas de
							Integridad web de validez mundial...felicitaciones. Las clases finalizan
							entre 6-12 de diciembre....16 de diciembre esta fecha en la que se
							imprime el acta de notas y no se recibiran mas tareas pendientes despues
							del 14 de diciembre. Hasta pronto.
						</p>
						<div className="welcome__comentar">
							<input
								className="welcome__input-comentar"
								type="text"
								title="comentar"
								name="comentar"
								placeholder="Comentar"
							/>
						</div>
					</div>

					<div className="welcome__respuestas">
						<div className="welcome__respuesta">
							<p className="welcome__autor-respuesta">Estudiante: Emmanuel Mendez</p>
							<p className="welcome__fecha-respuesta">30 nov 2021</p>
							<p className="welcome__cuerpo-respuesta">
								Buenos días profesor, mañana no asistiré a clases porque mi familia
								tiene sintomas de covid.
							</p>

							<p className="welcome__mi-mensaje">
								<span className="welcome__editar">Editar</span>
								<span className="welcome__eliminar">Eliminar</span>
							</p>
						</div>

						<div className="welcome__respuesta">
							<p className="welcome__autor-respuesta"> Estudiante: Marcos Guanchez</p>
							<p className="welcome__fecha-respuesta">30 nov 2021</p>
							<p className="welcome__cuerpo-respuesta">
								Buenos días profesor, yo envié la última evaluación la semana pasada ¿La
								recibió?
							</p>
						</div>

						<div className="welcome__respuesta">
							<p className="welcome__autor-respuesta">Profesor: Luis Villamizar</p>
							<p className="welcome__fecha-respuesta">31 nov 2021</p>
							<p className="welcome__cuerpo-respuesta">
								Tranquilo Emmanuel, cuando te sientas mejor asistes a clases. Guanchez
								no recibí tu tarea, reenvíamela.
							</p>
						</div>
						<div className="welcome__respuesta">
							<p className="welcome__autor-respuesta">Estudiante: Marcos Guanchez</p>
							<p className="welcome__fecha-respuesta">1 dic 2021</p>
							<p className="welcome__cuerpo-respuesta">
								Ya se la reenvié profe. Espero que se mejoren pronto Emmanuel.
							</p>
						</div>
					</div>
				</div>

				<div className="welcome__comentario">
					<div className="welcome__comentario-container">
						<p className="welcome__autor">Docente: Luis Villamizar</p>
						<p className="welcome__fecha">8 nov 2021</p>
						<p className="welcome__cuerpo">
							Saludos buenos dias...espero esten bien hice un cambio en las fechas por
							que el modulo de tareas del modulo II habia quedado fuera del modulo
							correspondiente y tal ves por eso no me han podido entregar los
							certificados Ya se corrigio el error y se estiraron los tiempos de
							entrega... Cualquier duda estare a la orden. Hasta Pronto.
						</p>

						<div className="welcome__comentar">
							<input
								className="welcome__input-comentar"
								type="text"
								title="comentar"
								name="comentar"
								placeholder="Comentar"
							/>
						</div>
					</div>

					<div className="welcome__respuestas">
						<div className="welcome__respuesta">
							<p className="welcome__autor-respuesta">Estudiante: Emmanuel Mendez</p>
							<p className="welcome__fecha-respuesta">30 nov 2021</p>
							<p className="welcome__cuerpo-respuesta">
								Buenos días profesor, gracias.
							</p>
							<p className="welcome__mi-mensaje">
								<span className="welcome__editar">Editar</span>
								<span className="welcome__eliminar">Eliminar</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
