class RoboticArm extends SceneObject {
    constructor(x, y, z, 
        basex, basey, basez,
        bx, by, bz,  width, height, depth, baseMAT,
        w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
        wR, wWS, wHS, wPS, wPL, wheelMAT,
        abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT,
        armx, army, armz,
        forearmx, forearmy, forearmz,
        jx, jy, jz, jR, jWS, jHS, jbPS, jPL,
        ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,
        fax, fay, faz, 
        j2x, j2y, j2z,
        handx, handy, handz,
        hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT,
        f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
        f2x, f2y, f2z) {
        
        super()

        // add base
        let base = new RobotBase(basex, basey, basez, 
            bx, by, bz,  width, height, depth, baseMAT,
            w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
            wR, wWS, wHS, wPS, wPL, wheelMAT,
            abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT)
        
        this.add(base)
            
        // add arm
        let arm = new Arm(armx, army, armz,
            forearmx, forearmy, forearmz,
            jx, jy, jz, jR, jWS, jHS, jbPS, jPL, jointMAT,
            ax, ay, az, aWIDTH, aHEIGHT, aDEPTH, armMAT,
            fax, fay, faz, 
            j2x, j2y, j2z,
            handx, handy, handz,
            hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT,
            f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
            f2x, f2y, f2z)

        this.add(arm)

        this.position.set(x, y, z)
    }
}