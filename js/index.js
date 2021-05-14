tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });






const menus = []; 

const cargarTabla = ()=>{

    const tbody = document.querySelector("#tabla-tbody");
    tbody.innerHTML = "";
    for(let i=0; i < menus.length; ++i){

        let m = menus[i];
        let fila = document.createElement("tr");
        let celdanombre = document.createElement("td");
       
        let celdahorario = document.createElement("td");
        let celdavalor = document.createElement("td");
        let celdadescripcion = document.createElement("td");
        let celdaoferta = document.createElement("td");
        let icono = document.createElement("i");






        celdanombre.innerText = m.nombre;
        celdahorario.innerText = m.horario;
        celdavalor.innerText = m.valor;
        celdadescripcion.innerHTML = m.descripcion;

        

        if(m.horario == "desayuno"){
            if(m.valor < 5000){
                //<i class="fas fa-check"></i>
                icono.classList.add("fas","fa-check","text-success","fa-3x");


           //oferta:)
           
            }else{
                //<i class="fas fa-times"></i>
                icono.classList.add("fas","fa-times","text-danger","fa-3x");



            }





        }
        if(m.horario == "almuerzo"){
            if(m.valor < 15000){
                //<i class="fas fa-check"></i>
                icono.classList.add("fas","fa-check","text-success","fa-3x");


                //oferta:)

                }else{
                    //<i class="fas fa-times"></i>
                    icono.classList.add("fas","fa-times","text-danger","fa-3x");



                }



        }

        if(m.horario == "once"){
            if(m.valor < 10000){
                //<i class="fas fa-check"></i>
                icono.classList.add("fas","fa-check","text-success","fa-3x");


                //oferta:)

                }else{
                    //<i class="fas fa-times"></i>
                    icono.classList.add("fas","fa-times","text-danger","fa-3x");



                }



        }
        if(m.horario == "cena"){
            if(m.valor < 20000){
                //<i class="fas fa-check"></i>
                icono.classList.add("fas","fa-check","text-success","fa-3x");


                //oferta:)

                }else{
                    //<i class="fas fa-times"></i>
                    icono.classList.add("fas","fa-times","text-danger","fa-3x");



                }



        }

        celdaoferta.classList.add("text-center");
        celdaoferta.appendChild(icono);



        fila.appendChild(celdanombre);
        fila.appendChild(celdahorario);
        fila.appendChild(celdavalor);
        fila.appendChild(celdadescripcion);
        fila.appendChild(celdaoferta);
        tbody.appendChild(fila);





    }

    






};



document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let horario = document.querySelector("#horario-select").value;
    let valor = document.querySelector("#valor-number").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();
    let esvalido = false;


    if(horario == "desayuno"){
        if(valor>= 1000 && valor <= 10000){
            esvalido = true;

        }


    }

    if(horario == "almuerzo"){
        if(valor>= 10000 && valor <= 20000){
            esvalido = true;


        }

    }
    if(horario == "once"){
        if(valor>= 5000 && valor <= 15000){
            esvalido = true;


        }
        
    }
    if(horario == "cena"){
        if(valor> 15000){
            esvalido = true;


        }
        
    }


    if(esvalido){



    
        let menu ={};
        menu.nombre = nombre;
        menu.horario = horario;
        menu.valor = valor;
        menu.descripcion = descripcion;

        menus.push(menu);
        cargarTabla();
        Swal.fire("Exito!","Menu registrado:)", "success");

    }else{
        Swal.fire("Error","Menu no registrado, precio invalido:(", "error");
    }



});
document.querySelector("#limpiar-btn").addEventListener("click", ()=>{
    document.querySelector("#nombre-txt").value = "";
    //document.querySelector("#descripcion-txt").value = ""; //No va a funcionar
    tinymce.get("descripcion-txt").setContent("");
    document.querySelector("#valor-number").value = "";
    document.querySelector("#horario-select").value = "desayuno";
  
  });