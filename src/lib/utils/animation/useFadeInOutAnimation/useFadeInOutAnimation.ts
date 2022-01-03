import { animate } from 'motion'
import { useEffect } from 'react'

type Props = {
  el: () => HTMLElement
  show: boolean
  display: string
}

/**
 * @example
 * useFadeInOutAnimation({ el: () => posterRef.current, show })
 */
export default function useFadeInOutAnimation({ el, show, display }: Props) {
  const fadeIn = () => {
    el().style.display = display
    animate(el(), { opacity: 1 })
  }

  const fadeOut = () => {
    animate(el(), { display: 'none', opacity: 0 }, { duration: 0.15 })
  }

  useEffect(() => {
    if (show) {
      fadeIn()
    } else {
      fadeOut()
    }
  }, [show, el])
}
