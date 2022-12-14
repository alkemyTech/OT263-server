'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Activities',
			[
				{
					name: 'Peqeueños Pasos',
					image:
						'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					content:
						'¡Abrió sus puertas el Centro de Desarrollo Infantil de Cava! Finalmente, tras todo el trabajo coordinado y realizado en equipo, nuestro nuevo espacio en Cava recibió a los niños y las niñas, de 45 días de vida hasta los 4 años, que ya forman parte de Pequeños Pasos. 🙌 De manera integral, contemplamos un lugar de acompañamiento, cuidado, formación, nutrición y estimulación, para cambiar la realidad de más de 300 familias. Gracias por ayudarnos a hacer realidad nuestro sueño, en cada una de sus etapas. ¡Sigamos soñando juntos! Eternamente gracias. #TuPasoAyuda 👏❤️',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Festejo del Día de la Niñez',
					image:
						'https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					content:
						'Para la felicidad de todos, por fin pudimos volver a vivirlo en comunidad el día viernes 19 de agosto! Los chicos disfrutaron de los juegos y la rica comida que les habíamos preparado. Luego quedaron fascinados por el show de títeres de Pepito. Y finalmente, recibieron con ilusión y alegría los regalos que les habíamos conseguido gracias al aporte de generosos donantes en nuestra campaña de solidaridad, y las golosinas que les habían preparado un equipo de voluntarios de la empresa Alkimers, que vinieron a compartir el festejo. Agradecemos a todas las personas y entidades que cooperaron para hacer de este festejo tan esperado un momento muy especial y tan alegre.',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Nuestros Talleres',
					image:
						'https://images.unsplash.com/photo-1551731409-43eb3e517a1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtzaG9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
					content:
						'Contamos con 16 talleres, cada uno de éstos tiene su responsable, los cuales son profesionales en cada área. Nuestros talleres se dividen en seis áreas principales, artística, laboral, pedagógica, herramientas para la vida autónoma, espiritual y recreativa. En cada taller se trabaja y focaliza en la sociabilización e inserción en la sociedad de nuestros jóvenes desde diferentes ángulos. Los talleres son coordinados por un responsable, el cual cuenta con el apoyo de voluntarios, quienes son fundamentales para lograr un óptimo desarrollo de las actividades.',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Amparo Maternal',
					image:
						'https://images.unsplash.com/photo-1581952975780-50b4dbbaf206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG1vdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
					content:
						'Amparo Maternal tiene como objetivo cobijar y capacitar, para una verdadera reinserción social, llegando este beneficio a más de 400 niños y niñas. También cuentan con un Jardín de Infantes y Centro de Primera Infancia “Brotecitos”, donde brindan contención, educación y ayuda social. Algunos objetivos de esta organización es acoger a mamás con sus hijos menores que se encuentren en situación de vulnerabilidad social, sin recursos, sin hogar, ni posibilidades socioeconómicas para su autoabastecimiento. En el Hogar Amparo se analiza cada situación y se intenta dar la mejor respuesta posible a cada necesidad. Además de ofrecer vivienda, ropa y alimentos, también velan para que se les brinde asistencia médica, odontológica y psicológica.',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Cava Tecnologia',
					image:
						'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					content:
						'Cava Tecnologia es un proyecto para desarrollar un curso de formación que permita a las personas con discapacidades aprender habilidades digitales + competencias de programación. Nuestro grupo objetivo son personas de entre 18 y 55 años de edad sin acceso a los centros formales de educación. Cava Tecnologia permitirá al grupo objetivo aumentar sus habilidades en el mundo real, capacitándolos para que se conviertan en productores de cultura digital. De hecho, el proyecto simplemente aplicará las habilidades que el grupo objetivo ya posee. El trabajo en equipo inclusivo será un elemento vital, alentando una gran interacción social y construyendo puentes interculturales. El desarrollo del curso de formación se basará en los resultados de una encuesta transnacional sobre las competencias y habilidades digitales de nuestro grupo objetivo. Los resultados proporcionan un análisis de las necesidades de formación. Estos serán utilizados para desarrollar una metodología de formación y contenidos formativos. Usando un formato de aprendizaje combinado, el contenido de la formación se incorporará a una plataforma de aprendizaje on-line. Finalmente, la formación se validará con con participantes seleccionados.',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Activities', null, {})
	}
}
