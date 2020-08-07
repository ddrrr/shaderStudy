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
    private _effect:cc.EffectAsset = null;

    start () {
        let spt:cc.Sprite = this.node.getComponent(cc.Sprite);
        if(spt){
            this._mtl = spt.getMaterial(0);
            if(this._mtl){
                this._effect = this._mtl.effect;
            }
        }
    }

    update(dt){
        this._startTime += 0.01;

        this._effect.setProperty('u_fTime',this._startTime);
    }

    // update (dt) {}
}
