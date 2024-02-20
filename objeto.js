class Usuario{
    constructor (nombre,anioDeNacimiento,motivoDeVisita){
        this.nombre = nombre
        this.anioDeNacimiento = (anioDeNacimiento)
        this.motivoDeVisita = motivoDeVisita
    }
}  

    let nombreIngresado = prompt("Ingrese su nombre")
    let fechaDeNacimiento = prompt ("ingrese su año de nacimiento")
    let fecha = parseInt (fechaDeNacimiento)
    let motivo = prompt ("¿Por que estas aca?")
    const usuario1 = new Usuario (nombreIngresado,fechaDeNacimiento,motivo)
    console.log(usuario1)
   