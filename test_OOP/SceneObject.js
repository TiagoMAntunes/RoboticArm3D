class SceneObject extends THREE.Object3D {
    constructor() {
        super()
    }

    addSceneObjBox(obj, x, y, z, width, height, depth, material) {
        let geometry = new THREE.BoxGeometry(width, height, depth)
        let mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(x, y, z)
        obj.add(mesh)
    }

    addSceneObjSphere(obj, x, y, z, radius, widthSegments, heightSegments, phiStart, phiLength, material) {
        let geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength)
        let mesh = new THREE.Mesh(geometry, material)
        
        mesh.position.set(x, y, z)
        obj.add(mesh)
    }

    addSceneObjCylinder(obj, x, y, z, radiusTop, radiusBottom, height, radialSegments, material) {
        let geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments)
        let mesh = new THREE.Mesh(geometry, material)
        
        mesh.position.set(x, y, z)
        obj.add(mesh)
    }

    addSceneObjTorusRotY(obj, x, y, z, radius, tube, radialSegments, tubularSegments, material) {
        let geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments)
        let mesh = new THREE.Mesh(geometry, material)

        mesh.position.set(x, y, z)
        obj.add(mesh)
    }


}