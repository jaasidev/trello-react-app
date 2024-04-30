export function randomID () {
  const array = []
  while (array.length < 6) {
    const elemento = Math.floor(Math.random() * 10)
    array.push(elemento)
  }
  return Number(array.join(''))
}
