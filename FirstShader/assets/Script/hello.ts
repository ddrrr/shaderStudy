// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class hello extends cc.Component {

    private _startTime:number = 0;
    private _mtl = null 
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //this._mat
    }

    update () {
        this._startTime += 0.01;
    }
}
