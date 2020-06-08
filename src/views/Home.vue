<template>
  <div id="app">
    <!--<Header />-->
    <AddTodo                    v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
  import EventService from "../../services/EventService";
  import Todos from '../components/Todos';
  //import Header from "../components/layout/Header";
  import AddTodo from "../components/AddTodo";
  //import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      //Header,
      Todos,
      AddTodo

    },
    data() {

      return {
        todos: []
      }
    },
    methods: {


      deleteTodo(id) {
        EventService.deleteTodo(id)
        //axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then( res => {this.todos = this.todos.filter(todo => todo.id !== id)
                  console.log(res)
                })
                .catch(err => console.log(err));


      },
      addTodo(newTodo){
       /* let config = {
          headers: {
            'header': ('Access-Control-Allow-Origin', '*')
          }
        }*/ //problem with cors

        const {title, completed} = newTodo;
        EventService.addTodo(title, completed)
        /*axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed
        }, config)*/
                .then(res => this.todos = [...this.todos, res.data])
                .catch(err => console.log(err));
      }
    },
    created() {
      EventService.getTodos()
              .then(res => this.todos = res.data)
              .catch(err => console.log(err));
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetiva, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
