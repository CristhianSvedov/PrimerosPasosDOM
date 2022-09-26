const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellido')
const botIngresar = document.querySelector('#botonIngresar')
const divInicial = document.querySelector('.divInicial')
const divSaludo = document.querySelector('.divSegundo')
const divCompras = document.querySelector('.divCompras')
const botonSeguir = document.createElement('button')
botonSeguir.innerText = 'COMPRAR'
const botonTerminar = document.createElement('button')
botonTerminar.innerText = 'TERMINAR'
const botonAcceso = document.createElement('button')
botonAcceso.innerText = 'ACEPATAR'
const listProductos = document.createElement('select')
listProductos.setAttribute('id', 'listProductos')


let producto = []
let carrito = []
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



botIngresar.onclick = () => {
const usuario = {
nombre: inputNombre.value,
apellido: inputApellido.value
}
localStorage.setItem('usuarioStorage', JSON.stringify(usuario))
divInicial.remove()
saludar(usuario)
}

function saludar (user){
    const saludoInicial = document.createElement('h2')
    saludoInicial.innerText =`Bienvenido ${user.nombre} ${user.apellido}, a la tienda nuemro UNO EN VENTAS de ropas deportivas de todo el pais LISTO PARA REALIZAR TU COMPRA?`
    divSaludo.append(saludoInicial)
    divSaludo.append(botonAcceso)
}

botonAcceso.onclick = () => {
    divSaludo.remove()
    const parrafo = document.createElement('p')
    parrafo.innerText = 'Seleccione Producto'

    
    producto.forEach(produc =>{
        const option = document.createElement('option')
        option.innerText = `${produc.nombre} $ ${produc.precio}`
        listProductos.append(option)
    })


    divCompras.append(parrafo)
    divCompras.append(listProductos)
    divCompras.append(botonSeguir)
    divCompras.append(botonTerminar)
}

botonSeguir.onclick = () => {
    const productoSelect = producto[listProductos.selectedIndex]
    carrito.push(productoSelect)
}

botonTerminar.onclick = () => {
    console.log(carrito)
    let totalCompra = 0
    carrito.forEach((produc) => {
        totalCompra = totalCompra + produc.precio
    })
    const detalleCompra = document.createElement('p')
    function descuento (total){
        return (total>1000 ? detalleCompra.innerText=`Felicitaciones tu compra es de: ${total} tienes un descuentoa de un 10 % en tu proxima compra`: detalleCompra.innerText=`El costo tatal es de: ${total}`)
    }
    descuento(totalCompra)
    divCompras.append(detalleCompra) 
}
