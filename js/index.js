// Array para almacenar clientes
const clientes = [];

// funcion para creacion de clientes
function crearCliente(){
    const id = clientes.length + 1
    const nombre = prompt("Ingresa el nombre del cliente: ")
    const nacionalidad = prompt("Ingresa la nacionalidad del cliente: ")
    clientes.push({id, nombre, nacionalidad, cuentas:[]})// aquí se está creando la estructura del cliente incluyendo las cuentas que tenga el cliente
    return alert(`Cliente creado con ID ${id}`)
}

// funcion para crear cuentas de cliente
function crearCuenta(){
    
    // Validar que haya clientes
    if (clientes.length === 0) {
    alert("No hay clientes registrados, primero crea un cliente.")
    return
    }

    // Mostrar los clientes disponibles
    let mensaje = "Base de datos de Clientes:\n"
    clientes.forEach(cliente => {
        mensaje += `ID Cliente: ${cliente.id} - Nombre: ${cliente.nombre} - Nacionalidad: ${cliente.nacionalidad}\n`})

    const idCliente = parseInt(prompt(`${mensaje}\nIngrese el ID del cliente para crear cuenta: `))
    const cliente = clientes.find(c => c.id === idCliente)

    if(!cliente){
        alert("Cliente no encontrado, ingresa un ID de cliente válido.")
        return
    }

    const numeroCuenta = cliente.cuentas.length + 1
    cliente.cuentas.push({numero: numeroCuenta, saldo: 0})
    return alert(`Cuenta de ahorros #: ${numeroCuenta} creada para ${cliente.nombre}`)

}

// funcion para retirar dinero y actualizar saldo
function retirarDinero(){

    // Validar que haya clientes
    if (clientes.length === 0) {
    alert("No hay clientes registrados, primero crea un cliente.")
    return
    }

    // Mostrar los clientes disponibles
    let mensaje1 = "Base de datos de Clientes:\n"
    clientes.forEach(cliente => {
        mensaje1 += `ID Cliente: ${cliente.id} - Nombre: ${cliente.nombre} - Nacionalidad: ${cliente.nacionalidad}\n`})

    const idCliente = parseInt(prompt(`${mensaje1}\nIngrese el ID del cliente para retirar dinero: `))
    const cliente = clientes.find(c => c.id === idCliente)

    if(!cliente){
        alert("Cliente no encontrado, ingresa un ID de cliente válido.")
        return
    }

    if (cliente.cuentas.length === 0){
        alert("El cliente no tiene cuentas registradas, primero genera una cuenta para el cliente.")
        return
    }

    // Mostrar las cuentas disponibles con saldo
    let mensaje = "Cuentas disponibles:\n"
    cliente.cuentas.forEach(cuenta => {
        mensaje += `Cuenta #: ${cuenta.numero} - Saldo: ${cuenta.saldo.toFixed(2)}\n`
    })

    const idCuenta = parseInt(prompt(`${mensaje}\nIngresa el # de la cuenta de la cual deseas retirar: `))
    const cuenta = cliente.cuentas.find(c => c.numero === idCuenta)

    if (!cuenta) {
        alert("Cuenta no encontrada, ingresa una cuenta válida.")
        return
    }

    // Validación de saldo, retiro de monto y actualización de saldo
    const monto = parseFloat(prompt("Ingresa el monto a retirar: "))

    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido.")
        return
    }

    if (cuenta.saldo < monto) {
        alert("Fondos insuficientes.")
        return
    }

    cuenta.saldo -= monto
    return alert(`Retiro exitoso. Nuevo saldo: ${cuenta.saldo.toFixed(2)}`)
}

// funcion para abonar dinero y actualizar saldo
function abonarDinero(){
    
    // Validar que haya clientes
    if (clientes.length === 0) {
    alert("No hay clientes registrados, primero crea un cliente.")
    return
    }

    // Mostrar los clientes disponibles
    let mensaje1 = "Base de datos de Clientes:\n"
    clientes.forEach(cliente => {
        mensaje1 += `ID Cliente: ${cliente.id} - Nombre: ${cliente.nombre} - Nacionalidad: ${cliente.nacionalidad}\n`})

    const idCliente = parseInt(prompt(`${mensaje1}\nIngrese el ID del cliente para abonar dinero: `))
    const cliente = clientes.find(c => c.id === idCliente)

    if(!cliente){
        alert("Cliente no encontrado, ingresa un ID de cliente válido.")
        return
    }

    if (cliente.cuentas.length === 0){
        alert("El cliente no tiene cuentas registradas, primero genera una cuenta para el cliente.")
        return
    }

    // Mostrar las cuentas disponibles con saldo
    let mensaje = "Cuentas disponibles:\n"
    cliente.cuentas.forEach(cuenta => {
        mensaje += `Cuenta #: ${cuenta.numero} - Saldo: ${cuenta.saldo.toFixed(2)}\n`
    })

    const idCuenta = parseInt(prompt(`${mensaje}\nIngresa el # de la cuenta de la cual deseas abonar: `))
    const cuenta = cliente.cuentas.find(c => c.numero === idCuenta)

    if (!cuenta) {
        alert("Cuenta no encontrada, ingresa una cuenta válida.")
        return
    }

    // Validación de saldo, abono de monto y actualización de saldo
    const monto = parseFloat(prompt("Ingresa el monto a abonar: "))

    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido.")
        return
    }

    cuenta.saldo += monto
    return alert(`Abono exitoso. Nuevo saldo: ${cuenta.saldo.toFixed(2)}`)

}

const MENU = `
            Bienvenido al simulador de estado de cuenta
            Ingresa una de las siguientes opciones:
            ________________________________________________
            1- Crear Cliente
            2- Crear Cuenta para cliente existente
            3- Retirar Dinero
            4- Abonar Dinero
            5- Salir
            `

// funcion principal para activar el simulador de estado de cuenta
function main(){
    let input = prompt(MENU)
    while(input !== "5"){
        const opcion = parseInt(input)
        if(opcion >= 1 && opcion <= 4){
            
            let resultado

            if(opcion == 1){//Crear cliente
                crearCliente()
            }
            if(opcion == 2){//Crear cuentas de clientes
                crearCuenta()
            }
            if(opcion == 3){//Retirar dinero
                retirarDinero()
            }
            if(opcion == 4){//Abonar dinero
                abonarDinero()
            }
        } else{
            alert("Ingreso inválido. Ingresa una opción entre 1 y 4 o 5 para Salir del programa")
        }
        input = prompt(MENU)
    }
    alert("Gracias por usar el simulador. ¡Hasta luego!")
}

main()