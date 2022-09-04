<template>
    <div class="footer" :handleDoneTask="handleDoneTask">
            <div class="checkbox">
                <input type="checkbox" style=" margin-right: 9px;">
                <span>completed {{completedTotal}}</span>
                /
                <span>all {{all}}</span>
            </div>
            <button class="comletedBtn" @click="clearCompletedTask()">clear completed task</button>
    </div>
</template>

<script>
    export default {
        name:'Footer',
        props:['todos', 'handleDoneTask'],
        data() {
            return {
                doneArr:[]
            }
        },
        computed:{
            all(){
                return this.todos.length
            },
            completedTotal(){
                return this.todos.reduce((pre,current)=>{
                    return pre + (current.done ? 1 : 0)
                },0)
            }
        },
        methods:{
            clearCompletedTask(){
                let arr = [];
                arr = this.todos.filter((item)=>{
                    return item.done !== true;
                })
                if(arr.length == this.todos.length){
                    alert('please select done item')
                }else{
                    this.handleDoneTask(arr); 
                }
                
            }
        }
    }
</script>

<style scoped>
    .checkbox{
        margin-left: 13px;
    }
    .footer{
        display: flex;
        justify-content: space-between;
    }
    .comletedBtn{
        border: none;
        padding: 5px;
        background: #d87d7d;
        color: white;
        border-radius: 5px;
    }
</style>