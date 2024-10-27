import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@fortawesome/fontawesome-svg-core": "@fortawesome/fontawesome-svg-core",
			"@fortawesome/free-solid-svg-icons": "@fortawesome/free-solid-svg-icons",
			"@fortawesome/free-brands-svg-icons":
				"@fortawesome/free-brands-svg-icons",
			"@fortawesome/react-fontawesome": "@fortawesome/react-fontawesome",
		},
	},
	build: {
		outDir: "../dist",
	},
	server: {
		port: 8080,
	},
});
