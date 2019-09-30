class Arm extends SceneObject {
    constructor(x, y, z) { 
        super()

        // create materials
        let jointMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x383836})
        let armMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0xc2c9cf})
        let handBaseMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x41576b})
        let fingerMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x6e7574})

        // create components
        let arm_base = super.createSceneObjSphere(0, 0, 2, 2, 20, 20, 0, Math.PI, jointMAT.clone())
        let rot_obj = new SceneObject(0, 0, 0)
        let lower_arm = super.createSceneObjBox(0, 0, 4.5, 1, 1, 7, armMAT.clone())
        let lower_joint = super.createSceneObjSphereRotY(0, 0, 5, 1.5, 20, 20, 0, 2 * Math.PI, jointMAT.clone(), 90 * Math.PI / 180)
        let forearm = super.createSceneObjBox(0, 0, 5, 1, 1, 7, armMAT.clone())// arm base
        let hand_joint = super.createSceneObjSphere(0, 0, 5, 1.5, 20, 20, 0, 2 * Math.PI,jointMAT.clone())
        let hand_base = super.createSceneObjBox(0, 0, 2, 5, 5, 1, handBaseMAT.clone())
        let finger1 = super.createSceneObjBox(0, -2, 2, 1, 1, 3, fingerMAT.clone())
        let finger2 = super.createSceneObjBox(0, 2, 2, 1, 1, 3, fingerMAT.clone())
        
        // add components
        hand_base.add(finger1)
        hand_base.add(finger2)
        hand_joint.add(hand_base)
        forearm.add(hand_joint)
        lower_joint.add(forearm)
        lower_arm.add(lower_joint)
        rot_obj.add(lower_arm)
        arm_base.add(rot_obj)
        this.add(arm_base)   

        this.position.set(x, y, z)
    }

    getRotationObject() {
        let arm_base = this.children[0]
        return arm_base.children[0]
    }

    update() {
        let rot_obj = this.getRotationObject()
        if (keysMap[81] || keysMap[113]) { //Q or q
            rot_obj.rotation.y -= 0.015
            if (rot_obj.rotation.y < -50 * Math.PI / 180)
            rot_obj.rotation.y = -50 * Math.PI / 180
        }
    
        if (keysMap[87] || keysMap[119]) { //W or w
            rot_obj.rotation.y += 0.015
            if (rot_obj.rotation.y > 50 * Math.PI / 180)
            rot_obj.rotation.y = 50 * Math.PI / 180
        }
    
        if (keysMap[65] || keysMap[97]) { //A or a
            rot_obj.rotation.z -= 0.015
        }
    
        if (keysMap[83] || keysMap[115]) { //S or s
            rot_obj.rotation.z += 0.015
        }
    }
}