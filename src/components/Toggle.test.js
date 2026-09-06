import React from 'react'
import ReactDOM from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'

import Toggle from './Toggle'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container)
  container.remove()
  container = null
})

const letters = () =>
  Array.from(container.querySelectorAll('h1')).map(node => node.textContent)

it('renders one heading per letter', () => {
  act(() => {
    ReactDOM.render(<Toggle />, container)
  })

  expect(letters()).toEqual(['O', 'S', 'M', 'A', 'R'])
})

// useTransition mantem os itens que sairam montados enquanto a animacao de leave
// roda, entao logo apos o clique as letras antigas ainda estao no DOM.
it('keeps the remaining letter and adds none when toggling', () => {
  act(() => {
    ReactDOM.render(<Toggle />, container)
  })

  const before = letters()

  act(() => {
    Simulate.click(container.querySelector('button'))
  })

  const after = letters()

  expect(after).toContain('O')
  expect(after.length).toBeLessThanOrEqual(before.length)
  after.forEach(letter => expect(before).toContain(letter))
})
