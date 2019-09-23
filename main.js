var camera_top, camera_side, camera_front; //cameras
var scene, renderer, active_camera;

var angle1Mesh, angle2Mesh, angle3Mesh;

var robot_arm;

var wireframe;

//renders the entire scene
function render() {
    renderer.render(scene, active_camera);
}

function createCameras() {
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


function createWheel(x, y, z) {
    let geometry = new THREE.SphereGeometry(2,20,20)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xffff00} )
    let wheel = new THREE.Mesh(geometry,material)
    wheel.position.set(x,y,z)
    return wheel
}


function createBase(x,y,z) {
    //Base is rectangular and has a ball on its center
    let geometry = new THREE.BoxGeometry(20,20,2)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0x0000ff})
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(x,y,z)
    return mesh
}

function createArmBase(x,y,z) {
    let geometry = new THREE.SphereGeometry(2,20,20, 0, 2*Math.PI)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xffff00} )
    let base = new THREE.Mesh(geometry,material)
    base.position.set(x,y,z)
    return base
}

function createArm(x,y,z) {
    let geometry = new THREE.BoxGeometry(1,1,7)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xff0000} )
    let arm = new THREE.Mesh(geometry,material)
    arm.position.set(x,y,z)
    return arm
}

function createArmNode(x,y,z) {
    let geometry = new THREE.SphereGeometry(1.5,20,20)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xffffff})
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(x,y,z)
    return mesh
}

function createHandBase(x,y,z) {
    let geometry = new THREE.BoxGeometry(5,5,1)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xFFAAFF})
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(x,y,z)
    return mesh
}

function createFinger(x,y,z) {
    let geometry = new THREE.BoxGeometry(1,1,3)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xFFAABB})
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(x,y,z)
    return mesh
}

function createTarget(x, y, z) {
    let geometry = new THREE.TorusGeometry(1.5, 0.3, 10, 30)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0xFFFF00})
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(x,y,z)
    mesh.rotation.x = Math.PI / 2
    return mesh
}

function createTargetSupport(x, y, z) {
    let geometry = new THREE.BoxGeometry(2, 2, 24)
    let material = new THREE.MeshBasicMaterial({wireframe: true, color: 0x0FF500})
    let mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(x,y,z)

    return mesh
}

function traverseElements(obj) {
    if (obj instanceof THREE.Mesh)
        obj.material.wireframe = !obj.material.wireframe
    if (obj !== undefined) 
        for (i in obj.children) 
            traverseElements(obj.children[i])
}

function update() {
    if (keysMap[81] || keysMap[113]) { //Q or q
        angle2Mesh.rotation.y -= 0.015
        if (angle2Mesh.rotation.y < -90 * Math.PI / 180)
        angle2Mesh.rotation.y = -90 * Math.PI / 180
    }

    if (keysMap[87] || keysMap[119]) { //W or w
        angle2Mesh.rotation.y += 0.015
        if (angle2Mesh.rotation.y > 90 * Math.PI / 180)
        angle2Mesh.rotation.y = 90 * Math.PI / 180
    }

    if (keysMap[65] || keysMap[97]) { //A or a
        angle2Mesh.rotation.z -= 0.015
    }

    if (keysMap[83] || keysMap[115]) { //S or s
        angle2Mesh.rotation.z += 0.015
    }

    if(keysMap[37]){//left arrow key
        robot_arm.position.x -= 0.25
    }

    if(keysMap[38]){//up arrow key
        robot_arm.position.y += 0.25;
    }

    if(keysMap[39]){//right arrow key
        robot_arm.position.x += 0.25
    }

    if(keysMap[40]){//down arrow key
        robot_arm.position.y -= 0.25
    }

    if (wireframe) {
        traverseElements(scene);
        wireframe = false;
    }

}


var keysMap = {81: false, 113: false, 87: false, 119: false, 65: false, 97: false, 83: false, 115: false,
    37: false, 38: false, 39: false, 40: false}

function onKeyDown(e) {
    switch(e.keyCode) {
        case 49: //1
        active_camera = camera_top
        break
        case 50: //2
        active_camera = camera_side 
        break
        case 51: //3
        active_camera = camera_front
        break
        case 52: //4
        wireframe = true;
        break
    }

    if (e.keyCode in keysMap) {
        keysMap[e.keyCode] = true
    }
}

function onKeyUp(e) {
    if (e.keyCode in keysMap) {
        keysMap[e.keyCode] = false
    }
}

function createScene() {
    scene = new THREE.Scene()
    scene.add(new THREE.AxesHelper(5))
    
    robot_arm = new THREE.Object3D()

    //create base with wheels
    let base = createBase(0, 0, 0)
    base.add(createWheel(-6.5,-6.5, -3))
    base.add(createWheel(-6.5, 6.5, -3))
    base.add(createWheel(6.5, -6.5, -3))
    base.add(createWheel(6.5, 6.5, -3))
    
    
    //create robotic arm components
    let arm_base = createArmBase(0, 0, 1) //semi-sphere
    let forearm = createArm(0, 0, 5.5)
    let arm_joint = createArmNode(0, 0, 5)
    let arm = createArm(0,0,5)
    let hand_joint = createArmNode(0,0,5)
    let hand_base = createHandBase(0,0,2)
    let finger1 = createFinger(0,-2.4,2)
    let finger2 = createFinger(0,2.4,2)
    
    //create scene graph
    hand_base.add(finger1)
    hand_base.add(finger2)
    hand_joint.add(hand_base)
    arm.add(hand_joint)
    arm_joint.add(arm)
    forearm.add(arm_joint)
    arm_base.add(forearm)


    //final object: robot_arm
    robot_arm.add(arm_base)
    robot_arm.add(base)

    robot_arm.position.set(11.5,14.5,4)

    //create target
    let target = new THREE.Object3D()
    target.add(createTarget(40, 14.5, 26))
    target.add(createTargetSupport(40, 14.5, 12))

    scene.add(robot_arm)
    scene.add(target)

    angle3Mesh = arm_joint
    angle2Mesh = arm_base
    angle1Mesh = arm_base

    angle3Mesh.rotation.y = 90 * Math.PI / 180
}

function animate() {
    update()
    render()
    requestAnimationFrame(animate)
}

function onResize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
}

//setup of scene
function init() {
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement);

    createScene()
    createCameras()

    //React to user input
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("keyup", onKeyUp)
    window.addEventListener("resize", onResize)
    animate()
}