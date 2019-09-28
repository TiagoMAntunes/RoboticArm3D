class Arm extends SceneObject {
    constructor(x, y, z,
        forearmx, forearmy, forearmz,
        jx, jy, jz, jR, jWS, jHS, jbPS, jPL, jointMAT,
        ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,
        fax, fay, faz, 
        j2x, j2y, j2z,
        handx, handy, handz,
        hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT,
        f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
        f2x, f2y, f2z) {
        
        super()

        // add forearm
        let forearm = new Forearm(forearmx, forearmy, forearmz,
            fax, fay, faz, aWIDTH, aHEIGHT, aDEPTH, armMAT,
            j2x, j2y, j2z, jR, jWS, jHS, jbPS, jPL, jointMAT,
            handx, handy, handz,
            hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT,
            f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
            f2x, f2y, f2z)

        this.add(forearm)

        // add lower joint
        this.addSceneObjSphere(this, jx, jy, jz, jR, jWS, jHS, jbPS, jPL, jointMAT)

        // add lower arm
        this.addSceneObjBox(this, ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT)

        this.position.set(x, y, z)
    }
}