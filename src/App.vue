<template>
  <div id="app">
    <Header :handleInput="handleInput"/>
    <MyList :todos="todos" :handleDone="handleDone"  />
    <Footer :todos="todos" :doneTotal="doneTotal" :handleDoneTask="handleDoneTask" />
  </div>
</template>

<script>
  import MyList from './components/MyList';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import {nanoid} from 'nanoid'
  
  export default {
    name: 'App',
    components: {
        MyList, Header, Footer
    },
    data(){
      return{
        todos:[
        ],
        doneTotal:''
      }
    },
    methods:{
      handleInput(val){
        this.todos.unshift({
            id:nanoid(),
            txt:val,
            done:false
        })
      },
      handleDone(value){
        this.doneTotal = value
      },
      handleDoneTask(doneTask){
        console.log('doneTask', doneTask)
        this.todos = doneTask;
      },


    }
  }
</script>

<style>

</style>
