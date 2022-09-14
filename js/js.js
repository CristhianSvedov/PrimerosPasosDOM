
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

const boton1 = document.createElement('button')
boton1.innerText='TERMINAR COMPRAS'
document.body.append(boton1)

boton.onclick = ()=>{
    const productoSelect = producto[selectList.selectedIndex]
    carrito.push(productoSelect)
}

boton1.onclick = ()=> {
    let totalCompra = 0
    carrito.forEach((produ)=> {
        totalCompra = totalCompra + produ.precio
    })
    const p = document.createElement('p')
    p.innerText = "El costo Total es de : "+ totalCompra
    document.body.append(p)
}

