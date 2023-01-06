const defaultOptions = {
  voice: 'pt-BR',
  rate: 0.5
}

export function install(Vue, options) {
  Vue.prototype.$voice = function(params) {
    if ('speechSynthesis' in window) {
      console.log(options)
      const { voice, rate } = Object.assign(defaultOptions, options)

      const utterance = new SpeechSynthesisUtterance(params)
      utterance.lang = voice
      utterance.rate = rate
      window.speechSynthesis.speak(utterance)
    } else {
      console.warn('Browser does not support voice API!')
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}