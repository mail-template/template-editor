import jsonPlugin from '@rollup/plugin-json';
import tsPlugin from 'rollup-plugin-typescript2';

export default {
    input: 'src/Index.tsx',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false,
    },
    plugins: [jsonPlugin(), tsPlugin()],
    external: ['react', 'react-dom'],
};
