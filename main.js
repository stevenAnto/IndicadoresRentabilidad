
var userFullName = '';
var userKey = '';
function showFormVPN(){
  let formhtml ='<h2>Valor Presente Neto (VPN). Se trata de la diferencia entre el valor de mercado de una inversión y su costo. Este indicador de rentabilidad mide cuánto valor es creado por realizar cierta inversión. Para evaluar un proyecto de inversión con base en el Valor Presente Neto se tienen que considerar aspectos como inversión inicial previa, tasa de descuento, número de períodos y flujos netos de efectivo</h2>'
  formhtml += `<label>Inversion Inicial</label><br>
              <input type ="text" id="inversion" name ="inversion" placeholder="1000"><br>
              <label> Tasa de descuento </label><br>
              <input type ="text" id="tasa de descuento" name ="tasa de descuento"><br>
              <label>Numero de años</label>
              <input type="text" id="anios name ="anios" placeholder="5">
              <button onclick ="Calcular()">Calcular </button>
              <p id="mensaje" ></p>`;
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


document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('vpn').onclick=showFormVPN;
    document.getElementById('tir').onclick=showTir;
    document.getElementById('prc').onclick=showprc;
})
