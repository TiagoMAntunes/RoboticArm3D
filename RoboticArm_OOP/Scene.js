var camera_top, camera_side, camera_front //cameras
var scene, active_camera
var robotic_arm, target

function render() {
    renderer.render(scene, active_camera);
}

function createRoboticArm(x, y, z) {
    'user strict'
    robotic_arm = new RoboticArm(x, y, z)
    scene.add(robotic_arm)
}

function createTarget(x, y, z) {
    'use strict'
    target = new Target(x, y, z)
    scene.add(target)
}

function createScene() {
    'use strict'

    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    scene.background = new THREE.Color(0xe4edf5)

    createRoboticArm(0, 0, 0)
    createTarget(40, 14.5, 0)

    scene.add(robotic_arm)
    scene.add(target)
}

function traverseElements(obj) {
    console.log(obj)
    console.log(obj instanceof THREE.Mesh)
    if (obj instanceof THREE.Mesh)
        obj.material.wireframe = !obj.material.wireframe
    if (obj !== undefined)
        for (i in obj.children)
            traverseElements(obj.children[i])
  }

function update() {
    robotic_arm.update()

    if (wireframe) {
        traverseElements(scene);
        wireframe = false;
    }
}

function createCameras() {
    'use strict'
    camera_side = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera_side.position.set(10, -30, 15)
    camera_side.lookAt(new THREE.Vector3(10, 0, 15))  

    camera_top = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera_top.position.set(15, 15, 50)
    camera_top.lookAt(new THREE.Vector3(14, 15, 0))  

    camera_front = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera_front.position.set(-30, 14.5, 15)
    camera_front.lookAt(new THREE.Vector3(0, 14.5, 15))  
    camera_front.rotation.z = -90 * Math.PI / 180

    active_camera = camera_side
}
