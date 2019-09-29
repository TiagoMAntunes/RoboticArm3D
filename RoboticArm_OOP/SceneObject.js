class SceneObject extends THREE.Object3D {
    constructor(x, y, z) {
        super()
        this.position.set(x, y, z)
    }

    createSceneObjBox(x, y, z, width, height, depth, material) {
        let geometry = new THREE.BoxGeometry(width, height, depth)
        let mesh = new THREE.Mesh(geometry, material)

        mesh.position.set(x, y, z)
        return mesh
    }

    createSceneObjSphere(x, y, z, radius, widthSegments, heightSegments, phiStart, phiLength, material) {
        let geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength)
        let mesh = new THREE.Mesh(geometry, material)
        
        mesh.position.set(x, y, z)
        return mesh
    }

    createSceneObjSphereRotY(x, y, z, radius, widthSegments, heightSegments, phiStart, phiLength, material, rotY) {
        let geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength)
        let mesh = new THREE.Mesh(geometry, material)
        
        mesh.position.set(x, y, z)
        mesh.rotation.y = rotY
        return mesh
    }

    createSceneObjCylinder(x, y, z, radiusTop, radiusBottom, height, radialSegments, material) {
        let geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
        let mesh = new THREE.Mesh(geometry, material)
        
        mesh.position.set(x, y, z)
        return mesh
    }

    createSceneObjTorusRotY(x, y, z, radius, tube, radialSegments, tubularSegments, material) {
        let geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments)
        let mesh = new THREE.Mesh(geometry, material)

        mesh.position.set(x, y, z)
        return mesh
    }
}