import { inventoryClass } from "../inventario.js";
import { Producto } from "../productos.js";
import express from 'express';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/products/:id', function(req, res) {

    if(!req.params) {
        let products = inventoryClass.list();

        res.json({products})
    }
    let productoId = Number(req.params.id)
    let foundProduct = inventoryClass.search(productoId)


    foundProduct ? res.json({foundProduct}) : res.json({msg: "Product not founded"})
})

app.get('/products', function(req, res) {
    let products = inventoryClass.list();

    res.json({products})
})

app.post('/products/add', (req, res) => {
    let producto = req.body
    inventoryClass.add(producto)
    res.json({producto})
})

app.listen(3000, () => { 
    console.log("Listening")
})
