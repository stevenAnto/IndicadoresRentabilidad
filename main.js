
var userFullName = '';
var userKey = '';
var  contador = 1;
var contadorProyectos=0;
var mostradoVPN=false;
function showFormVPN(){
  let formhtml ='<h2>Valor Presente Neto (VPN).</h2>-<br><p> Se trata de la diferencia entre el valor de mercado de una inversión y su costo. Este indicador de rentabilidad mide cuánto valor es creado por realizar cierta inversión. Para evaluar un proyecto de inversión con base en el Valor Presente Neto se tienen que considerar aspectos como inversión inicial previa, tasa de descuento, número de períodos y flujos netos de efectivo</p>'
  formhtml += `<div class= "ContainerMedGeneral" id="ContainerMedGeneral">
              <div class="containerTabla" id="containerTabla">
              <p>Inversion Inicial : -1000</p>
              <p>Tasa de descuento : 2% </p>
              <table>
              <tr>
              <th>Inversion</th>
              <th colspan="5">Flujos de Efectivo</th>
              </tr>
              <tr >
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              </tr >
              <tr class="tercercaFila">
              <th class="uno">Inversion</th>
              <th class="dos">Ingresos-Costos</th>
              <th class="tres">Ingresos-Costos</th>
              <th class="cuatro">Ingresos-Costos</th>
              <th class="cinco">Ingresos-Costos</th>
              <th class="seis">Ingresos-Costos</th>
              </tr>
              <tr>
              <td>-1000</td>
              <td>200</td>
              <td>300</td>
              <td>100</td>
              <td>200</td>
              <td>500</td>
              </tr>
              </table>
<p>VPN=&minus;1000 + 200 &divide (1.02)<sup>1</sup> +
  300&divide(1.02)<sup>2</sup></sub> +
  100&divide(1.02)<sup>3</sup></sub> +
  200&divide(1.02)<sup>4</sup></sub> +
  500&divide(1.02)<sup>5</sup></sub>
</p>
<p>VPN=216.30</p>
              </div>
              <div class="ContainerMed">
              <div class="inputGroup">
              <label>Inversion Inicial</label>
              <div class="inputMasSimbols">
              <input type ="text" id="inversion" name ="inversion" placeholder="1000">
              <div>S/</div>
              </div>
              </div>
              <div class="inputGroup">
              <label> Tasa de descuento </label>
              <div class="inputMasSimbols">
              <input type ="text" id="tasaDescuento" name ="tasa de descuento" placeholder="8">
              <div>%</div>
              </div></div>
              <div>Flujos de Caja</div>
              <div class = "flujosCaja" id = "flujosCaja">

              <div class="inputGroup">
              <label>Año ${contador}</label>
              <div class="inputMasSimbols">
              <input type="text" id="flujo" name ="anios" placeholder="(Ingresos - Gastos)">
              <div>S/ </div>
              <i class="fa-regular fa-rectangle-xmark"></i>

              </div>
              </div>
              </div>

              <button onclick ="agregarAnio()">Agregar año </button>
              <div class ="Respuesta">
              <label>Valor Actual Neto</label>
              <div class="inputMasSimbols">
              <input type="text" id="rptName" placeholder="Aqui va tu Respuesta" disabled>
              <div>S/</div>
              </div>
              </div>
              <button onclick ="CalcularVPN()">Calcular </button>
              <button onclick ="GrabarVPN()">Grabar para comparar </button>
              <p id="mensaje" ></p>
    </div>
    <div id="respuestasGrabadas"></div>
    </div>`;
  document.getElementById('main').innerHTML = formhtml;
  const newScript = document.createElement('script');
  newScript.src='./other.js';
  document.body.appendChild(newScript);
  const contenedorRedimensionable = document.getElementById("containerTabla");
  console.log(contenedorRedimensionable)
  hacerRedimensionable();
}

function GrabarVPN(){
  contadorProyectos++;
  let contenedor = document.getElementById("respuestasGrabadas");
  let respuesta = document.getElementById("rptName");
  let nuevoResultado = document.createElement("p");
  nuevoResultado.textContent="Proyecto "+contadorProyectos+
    ": " +respuesta.value;
  nuevoResultado.style.whiteSpace="pre-line";
  contenedor.appendChild(nuevoResultado);
}
function CalcularVPN(){
  let respuesta;
  let inversionInicial = parseFloat(document.getElementById("inversion").value);
  let tasaDescuento = parseFloat(document.getElementById("tasaDescuento").value);
  let suma=0;
  const objetoFlujos = document.getElementById("flujosCaja");

  for(let i = 1;i<=contador; i++){
    let tasa  =tasaDescuento/100;
    let valor = parseFloat(objetoFlujos.children[i-1].children[1].children[0].value);
    let valorActualizado = valor/(1+tasa)**(i);
    suma +=valorActualizado;
    console.log("Valor",i,valorActualizado);
  }
  console.log(suma);
  respuesta = -inversionInicial + suma;
  respuesta = respuesta.toFixed(2);
  let tagRespuesta = document.getElementById("rptName")
  console.log(tagRespuesta);
  tagRespuesta.value = respuesta;
  }
function showTir(){
  let formhtml ='<h2>La TIR es la tasa de descuento que hace que el VPN sea igual a cero. En este caso, necesitamos encontrar la tasa de descuento que hace que la suma de los flujos netos de efectivo descontados sea igual a la inversión inicial. TIR es el rendimiento requerido para que el VPN sea igual a cero.<h2>'
  formhtml += `<label>Inversion Inicial</label><br>
              <input type ="text" id="inversion" name ="inversion" placeholder="1000"><br>
              <label>Numero de años</label>
              <input type="text" id="anios name ="anios" placeholder="5">
              <button onclick ="Calcular()">Calcular </button>
              <p id="mensaje" ></p>`;
  document.getElementById('main').innerHTML = formhtml;

}
function showprc(){
  let formhtml ='<h2>El período de recuperación de la inversión es el tiempo que toma recuperar la inversión inicial.Para este ejemplo, sumamos los flujos netos de efectivo hasta alcanzar o superar la inversión inicial:<h2>'
  formhtml += `<label>Inversion Inicial</label><br>
              <input type ="text" id="inversion" name ="inversion" placeholder="1000"><br>
              <label>Flujos</label>
              <input type="text" id="anios name ="anios" placeholder="5">
              <button onclick ="Calcular()">Calcular </button>
              <p id="mensaje" ></p>`;
  document.getElementById('main').innerHTML = formhtml;

}
function eliminarFlujo(){
  const objetoFlujos = document.getElementById("flujosCaja");
  objetoFlujos.lastElementChild.remove();

}
function agregarAnio(){
  contador++;
  let icono = document.createElement("i");
  icono.setAttribute("class","fa-regular fa-rectangle-xmark")
  icono.addEventListener("click",eliminarFlujo);
  const nuevoDivContainer = document.createElement("div")
  nuevoDivContainer.setAttribute("class","inputGroup")
  const nuevoLabel = document.createElement("label")
  nuevoLabel.textContent="Año "+contador;
  const nuevoDivGroup = document.createElement("div")
  nuevoDivGroup.setAttribute("class","inputMasSimbols")
  const nuevoInput = document.createElement("input")
  nuevoInput.setAttribute("placeholder","Ingresos - Gastos")
  const nuevoDivS = document.createElement("div")
  nuevoDivS.textContent="S/"
  nuevoDivContainer.appendChild(nuevoLabel)
  nuevoDivGroup.appendChild(nuevoInput)
  nuevoDivGroup.appendChild(nuevoDivS)
  nuevoDivGroup.appendChild(icono)
  nuevoDivContainer.appendChild(nuevoDivGroup)
  const aquien = document.getElementById('flujosCaja');
  aquien.appendChild(nuevoDivContainer);

}


document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('vpn').onclick=showFormVPN;
    document.getElementById('tir').onclick=showTir;
    document.getElementById('prc').onclick=showprc;
})
