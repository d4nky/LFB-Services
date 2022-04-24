module.exports = {
	content: [
		'./dist/**/*.{html,js}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		fontFamily: {
			roboto: ['sans-serif', 'Roboto'],
		},
		extend: {
			backgroundImage: {
				'main-background': "url('imgs/3.jpg')",
				'nav-logo': "url('imgs/logos/LFB-logo_transparent.png')",
				'second-background': "url('imgs/1.jpg')",
				'third-background': "url('imgs/2.jpg')",
				'first-background': "url('imgs/bg.jpg')",
			},
			colors: {
				'custom-light-gray': '#ECEDED',
				'custom-dark-gray': '#4A4F54',
				'custom-light-blue': '#1191D0',
				'custom-dark-blue': '#304672',
				'custom-normal-yellow': '#FCAF17',
			},
		},
	},
	plugins: [
		require('tw-elements/dist/plugin'),
		require('tailwindcss-animatecss')({
			classes: [
				'animate__animated',
				'animate__fadeIn',
				'animate__bounceIn',
				'animate__lightSpeedOut',
			],
			settings: {
				animatedSpeed: 1000,
				heartBeatSpeed: 1000,
				hingeSpeed: 2000,
				bounceInSpeed: 750,
				bounceOutSpeed: 750,
				animationDelaySpeed: 1000,
			},
			variants: ['responsive', 'hover', 'reduced-motion'],
		}),
		require('tailwind-scrollbar-hide'),
	],
};
