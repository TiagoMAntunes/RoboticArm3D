class Target extends SceneObject {
    constructor(x, y, z,
        rx, ty, tz, radius, tube, radialSegments, tubularSegments, targetMAT, rotX, rotY,
        sx, sy, sz, radiusTop, radiusBottom, height, SupRadialSegments, supMAT, supRotX) {

        super()

        let target = super.createSceneObjTorusRotXY(rx, ty, tz, radius, tube, radialSegments, tubularSegments, targetMAT, rotX, rotY)
        let support = super.createSceneObjCylinderRotX(sx, sy, sz, radiusTop, radiusBottom, height, SupRadialSegments, supMAT, supRotX)
        
        this.add(target)
        this.add(support)

        this.position.set(x, y, z)
    }
}