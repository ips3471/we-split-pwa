/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: '#FFA500',
				'brand-light': '#FED8B1',
				'brand-deep': '#E07C00',
			},
			backgroundColor: {
				light: '#f8f8f8',
				white: '#ffffff',
			},
		},
	},
	plugins: [],
};
