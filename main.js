var camera_top, camera_side, camera_front; //cameras
var scene, renderer;

//renders the entire scene
function render() {
    renderer.render(scene, camera_side);
}

function createCameras() {
    camera_side = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    const x = 10, y = -10, z = 5;
    camera_side.position.x = x
    camera_side.position.y = y
    camera_side.position.z = z
    camera_side.lookAt(new THREE.Vector3(x, 0, z))
    
}


function createWheel(x, y, z) {
    var geometry = new THREE.SphereGeometry(2,20,20)
    var material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xffff00} )
    var wheel = new THREE.Mesh(geometry,material)
    wheel.position.set(x,y,z)
    return wheel
}


function createBase(x,y,z) {
    //Base is rectangular and has a ball on its center
    var geometry = new THREE.BoxGeometry(20,20,2)
    var material = new THREE.MeshBasicMaterial({wireframe: true, color: 0x0000ff})
    var mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(x,y,z)
    return mesh
}


function createScene() {
    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    let base = new THREE.Object3D()
    base.add(createWheel(5, 8, 2))
    base.add(createWheel(5, 21, 2))
    base.add(createWheel(18,8,2))
    base.add(createWheel(18,21,2))
    base.add(createBase(11.5,14.5,5))
    scene.add(base)
}

//setup of scene
function init() {
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);

    createScene()
    createCameras()

    render()
}