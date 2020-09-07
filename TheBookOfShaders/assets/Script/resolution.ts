// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class resolution extends cc.Component {
    start () {
        let csize = this.node.getContentSize();

        let renderCmp = this.node.getComponent(cc.RenderComponent);
        if(renderCmp){
            let mtl = renderCmp.getMaterial(0);
            if(mtl){
                //mtl.setProperty('u_resolution',new cc.Vec2(csize.width,csize.height));
                let size = cc.view.getVisibleSizeInPixel();
                mtl.setProperty('u_resolution',new cc.Vec2(size.width,size.height));
            }
        }
    }

    // update (dt) {}
}
