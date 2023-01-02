import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	test: {
		globals: true,
		typecheck: {
			tsconfig: './tsconfig.test.json',
		},
		setupFiles: ['./src/setup-test.ts'],
		environment: 'node',
	},
} as any);
