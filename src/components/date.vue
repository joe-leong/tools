<template>
    <div>
        时间组件
    </div>
</template>

<script>
    export default {
        name:'dateCom',
        updated () {
        },
        mounted () {
            console.log(this.dealDate({year:2015,max:11,min:'',split:'-',reverse:true}));
        },
        methods: {
            dealDate({year=new Date().getFullYear(),min='',max='',split='/',reverse=false}) {
                /* 
                min:开始月份(返回值包含)
                max:结束月份（返回值包含）
                */
               let dateArr = []
                if(min && max){
                    dateArr =  [...new Array(max-min+1)].map((item,idx)=>{
                        if(idx<=max){
                            return `${year}${split}${max-min+idx-1}`
                        }
                    },[])
                    return reverse ? dateArr.reverse() : dateArr
                }
                if(min){
                    dateArr = [...new Array(12-min+1)].map((item,idx)=>{
                        if(idx<=12){
                            return `${year}${split}${min+idx}`
                        }
                    },[])
                    return reverse ? dateArr.reverse() : dateArr
                }
                if(max){
                    dateArr = [...new Array(max)].map((item,idx)=>{
                        if(idx<max){
                            return `${year}${split}${idx+1}`
                        }
                    },[])
                    return reverse ? dateArr.reverse() : dateArr
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>