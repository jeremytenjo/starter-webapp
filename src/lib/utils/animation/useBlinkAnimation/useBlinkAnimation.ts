import { animate } from 'motion'
import { useEffect } from 'react'

type Props = {
  el: () => HTMLElement
  loading: boolean
}

/**
 * @example
 * useBlinkAnimation({ el: () => posterRef.current, loading })
 */
export default function useBlinkAnimation({ el, loading }: Props) {
  useEffect(() => {
    if (loading) {
      animate(
        el(),
        { opacity: [0.1, 1, 0.1] },
        {
          repeat: Infinity,
          duration: 1.1,
        },
      )
    } else {
      animate(el(), { opacity: 1 })
    }
  }, [loading, el])
}
