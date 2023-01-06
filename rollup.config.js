import buble from '@rollup/plugin-buble'

const banner = `/*!
 * Simple Voice API
 * https://github.com/jairo-ab/simple-voice
 * @license MIT
 */`

export default {
  input: 'src/index.js',
  output: [{
    file: 'dist/simple-voice.esm.js',
    format: 'es',
    banner
  }, {
    file: 'dist/simple-voice.common.js',
    format: 'cjs',
    banner
  }, {
    file: 'dist/simple-voice.js',
    format: 'umd',
    name: 'SimpleVoice',
    banner
  }],
  plugins: [buble()]
}