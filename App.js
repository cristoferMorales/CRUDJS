// Eventos DOM (DOCUMENT OBJECT MODEL)
document
.getElementById("producto-formulario") // Obtiene el id del formulario
.addEventListener("submit", function (evento){
// Evaluar el comportamiento del formulario
evento.preventDefault(); //Cancelar el refrescar la pagina a la hora de guardar el documento
//Para guardar sin refrescar en la pagina
//cont
//Obtener los valores del formulario

const nombre= document.getElementById("nombre").value,
    precio= document.getElementById("precio").value,
    año=document.getElementById("año").value;

//Crear nuevo objeto "producto"
const producto = new Producto (nombre, precio, año);

//Crear un nuevo usuario de interfaz 
const ui = new UI();

//Input de validación de Usuario
if (nombre === "" || precio === "" || año === "") {
    ui.showMessage("Por favor insertar datos");
}

// Guardar producto
ui.addProducto(producto)
ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (evento)=> {
    const ui = new UI();
    ui.deleteProducto(evento.target);
    evento.preventDefault();
});

//Clase Producto

class Producto{
    constructor(nombre, precio, año){ //Un constructor nos ayuda a tener una estructura con campos o variables para solo invocarlos 
        this.nombre=nombre;
        this.precio=precio;
        this.año=año;
    }
}

// Clase Usuario interfaz

class UI{
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        <div class="tarjeta texto margen4">
            <div class="tarjeta-bodiy">
                <strong>Producto</strong>: ${producto.nombre} <br>
                <strong>Precio</strong>: ${producto.precio} <br>
                <strong>año</strong>: ${producto.año} <br>
                <a href="#" class="btn btn-error" name="eliminar">Eliminar</a>
            </div>
        </div>

        `;

        productoLista.appendChild(elemento); //appendChild = objeto hijo

    }

        //Resetear valores de formulario
        
    resetForm(elemento){
        document.getElementById("producto-formulario").reset();
    }
        //Eliminar el valor del formulario
    deleteProducto(elemento){
        if (elemento.nombre === "eliminar") {
            elemento.parentElement.remove();
            this.showMessage("El producto se a eliminado")
        }
    }

    showMessage(mensaje, cssClass){
        const div=document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje))

        //Mostrar en el DOM

        const contenido = document.querySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz usuario
        container.insertBefore(div, app);

            setTimeout(function(){
                document.querySelector(".alert", remove());
            },3000);
        

    }   

}