// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class timer extends cc.Component {
    private _startTime:number = 0;
    private _mtl:cc.Material = null;

    start () {
        let spt:cc.Sprite = this.node.getComponent(cc.Sprite);
        if(spt){
            this._mtl = spt.getMaterial(0);
        }
    }

    update(dt){
        this._startTime += 0.01;

        this._mtl.setProperty('u_fTime',this._startTime);
    }

    // update (dt) {}
}
