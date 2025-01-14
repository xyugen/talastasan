import type { Config } from 'tailwindcss';
import svelteUx from 'svelte-ux/plugins/tailwind.cjs';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svelte-ux/**/*.{svelte,js}'],

	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lora: ['Lora', 'serif']
			}
		}
	},

	ux: {
		themes: {
			light: {
				'color-scheme': 'light',
				primary: 'hsl(359 39% 33%)',
				secondary: 'hsl(0 0% 11%)',
				accent: 'hsl(36 32% 58%)',
				neutral: 'hsl(22.1053 17.1171% 43.5294%)',
				info: 'hsl(186.9421 47.8261% 49.6078%)',
				success: 'hsl(164.5946 33.6364% 43.1373%)',
				warning: 'hsl(30.1408 84.1897% 49.6078%)',
				danger: 'hsl(354.4845 100% 41.642%)',
				'surface-100': 'hsl(0 0% 94.5098%)'
			}
			// dark: {
			// 	'color-scheme': 'dark',
			// 	primary: 'hsl(234.8208 100% 72.6713%)',
			// 	secondary: 'hsl(313.3209 100% 66.1653%)',
			// 	accent: 'hsl(173.7346 100% 40.1728%)',
			// 	neutral: 'hsl(213.3333 17.6471% 20%)',
			// 	'surface-100': 'hsl(212.3077 18.3099% 13.9216%)',
			// 	'surface-200': 'hsl(212.7273 18.0328% 11.9608%)',
			// 	'surface-300': 'hsl(213.3333 17.6471% 10%)'
			// }
		}
	},

	plugins: [svelteUx]
} satisfies Config;
