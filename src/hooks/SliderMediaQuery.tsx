'use client'

import { useEffect, useState } from 'react'
import { SwiperOptions } from 'swiper/types'

type Breakpoints = Record<number, SwiperOptions>

const useSliderMediaQuery = (breakpoints: Breakpoints, defaultValue = 7) => {
  const [perView, setPerView] = useState<number>(defaultValue)

  const update = () => {
    const width = window.innerWidth
    const matched = Object.keys(breakpoints)
      .map(Number)
      .filter(bp => bp <= width)
      .sort((a, b) => b - a)[0]

    const value = breakpoints[matched]?.slidesPerView

    setPerView(typeof value === 'number' ? value : defaultValue)
  }

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [breakpoints, defaultValue])

  return perView
}

export default useSliderMediaQuery
