class AutoPause {
  constructor () {
    this.threshold = 0.25
    this.handlerIntersection = this.handlerIntersection.bind(this)
    this.visivilityChange = this.visivilityChange.bind(this)
  }

  run (player) {
    this.player = player
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    })

    observer.observe(player.media)

    document.addEventListener('visibilitychange', this.visivilityChange)
  }

  handlerIntersection (entries) {
    const entry = entries[0]
    const isVisible = entry.intersectionRatio > this.threshold
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }

  visivilityChange () {
    const isVisible = document.visibilityState === 'visible'
    if (isVisible) {
      this.player.play()
    } else {
      this.player.pause()
    }
  }
}

export default AutoPause
