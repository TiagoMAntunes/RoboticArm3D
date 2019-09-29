var camera_top, camera_side, camera_front //cameras
var scene, active_camera, renderer
var wireframe
var robotic_arm, target

function render() {
    renderer.render(scene, active_camera);
}

function createRoboticArm(x, y, z, 
basex, basey, basez,
bx, by, bz,  width, height, depth, baseMAT,
w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
wR, wWS, wHS, wPS, wPL, wheelMAT,
armx, army, armz,
abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT, rotY,   // arm base 
rotx, roty, rotz,   // rotation object
ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,    //lower arm
jx, jy, jz, jR, jWS, jHS, jbPS, jPL,    // arm joint
fax, fay, faz,  // forearm
j2x, j2y, j2z,  //hand joint
hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT, // handbase
f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,  // fingers
f2x, f2y, f2z) {

    'user strict'
    robotic_arm = new RoboticArm(x, y, z, 
        basex, basey, basez,
        bx, by, bz,  width, height, depth, baseMAT,
        w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
        wR, wWS, wHS, wPS, wPL, wheelMAT,
        armx, army, armz,
        abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT, rotY,  // arm base
        rotx, roty, rotz,   // rotation object 
        ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,    //lower arm
        jx, jy, jz, jR, jWS, jHS, jbPS, jPL,    // arm joint
        fax, fay, faz,  // forearm
        j2x, j2y, j2z,  //hand joint
        hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT, // handbase
        f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,  // fingers
        f2x, f2y, f2z)

    scene.add(robotic_arm)
}

function createTarget(x, y, z,
    rx, ty, tz, radius, tube, radialSegments, tubularSegments, targetMAT, rotX, rotY,
    sx, sy, sz, radiusTop, radiusBottom, height, SupRadialSegments, supMAT, supRotX) {

    target = new Target(x, y, z,
        rx, ty, tz, radius, tube, radialSegments, tubularSegments, targetMAT, rotX, rotY,
        sx, sy, sz, radiusTop, radiusBottom, height, SupRadialSegments, supMAT, supRotX)

    scene.add(target)
}

function createScene() {
    'use strict'

    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    scene.background = new THREE.Color(0xe4edf5)

    let baseMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x6e7574})
    let wheelMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000})
    let jointMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x383836})
    let armMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0xc2c9cf})
    let handBaseMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x41576b})
    let fingerMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x6e7574})
    let targetMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0xFFFF00})
    let supMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000})

    createRoboticArm(0, 0, 0,
                    11.5, 14.5, 3, 
                    0, 0, 0, 20, 20, 2, baseMAT,
                    -6.5, -6.5, -3, -6.5, 6.5, -3, 6.5, -6.5, -3, 6.5, 6.5, -3,
                    2, 20, 20, 0, 2 * Math.PI, wheelMAT, 
                    11.5, 14.5, 2,    //arm x, y, z
                    0, 0, 2, 2, 20, 20, 0, Math.PI, jointMAT, 90 * Math.PI / 180,  //arm base
                    0, 0, 0, //rotation object
                    0, 0, 4.5, 1, 1, 7, armMAT,   // lower arm
                    0, 0, 5, 1.5, 20, 20, 0, 2 * Math.PI,   //arm joint
                    0, 0, 5,
                    0, 0, 5, 
                    0, 0, 2, 5, 5, 1, handBaseMAT,
                    0, -2, 2, 1, 1, 3, fingerMAT,
                    0, 2, 2)  

    createTarget(40, 14.5, 0,
                0, 0, 12, 1.5, 0.3, 10, 30, targetMAT, Math.PI / 2, Math.PI / 2,
                0, 0, 5, 1, 1, 10, 20, supMAT, Math.PI / 2)
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
    camera_side = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    
    camera_side.position.x = 10
    camera_side.position.y = -30
    camera_side.position.z = 15
    camera_side.lookAt(new THREE.Vector3(10, 0, 15))  

    camera_top = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera_top.position.x = 14
    camera_top.position.y = 15
    camera_top.position.z = 50
    camera_top.lookAt(new THREE.Vector3(14, 15, 0))  

    
    camera_front = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera_front.position.x = -30
    camera_front.position.y = 14.5
    camera_front.position.z = 15
    camera_front.lookAt(new THREE.Vector3(0, 14.5, 15))  
    camera_front.rotation.z = -90 * Math.PI / 180


    active_camera = camera_side
}
