import vue from '@vitejs/plugin-vue'

export default {
	plugins: [vue()],
	build: {
		minify: 'terser',
		terserOptions: {
			format: { comments: false },
		}
	}
}
