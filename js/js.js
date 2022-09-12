
let producto = []
let carrito = []
const selectList = document.getElementById('lista')
const remera = {
    id:1,
    nombre:'remera',
    precio:450
}
producto.push(remera)
const short = {
    id:2,
    nombre:'short',
    precio:400
}
producto.push(short)
const buzos = {
    id:3,
    nombre:'buzos',
    precio:500
}
producto.push(buzos)
const medias = {
    id:4,
    nombre:'medias',
    precio:100
}
producto.push(medias)

producto.forEach(producto=>{
    const option = document.createElement('option')
    option.innerText =  `${producto.nombre}: $${producto.precio}`
    selectList.append(option)
})

const boton = document.createElement('button')
boton.innerText='AGREGAR PRODUCTO'
document.body.append(boton)