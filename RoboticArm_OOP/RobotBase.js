class RobotBase extends SceneObject {
    // bx -> base's x position
    // w1 -> wheel number 1
    // R -> radius, WS -> widthSegments, HS -> heightSegments
    // PS -> phiStart, PL -> phiLength, MAT -> material
     
    constructor(x, y, z, 
            bx, by, bz,  width, height, depth, baseMAT,
            w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
            wR, wWS, wHS, wPS, wPL, wheelMAT) {

        super()

        // add robot's base platform
        let base = super.createSceneObjBox(bx, by, bz,  width, height, depth, baseMAT)
        this.add(base)

        // add robot's wheels
        let wheel1 = super.createSceneObjSphere(w1x, w1y, w1z, wR, wWS, wHS, wPS, wPL, wheelMAT)
        let wheel2 = super.createSceneObjSphere(w2x, w2y, w2z, wR, wWS, wHS, wPS, wPL, wheelMAT)
        let wheel3 = super.createSceneObjSphere(w3x, w3y, w3z, wR, wWS, wHS, wPS, wPL, wheelMAT)
        let wheel4 = super.createSceneObjSphere(w4x, w4y, w4z, wR, wWS, wHS, wPS, wPL, wheelMAT)

        base.add(wheel1)
        base.add(wheel2)
        base.add(wheel3)
        base.add(wheel4)
      
        // position Robot's  Base
        this.position.set(x, y, z)
    }
}