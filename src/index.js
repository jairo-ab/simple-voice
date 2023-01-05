const defaultOptions = {
  voice: 'pt-BR',
  rate: 0.5
}

export default function install(Vue, options) {
  Vue.prototype.$voice = function(params) {
    if ('speechSynthesis' in window) {
      const { voice, rate } = {...defaultOptions, ...options }

      const utterance = new SpeechSynthesisUtterance(params)
      utterance.lang = voice
      utterance.rate = rate

      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Browser does not support voice API!')
    }
  }
}