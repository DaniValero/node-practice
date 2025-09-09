import express from 'express'
import usersRouter from './src/routes/users'

const app = express()
const port = process.env.port || 3000;

//Controller maneja logica y trae los datos de la DB, router solo maneja rutas y llama al controller
app.use("/api", usersRouter)

app.listen(port, () => {
  console.log("App running in port " + port + "!");
})