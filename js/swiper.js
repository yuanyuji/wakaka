/**
 * Created by acer1 on 2017/09/01.
 */
var Swiper=function(ele,sL,sR){
    this.config={
        startX:0,
        step:10,
        callbackL:sL,
        callbackR:sR,
        ele:ele
    };
    this.init();
};
Swiper.prototype.sC=function(){
    this.config.startX=0;
    this.config.ele.removeEventListener('touchmove',this.onTouchMove);
};
Swiper.prototype.init=function(ele){
    var that=this;
    var curElement=this.config.ele;
    curElement.addEventListener('touchstart',function(event){
        that.touchStart(curElement,event);
    },false);
};
Swiper.prototype.touchStart=function(ele,event){
    var that=this;
    this.config.startX=event.changedTouches[0].clientX||event.clientX;
    ele.addEventListener('touchmove',function(event){
        that.touchMove(event);
    },false);
}
Swiper.prototype.touchMove=function(event){
    var moveX=event.changedTouches[0].clientX||event.clientX;
    var abX=Math.abs(this.config.startX-moveX)
    if(abX<this.config.step){
        this.sC();
    }else{
        if(this.config.startX>moveX){
            this.config.callbackL();
        }else{
            this.config.callbackR();
        }
    }

}
