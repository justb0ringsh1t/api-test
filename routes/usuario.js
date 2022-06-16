import express from 'express'
import { USUARIOS } from '../BBDD.js'

const usuarioRouter = express.Router()

// Ver todos
usuarioRouter.get('/', (_, res) => {
  return res.status(200).send(USUARIOS)
})

// Ver por id
usuarioRouter.get('/:id', (req, res) => {
  const { id } = req.params

  const usuario = USUARIOS.find(usuario => usuario.id === id)
  if (!usuario) return res.status(404).end()

  return res.status(200).send(usuario)
})

// Borrar por id
usuarioRouter.delete('/:id', (req, res) => {
  const { id } = req.params

  const usuarioIndex = USUARIOS.findIndex(usuario => usuario.id === id)
  if (usuarioIndex === -1) return res.status(404).end()

  USUARIOS.splice(usuarioIndex, 1)

  return res.status(200).end()
})

// Modificar nombre por id
usuarioRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const { nombre } = req.body

  if (!nombre) return res.status(400).end()

  const usuarioIndex = USUARIOS.findIndex(usuario => usuario.id === id)
  if (!usuarioIndex === -1) return res.status(404).end()

  const usuario = USUARIOS[usuarioIndex]
  usuario.nombre = nombre

  return res.status(200).end()
})

// Crear un usuario
usuarioRouter.post('/', (req, res) => {
  if (!id || !nombre || !correo) return res.status(400).end()

  const usuario = USUARIOS.find(usuario => usuario.id === id)
  if (usuario) return res.status(409).end()

  const usuarioNuevo = { id, nombre, correo }
  USUARIOS.push(usuarioNuevo)

  return res.status(200).send(usuarioNuevo)
})
export default usuarioRouter
