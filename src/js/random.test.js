import { test, describe, expect } from 'vitest'
import { randomID } from './random.js'

describe('comprobando que no hayan id iguales', () => {
  let primer, segundo
  test('comprobacion que sea mayor que 5', () => {
    primer = randomID()
    expect(primer.length).toBeGreaterThan(5)
  })
  test('comprobando que los id no sean iguales', () => {
    primer = randomID()
    segundo = randomID()

    expect(primer !== segundo).toBeTruthy()
  })
})
