function DeleteTodo(data){
    return {
        type: "DELETE_TODO",
        payload: data
    }
}

export default DeleteTodo;