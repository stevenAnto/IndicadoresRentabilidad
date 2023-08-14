
function hacerRedimensionable(){
  console.log("entro a hacerRedimensionable")

  const contenedorRedimensionable = document.getElementById("containerTabla");
  console.log(contenedorRedimensionable);
  let isResizing = false;
  contenedorRedimensionable.addEventListener("mouseenter",(e)=>{
    if (e.clientX > contenedorRedimensionable.getBoundingClientRect().right - 10) {
      console.log("estas en ",isResizing);
      contenedorRedimensionable.style.cursor="ew-resize";
    }  })

  contenedorRedimensionable.addEventListener("mousedown",(e)=>{
    if (e.clientX > contenedorRedimensionable.getBoundingClientRect().right - 10) {
      console.log("estas en ",isResizing);
      isResizing = true;
      initialWidth = contenedorRedimensionable.offsetWidth;
      console.log("estas en ",isResizing);
      contenedorRedimensionable.style.cursor="ew-resize";
    }  })
  contenedorRedimensionable.addEventListener("mouseenter",(e)=>{
    if (e.clientX > contenedorRedimensionable.getBoundingClientRect().right - 10) {
      console.log("estas en ",isResizing);
      contenedorRedimensionable.style.cursor="ew-resize";
    }  })


  document.addEventListener('mousemove', (e) => {
    console.log("se activo evento mousemove");
    if (isResizing) {
      const newWidth = initialWidth + (e.clientX - contenedorRedimensionable.getBoundingClientRect().right);
      contenedorRedimensionable.style.width = newWidth + 'px';
    }
  });
  document.addEventListener('mouseup', () => {
    isResizing = false;
      contenedorRedimensionable.style.cursor="default";
  });
}
