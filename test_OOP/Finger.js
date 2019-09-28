class Finger extends SceneObject {
    constructor(x, y, z, fx, fy, fz, width, height, depth, material) {
        super()
        
        this.addSceneObjBox(this, fx, fy, fz, width, height, depth, material)
        this.position.set(x, y, z)
    }
}