'use strict'
const { createHash } = require('../util/bycrypt')

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					firstName: 'Admin',
					lastName: 'Admin',
					email: 'admin@somos-mas.org',
					image:
						'https://images.unsplash.com/photo-1582213782179-e0d53f982ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					password: createHash('adminpassword'),
					roleId: 1
				},
				{
					firstName: 'Maria',
					lastName: 'Lopez Guevara',
					email: 'marilopez@cbc.ca',
					image:
						'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('iODi6Xw14O7'),
					roleId: 2
				},
				{
					firstName: 'Netty',
					lastName: 'Pastrana',
					email: 'npastra@unicef.org',
					image:
						'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('rO9iiD7LPk'),
					roleId: 2
				},
				{
					firstName: 'Abie',
					lastName: 'Marzele',
					email: 'amarzele2@amazon.com',
					image:
						'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('4dVaGS'),
					roleId: 2
				},
				{
					firstName: 'Sari',
					lastName: 'Wellington',
					email: 'smursell3@springer.com',
					image:
						'https://images.unsplash.com/photo-1542343633-ce3256f2183e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('CQ0mxW'),
					roleId: 2
				},
				{
					firstName: 'Nevil',
					lastName: 'Wichard',
					email: 'nwichard4@upenn.edu',
					image:
						'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('3AtCkR692V'),
					roleId: 2
				},
				{
					firstName: 'James',
					lastName: 'Stirgess',
					email: 'jstirgess5@imageshack.us',
					image:
						'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('maFb0TYR496v'),
					roleId: 2
				},
				{
					firstName: 'Kare',
					lastName: 'Try',
					email: 'ktry6@opensource.org',
					image:
						'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('yB9m2Kp'),
					roleId: 2
				},
				{
					firstName: 'Una',
					lastName: 'Chisnell',
					email: 'uchisnell7@java.com',
					image:
						'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('xPDlLG'),
					roleId: 2
				},
				{
					firstName: 'Jasmine',
					lastName: 'Turvey',
					email: 'jturvey8@kickstarter.com',
					image:
						'https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('HEBEOSW1'),
					roleId: 2
				},
				{
					firstName: 'Brigg',
					lastName: 'Fallow',
					email: 'bfallow9@nsw.gov.au',
					image:
						'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('OfPFstNulg'),
					roleId: 2
				},
				{
					firstName: 'Cacilie',
					lastName: 'Sparkwill',
					email: 'csparkwilla@psu.edu',
					image:
						'https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('pRHZswex'),
					roleId: 2
				},
				{
					firstName: 'Alisha',
					lastName: 'Wintour',
					email: 'awintourb@whitehouse.gov',
					image:
						'https://images.unsplash.com/photo-1563620915-8478239e9aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('9VVE0iYg'),
					roleId: 2
				},
				{
					firstName: 'Orelie',
					lastName: 'Livings',
					email: 'olivingsc@berkeley.edu',
					image:
						'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('KX8BJQ'),
					roleId: 2
				},
				{
					firstName: 'Jolie',
					lastName: 'Swiggs',
					email: 'jswiggsd@shutterfly.com',
					image:
						'https://images.unsplash.com/photo-1539698103494-a76dd0436fbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('vNefYS'),
					roleId: 2
				},
				{
					firstName: 'Geneva',
					lastName: 'Spriggs',
					email: 'gspriggse@infoseek.co.jp',
					image:
						'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('Hipc8NpERKlr'),
					roleId: 2
				},
				{
					firstName: 'Sebastian',
					lastName: 'Serot',
					email: 'sserotf@tripadvisor.com',
					image:
						'https://images.unsplash.com/photo-1504899567410-7501a313cadd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('BiUbzuTMoM'),
					roleId: 2,
					deletedAt: '12/11/2021'
				},
				{
					firstName: 'Juan Manuel',
					lastName: 'Shotboult',
					email: 'kshotboultg@goodreads.com',
					image:
						'https://images.unsplash.com/photo-1543357480-c60d40007a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('KmOVgghki'),
					roleId: 2,
					deletedAt: new Date()
				},
				{
					firstName: 'Alan',
					lastName: 'MacAfee',
					email: 'pmacafeeh@ucsd.edu',
					image:
						'https://images.unsplash.com/photo-1603383928972-2116518cd3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('I12ajAY'),
					roleId: 2,
					deletedAt: new Date()
				},
				{
					firstName: 'Federico',
					lastName: 'Tuberfield',
					email: 'jtuberfieldi@bloglovin.com',
					image:
						'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('ia1EtShVG7CU'),
					roleId: 2,
					deletedAt: new Date()
				},
				{
					firstName: 'Ariel',
					lastName: 'Burwin',
					email: 'aburwinj@virginia.edu',
					image:
						'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
					password: createHash('Fp0cGs6ZwV'),
					roleId: 2,
					deletedAt: new Date()
				},

				{
					firstName: 'Alejo',
					lastName: 'Lunbech',
					email: 'alunbechl@blogtalkradio.com',
					image:
						'https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
					password: createHash('EvSrIilM'),
					roleId: 2,
					deletedAt: new Date()
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}
