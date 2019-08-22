exports.scrollbar = `
@media only screen and (min-width: 1200px) {
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #bdbdbd;
  }
}
`
