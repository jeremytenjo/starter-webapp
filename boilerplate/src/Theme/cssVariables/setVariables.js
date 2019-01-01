export default (ThemeManifest) => {
  for (const type in ThemeManifest) {
    if (ThemeManifest.hasOwnProperty(type)) {
      const element = ThemeManifest[type]
      for (const name in element) {
        if (element.hasOwnProperty(name)) {
          const element2 = element[name]
          let upperName = name[0].toUpperCase() + name.slice(1)
          document.documentElement.style.setProperty(`--${type}${upperName}`, element2)
        }
      }
    }
  }
}
