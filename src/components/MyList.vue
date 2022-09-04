<template>
    <section>
        <ul>
            <MyItem v-for="todoObj in todos" :key="todoObj.id" :todoObj="todoObj" :handleDone="handleDone"  @handleItemDelete="itemDelete" @updateList="handleUpdateList"/>
        </ul>
    </section>
</template>

<script>
    import MyItem from './MyItem';  
    export default {
        name:'myList',
        components:{MyItem},
        props:['todos',"handleDone","handleDelete"],
        data(){
            return{
            }
        },
        methods:{
            itemDelete(id){
                console.log('be deleted id ', id);
                this.todos = this.todos.filter((item)=>{
                    return item.id !== id
                })
            },
            handleUpdateList(obj,value){
                if(value == ''){
                    alert('please don not input no value')
                    return
                }
                this.todos.forEach(item => {
                    return {
                        done:item.done,
                        id:item.id,
                        txt:item.id == obj.id ? item.txt = value : item.txt
                    }
                });
                
            }
        }
    }
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }
</style>