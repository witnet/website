export default () => {
  // auto imported by nuxt
  const nuxtApp = useNuxtApp()
  return {
    // this coming from gsap plugin, which will be also auto registered
    gsap: nuxtApp.$gsap,
    ScrollTrigger: nuxtApp.$ScrollTrigger,
    ScrollToPlugin: nuxtApp.$ScrollToPlugin,
  }
}
