let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'BIENVENIDOS A MI PAGINA QUERIDO/A' + miNombre;
}

    if (!localStorage.getItem('nombre')) {
        estableceNombreUsuario();
    }
    else {
        let nombreAlmacenado = localStorage.getItem('nombre');
        miTitulo.textContent = 'BIENVENIDO A MI PAGINA QUERIDO/A' + nombreAlmacenado;
    }


const EdadIngreso = prompt("ingresar Edad")

if(EdadIngreso >= 18) { alert("sos mayor")} 
else{alert("no podes ingresar")}


console.log(EdadIngreso)

const Genero = prompt("masculino o femenino")

if(Genero === "masculino") {"Hombre"} 
else{"mujer"}


console.log(Genero)

    for (let i = 0; i < 10; i++) {
    
        if ( i === 5){
            break;
        }
        else if ( i !== 5){
            console.log(i)
        }
    }
    
    
    for (let i = 0; i < 50; i++){
        
        if ( i % 2 ==! 0){
            continue;
        }
        else {
            console.log(i)
        }}

    for (let i = 0; i < 10; i++){
        
            if ( i % 2 === 0){
                continue;
            }
            else {
                console.log(i)
            }}

            for (let i = 0; i <= 10; i++) {
                if (i === 10){
                    console.log(`La bomba va a explotar en: ${i}`)
                    //console.log(Boolean(i))
                } else if (i <= 9 && i !== 0){
                    console.log(`                         : ${i}`)
                }
                else if( i === 0){
                    console.log("BOOM")
                }       
            }
            
    


