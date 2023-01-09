# simple-voice [![Downloads](https://img.shields.io/npm/dt/simple-voice.svg)](https://www.npmjs.com/package/simple-voice) [![Version](https://img.shields.io/npm/v/simple-voice.svg)](https://www.npmjs.com/package/simple-voice) [![License](https://img.shields.io/npm/l/simple-voice.svg)](https://www.npmjs.com/package/simple-voice)

A event voice for Vue.js, using [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) browser natives, support both Vue 1.0 and 2.0. See Vue [documentation](https://vuejs.org/v2/guide/migration.html#Events) for more detail.


## Installation
You can install it via [yarn](https://yarnpkg.com) or [npm](https://npmjs.com).
```
$ yarn add simple-voice
$ npm install --save simple-voice
```

When used with a module system, you must explicitly install the bus via Vue.use():
```js
import Vue from 'vue';
import SimpleVoice from 'simple-voice';

Vue.use(SimpleVoice);
```

You can optionally pass in some options:
```js
Vue.use(SimpleVoice, {
  voice: 'pt-BR',
  rate: 1.2
});
```

The default is pt-BR.
See the full list of voices [here](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices).

## Usage
#### Listen and clean
```js
// ...
mounted() {
  this.voice();
},
methods: {
  voice() {
    this.$voice('Hello world!');
  }
}
```

## License
[MIT](https://opensource.org/licenses/MIT)
