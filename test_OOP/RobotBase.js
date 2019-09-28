class RobotBase extends SceneObject {
    // bx -> base's x position
    // w1 -> wheel number 1
    // R -> radius, WS -> widthSegments, HS -> heightSegments
    // PS -> phiStart, PL -> phiLength, MAT -> material
     
    constructor(x, y, z, 
        bx, by, bz,  width, height, depth, material,
        w1x, w1y, w1z, w2x, w2y, w2z, w3x, w3y, w3z, w4x, w4y, w4z,
        wR, wWS, wHS, wPS, wPL, wheelMAT,
        abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT) {
        super()

        // add robot's base platform
        super.addSceneObjBox(this, bx, by, bz,  width, height, depth, material)

        // add robot's wheels
        super.addSceneObjSphere(this, w1x, w1y, w1z, wR, wWS, wHS, wPS, wPL, wheelMAT)
        super.addSceneObjSphere(this, w2x, w2y, w2z, wR, wWS, wHS, wPS, wPL, wheelMAT)
        super.addSceneObjSphere(this, w3x, w3y, w3z, wR, wWS, wHS, wPS, wPL, wheelMAT)
        super.addSceneObjSphere(this, w4x, w4y, w4z, wR, wWS, wHS, wPS, wPL, wheelMAT)

        // add arm base
        super.addSceneObjSphere(this, abx, aby, abz, abR, abWS, abHS, abPS, abPL, jointMAT)
        
        // position Robot's  Base
        this.position.set(x, y, z)
    }
}