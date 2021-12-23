module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{html,js}",
      "./src/components/**/*.{html,js}"
    ],
    safelist:[
      //Classes para ficarem presentes na versão final do projeto

      //classe que começam com:
      /^bg-/,
      /^to-/,
      /^from-/

      //isso resolve o problema de interpolação no comp Botao.tsx
    ]
  },
  
  theme: {
    extend: {},
  },
  plugins: [],
}
