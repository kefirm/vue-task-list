import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }

})

export default {
    getTodos() {
        return apiClient.get('/todos?_limit=7')
    },
    getTodo(id){
        return apiClient.get('/todos/' + id)
    },
    deleteTodo(id){
        return apiClient.delete('/todos/' + id)
    },
    addTodo(title, completed){
        return apiClient.post('/todos', {title, completed})

    }
}