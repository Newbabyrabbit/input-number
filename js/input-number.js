Vue.component('input-number',{
    props:{
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        },
        value:{
            type:Number,
            default:0
        }
    },
    template:"<div>\
                <h3>数字输入框</h3>\
                <input type='text' :value='currentVal' @change='handle'>\
                <button @click='down' :disabled='currentVal<=min'>-</button>\
                <button @click='up' :disabled='currentVal>=max'>+</button>\
              </div>",
    data:function(){
        return {
            currentVal:this.value
        }
    },
    methods:{
        up:function(){
            if(this.currentVal>=this.max)return;
            this.currentVal++;
        },
        down:function(){
            if(this.currentVal<=this.min)return;
            this.currentVal--;
        },
        isValueNumber:function(val){
            return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(val);
        },
        handle:function(e){                             // 作用主要是 “检测手动输入是否合法”
            var value = e.target.value.trim();
            var max = this.max;
            var min = this.min;
            if(this.isValueNumber(value)){
                if(value >= max){
                    this.currentVal = max;
                }
                if(value <= min){
                    this.currentVal = min;
                }
            }else{
                e.target.value = this.currentVal;       // 若不符合，则赋值为currentVal
            }
        }
    }
});