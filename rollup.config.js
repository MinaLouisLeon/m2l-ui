import {babel} from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import {terser} from 'rollup-plugin-terser';
import packageJSON from './package.json';
const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");
export default [
    //commonjs
    {
        input,
        output:{
            file: packageJSON.main,
            format: "cjs"
        },
        plugins:[
            babel({
                exclude:"node_modules/**",
                babelHelpers: 'bundled'
            }),
            peerDepsExternal(),
            nodeResolve(),
            commonjs()
        ]
    },
    {
      input,
      output:{
          file: minifyExtension(packageJSON.main),
          format: "cjs"
      },
      plugins:[
          babel({
              exclude:"node_modules/**",
              babelHelpers: 'bundled'
          }),
          peerDepsExternal(),
          nodeResolve(),
          commonjs(),
          terser()
      ]
  }
]