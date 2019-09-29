class Arm extends SceneObject {
    constructor(x, y, z,
        abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT, rotY,   // arm base 
        rotx, roty, rotz,   // rotation object
        ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,    //lower arm
        jx, jy, jz, jR, jWS, jHS, jbPS, jPL,    // arm joint
        fax, fay, faz,  // forearm
        j2x, j2y, j2z,  //hand joint
        hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT, // handbase
        f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,  // fingers
        f2x, f2y, f2z) {
        
        super()

        // arm base
        let arm_base = super.createSceneObjSphere(abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT)
        this.add(arm_base)

        // arm rotation assist
        let rot_obj = new SceneObject(rotx, roty, rotz)
        arm_base.add(rot_obj)

        // add lower arm
        let lower_arm = super.createSceneObjBox(ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT)
        rot_obj.add(lower_arm)

        // add lower joint
        let lower_joint = super.createSceneObjSphereRotY(jx, jy, jz, jR, jWS, jHS, jbPS, jPL, jointMAT, rotY)
        lower_arm.add(lower_joint)

        //add arm
        let forearm = super.createSceneObjBox(fax, fay, faz, aWIDTH, aHEIGHT, aDEPTH, armMAT)
        lower_joint.add(forearm)

        //add handjoint
        let hand_joint = super.createSceneObjSphere(j2x, j2y, j2z, jR, jWS, jHS, jbPS, jPL, jointMAT)
        forearm.add(hand_joint)

        // add hand base
        let hand_base = super.createSceneObjBox(hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT)
        hand_joint.add(hand_base)
        
        // add fingers
        let finger1 = super.createSceneObjBox(f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT)
        let finger2 = super.createSceneObjBox(f2x, f2y, f2z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT)
        hand_base.add(finger1)
        hand_base.add(finger2)

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
            if (rot_obj.rotation.y < -90 * Math.PI / 180)
            rot_obj.rotation.y = -90 * Math.PI / 180
        }
    
        if (keysMap[87] || keysMap[119]) { //W or w
            rot_obj.rotation.y += 0.015
            if (rot_obj.rotation.y > 90 * Math.PI / 180)
            rot_obj.rotation.y = 90 * Math.PI / 180
        }
    
        if (keysMap[65] || keysMap[97]) { //A or a
            rot_obj.rotation.z -= 0.015
        }
    
        if (keysMap[83] || keysMap[115]) { //S or s
            rot_obj.rotation.z += 0.015
        }
    }
}