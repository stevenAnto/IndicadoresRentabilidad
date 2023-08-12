
var userFullName = '';
var userKey = '';
var  contador = 0;
function showFormVPN(){
  let formhtml ='<h2>Valor Presente Neto (VPN).</h2>-<br><p> Se trata de la diferencia entre el valor de mercado de una inversión y su costo. Este indicador de rentabilidad mide cuánto valor es creado por realizar cierta inversión. Para evaluar un proyecto de inversión con base en el Valor Presente Neto se tienen que considerar aspectos como inversión inicial previa, tasa de descuento, número de períodos y flujos netos de efectivo</p>'
  formhtml += `<div class="ContainerMed">
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
              <input type ="text" id="tasa de descuento" name ="tasa de descuento" placeholder="8">
              <div>%</div>
              </div></div>
              <div>Flujos de Caja</div>
              <div class = "flujosCaja" id = "flujosCaja">

              <div class="inputGroup">
              <label>Año ${contador}</label>
              <div class="inputMasSimbols">
              <input type="text" id="flujo" name ="anios" placeholder="(Ingresos - Gastos)">
              <div>S/ </div>
              </div>
              </div>
              </div>

              <button onclick ="agregarAnio()">Agregar año </button>
              <div class ="Respuesta">
              <label>Valor Actual Neto</label>
              <div class="inputMasSimbols">
              <input type="text" id="rpt name ="rpt" placeholder="Aqui va tu Respuesta" disabled>
              <div>S/</div>
              </div>
              </div>
              <button onclick ="CalcularVPN()">Calcular </button>
              <button onclick ="GrabarVPN()">Grabar para comparar </button>
              <p id="mensaje" ></p>
    </div>`;
  document.getElementById('main').innerHTML = formhtml;

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
function agregarAnio(){
  contador++;
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
  nuevoDivContainer.appendChild(nuevoDivGroup)
  const aquien = document.getElementById('flujosCaja');
  aquien.appendChild(nuevoDivContainer);

}


document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('vpn').onclick=showFormVPN;
    document.getElementById('tir').onclick=showTir;
    document.getElementById('prc').onclick=showprc;
})
