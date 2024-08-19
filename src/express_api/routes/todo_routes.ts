import { Router } from 'express'
import { todo_model_obj } from '../models/todo_model'

type req_body = { text: string }
type req_params = { todoId: string }

const todos: todo_model_obj[] = []

const router = Router()

router.get('/todo',(req,res)=>{
    res.status(200).json({todos: todos})
})

router.post('/todo',(req,res)=>{
    const body = req.body as req_body

    const new_todo:todo_model_obj = {
        id: new Date().toISOString(),
        text: body.text
    }
    todos.push(new_todo)
    res.status(201).json({message: 'ToDo Added Successfully'})
})

router.put('/todo/:todoId',(req,res)=>{
    const body = req.body as req_body
    const params = req.params as req_params

    const id = params.todoId
    const todo_index = todos.findIndex(todo_item => todo_item.id == id)
    if(todo_index>=0){
        todos[todo_index] = { id: todos[todo_index].id, text: body.text }
        res.status(201).json({message: 'ToDo Updated Successfully', ToDos: todos})
    }else{
        res.status(404).json({message: 'ToDo Not Found'})
    }
})

router.delete('/todo/:todoId',(req,res)=>{
    const params = req.params as req_params

    const id = params.todoId
    const todo_index = todos.findIndex(todo_item => todo_item.id == id)
    if(todo_index>=0){
        todos.splice(todo_index,1)
        res.status(200).json({message: 'ToDo Deleted Successfully', ToDos: todos})
    }else{
        res.status(404).json({message: 'ToDo Not Found'})
    }
})

export default router