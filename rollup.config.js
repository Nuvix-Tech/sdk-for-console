import fs from 'fs';
import typescript from "@rollup/plugin-typescript";

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

export default {
    external: Object.keys(pkg.dependencies ?? {}),
    input: "src/index.ts",
    plugins: [typescript()],
    output: [
        {
            format: "cjs",
            file: pkg.main,
            esModule: false,
            sourcemap: true,
        },
        {
            format: "es",
            file: pkg.module,
            sourcemap: true,
        },
        {
            format: "iife",
            file: pkg.jsdelivr,
            name: "Nuvix",
            extend: true,
            globals: {
                'socket.io-client': 'io'
            }
        },
    ],
};