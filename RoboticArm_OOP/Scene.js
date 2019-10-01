var camera_top, camera_side, camera_front //cameras
var scene, active_camera
var robotic_arm, target

function render() {
    renderer.render(scene, active_camera);
}

function createRoboticArm(x, y, z) {
    'use strict'
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

    camera_side = new Camera(10, -30, 15, new THREE.Vector3(10, 0, 15))
    camera_top = new Camera(15, 15, 50, new THREE.Vector3(14, 15, 0))
    camera_front = new Camera(-30, 14.5, 15, new THREE.Vector3(0, 14.5, 15))

    camera_front.rotateZ(90 * Math.PI / 180)
    camera_top.rotateZ(180 * Math.PI / 180)
    camera_side.rotateZ(180 * Math.PI / 180)

    active_camera = camera_side
}
