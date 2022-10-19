class Fila {
  constructor() {
    this.items = []
  }

  enfileirar(elemento) {
    this.items.push(elemento)
  }

  desenfileirar() {
    this.items.shift()
  }

  paraTexto() {
    let texto = ''

    this.items.forEach(element => texto += element + ' ')

    return texto
  }
}