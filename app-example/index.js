import express from 'express'
import mongoose from 'mongoose'

const Animal =mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String
}))

const app = express()

mongoose.connect('mongodb://rafa:password@monguito:27017/miapp?authSource=admin')

app.get('/', async (_req,_res)=>{
    console.log('Listando Animales....')
    const animales =await Animal.find();
    return _res.send(animales)
})

app.get('/crear', async (_req, _res) => {
    console.log('Creando...')
    await Animal.create({tipo:'Cerdo', estado: 'Feliz'})
    return _res.send('ok')
})

app.listen(3000, ()=>console.log('Listening...'))