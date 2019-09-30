class RoboticArm extends SceneObject {
    constructor(x, y, z) { 
        super()

        // add base
        let base = new RobotBase(x + 11.5, y + 14.5, z + 3)    
        this.add(base)
            
        // add arm
        let arm = new Arm(x + 11.5, y + 14.5, z + 2)
        this.add(arm)

        this.position.set(x, y, z)
    }

    update() {
        if(keysMap[37]){//left arrow key
            this.position.x -= 0.25
        }
    
        if(keysMap[38]){//up arrow key
            this.position.y += 0.25;
        }
    
        if(keysMap[39]){//right arrow key
            this.position.x += 0.25
        }
    
        if(keysMap[40]){//down arrow key
            this.position.y -= 0.25
        }

        let arm = this.children[1]
        arm.update()
    }
}