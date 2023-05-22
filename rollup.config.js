import commonjsPlugin from '@rollup/plugin-commonjs';
import resolvePlugin from '@rollup/plugin-node-resolve';
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import jsonPlugin from '@rollup/plugin-json';
import tsPlugin from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false,
    },
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [jsonPlugin(), tsPlugin(), commonjsPlugin(), resolvePlugin(), peerDepsExternalPlugin()],
    external: ['react', 'react-dom'],
};
