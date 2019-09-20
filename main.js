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
    var sphere = new THREE.Object3D()
    var geometry = new THREE.SphereGeometry(2,20,20)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xffff00} )
    var wheel = new THREE.Mesh(geometry,material)
    wheel.position.set(x,y,z)
    sphere.add(wheel)
    scene.add(sphere)
}


function createScene() {
    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    createWheel(5, 8, 2)
    createWheel(5, 21, 2)
    createWheel(18,8,2)
    createWheel(18,21,2)
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