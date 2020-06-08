<template>
    <div>
        <form @submit.prevent="addTodo1">
            <input type="text" v-model="title" name="title" placeholder="Add a new task..">
            <button type="submit" value="Submit" class="btn"></button>
        </form>
    </div>
</template>

<script>
    //import { v4 as uuidv4 } from 'uuid'
    export default  {
        name: "AddTodo",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addTodo1() {
                //e.preventDefault();
                const newTodo = {
                    //id: uuidv4(),
                    title: this.title,
                    completed: false
                }
                //send up to parent
                this.$emit('add-todo', newTodo);
                this.title = '';
            }
        }
    }

</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="submit"] {
        flex: 2;
    }
</style>