class RoboticArm extends SceneObject {
    constructor(x, y, z, 
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
        
        super()

        // add base
        let base = new RobotBase(basex, basey, basez, 
            bx, by, bz,  width, height, depth, baseMAT,
            w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
            wR, wWS, wHS, wPS, wPL, wheelMAT)
        
        this.add(base)
            
        // add arm
        let arm = new Arm(armx, army, armz,
            abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT, rotY,  // arm base 
            rotx, roty, rotz,   // rotation object
            ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,    //lower arm
            jx, jy, jz, jR, jWS, jHS, jbPS, jPL,    // arm joint
            fax, fay, faz,  // forearm
            j2x, j2y, j2z,  //hand joint
            hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT, // handbase
            f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,  // fingers
            f2x, f2y, f2z)

        this.add(arm)

        this.position.set(x, y, z)
    }

    update() {
        if(keysMap[37]){//left arrow key
            this.position.x -= 0.25
        }
    
        if(keysMap[38]){//up arrow key
            this.position.y += 0.25;
        }
    
        if(keysMap[39]){//right arrow key
            this.position.x += 0.25
        }
    
        if(keysMap[40]){//down arrow key
            this.position.y -= 0.25
        }

        let arm = this.children[1]
        arm.update()
    }
}