class Forearm extends SceneObject {
    constructor(x, y, z,
        fax, fay, faz, aWIDTH, aHEIGHT, aDEPTH, armMAT,
        jx, jy, jz, jR, jWS, jHS, jbPS, jPL, jointMAT,
        hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT,
        f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
        f2x, f2y, f2z,
        handx, handy, handz) {

        super()

        // add hand joint
        this.addSceneObjSphere(this, jx, jy, jz, jR, jWS, jHS, jbPS, jPL, jointMAT)

        // add hand
        let hand = new Hand(handx, handy, handz,
            hbx, hby, hbz, hbWIDTH, hbHEIGHT, hbDEPTH, handBaseMAT,
            f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
            f2x, f2y, f2z)

        this.add(hand)

        //add arm
        this.addSceneObjBox(this, fax, fay, faz, aWIDTH, aHEIGHT, aDEPTH, armMAT)
		
		this.position.set(x, y, z)
    }
}