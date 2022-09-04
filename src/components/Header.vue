<template>
<div>
    <h1>todo</h1>
    <div class="inputBox shadow">
        <input class="input" type="text" placeholder="please type something " v-model="inputTxt" @keyup.enter="typeVal">
        <span class="addTodo" @click="handleInputTxt">
            add
            <i data-v-54a6d7c7="" aria-hidden="true" class="addBtn fa fa-plus"></i>
        </span>
    </div>
</div>
    
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {
                inputTxt:''
            }
        },
        props:["handleInput"],
        methods:{
            handleInputTxt(){
                this.handleInput(this.inputTxt)
                this.inputTxt = ''
            },
            typeVal(e){
                this.handleInput(e.target.value)
                this.inputTxt = ''
            }
        }
    }
</script>

<style scoped>
    .inputBox{
        background: #fff;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
    .shadow{
        box-shadow: 5px 10px 10px #e1e1e1
    }
    .input{
        width: 80%;
        border-style: none;
        font-size: .9rem;
    }
    .addTodo{
        width: 10%;
        text-align: center;
        background: #f2f2f2;
    }
</style>