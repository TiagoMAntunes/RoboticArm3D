function animate() {
//    update()
    render()
//    requestAnimationFrame(animate)
}

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
}



//setup of scene
function init() {
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);

    createScene(renderer)
    createCameras()

  /*  //React to user input
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
  */  window.addEventListener("resize", onResize)
    animate()
 
}