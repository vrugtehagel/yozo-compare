import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'stencil',
	outputTargets: [{
		type: 'www',
		dir: 'dist',
		serviceWorker: null
	}],

}
