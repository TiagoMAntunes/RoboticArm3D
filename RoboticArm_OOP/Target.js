class Target extends SceneObject {
    constructor(x, y, z) {
        super()

        let targetMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0xFFFF00})
        let supMAT = new THREE.MeshBasicMaterial({wireframe: true, color: 0x000000})

        let target = super.createSceneObjTorusRotXY(0, 0, 12, 1.5, 0.3, 10, 30, targetMAT.clone(), Math.PI / 2, Math.PI / 2)
        let support = super.createSceneObjCylinderRotX(0, 0, 5, 1, 1, 10, 20, supMAT.clone(), Math.PI / 2)
        
        this.add(target)
        this.add(support)

        this.position.set(x, y, z)
    }
}