class Hand extends SceneObject {
    constructor(x, y, z, 
        basex, basey, basez, baseWIDTH, baseHEIGHT, baseDEPTH, baseMAT,
        f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT,
        f2x, f2y, f2z) {

            super()
            // add hand base
            super.addSceneObjBox(this, basex, basey, basez, baseWIDTH, baseHEIGHT, baseDEPTH, baseMAT)
            
            // add fingers
            super.addSceneObjBox(this, f1x, f1y, f1z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT)
            super.addSceneObjBox(this, f2x, f2y, f2z, fWIDTH, fHEIGHT, fDEPTH, fingerMAT)
        
            this.position.set(x, y, z)
        }
}