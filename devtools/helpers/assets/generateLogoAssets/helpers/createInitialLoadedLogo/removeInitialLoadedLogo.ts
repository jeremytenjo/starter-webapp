import { initialLoadedIconId } from './createInitialLoadedLogo.constants'

export default function removeInitialLoadedLogo() {
  const initial_loading_logo = document.getElementById(initialLoadedIconId)
  if (initial_loading_logo) {
    document.getElementById(initialLoadedIconId)?.remove()
  }
}
