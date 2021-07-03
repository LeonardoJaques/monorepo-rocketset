import express from "express";

const routes = express.Router();
routes.get('/', (request, response) => {
  return response.json ({message: "Sextou!"})
})
routes.post('/posts', (request, response) => {
  return response.json({message:"New post de Sexta"})
})

export default routes