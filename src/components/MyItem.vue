<template>
    <li class="item" >
        <input type="checkbox" style="margin-right:10px" @click="handelCheck" >    
        <span v-show="inputShow" style="width:90%">{{this.todoObj.txt}}</span>
        <input  :value="todoObj.txt" style="border: none;width:90%" v-show="!inputShow" @blur="handleBlur(todoObj,$event)" ref="inputFocus">
        <div style="width: 5%;display: flex;">
            <span type="button"  @click="handleEdit(todoObj)" v-show="this.inputShow">   
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </span>
            <span type="button" class="removeBtn" @click="removeTodo(todoObj.id)">   
                <i class="fa fa-times-circle" aria-hidden="true" ></i>
            </span>
        </div>    
    </li>
</template>

<script>
    export default {
        name:'MyItem',
        props:['todoObj'],
        data(){
            return{
                completedSum:0,
                inputShow:true
            }
        },
        methods:{
            handelCheck(e){
                this.todoObj.done = e.target.checked
            },
            removeTodo(id){
                this.$emit('handleItemDelete',id)
            },
            handleEdit(todoObj){
                
                this.inputShow = false
                this.$set(todoObj,'isEdit',true)
                this.$nextTick(function(){
                    this.$refs.inputFocus.focus()
                })
            },
            handleBlur(todoObj,e){
                this.inputShow = true;
                this.$emit('updateList',todoObj,e.target.value)
            }
        }
    }
</script>

<style scoped>
    .item{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: #fff;
        border-radius: 5px;
        margin-top: 20px;
    }
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }
</style>