class Entity{
    constructor(title, description, priority = 0, completed = false){
        this.title = title
        this.description = description
        this.priority = priority
        this.completed = completed
    }
    todoToggleCompletion(){
        this.completed ? this.completed = false : this.completed = true
    }
    increasePriority(){
        this.priority >= 3 ? 0 : this.priority += 1
    }
    decreasePriority(){
        this.priority == 0 ? 0 : this.priority -= 1
    }
}
class Todo extends Entity{
    constructor(title, description, dueDate, priority, note = '', completed = false,subtasks = [], project = 'default'){
        super(title, description, priority, completed)
        // this.dueDate = `${dueDate.getDate()}/0${dueDate.getMonth()+1}/${dueDate.getFullYear()}`
        this.dueDate = dueDate 
        this.note = note
        this.subtasks = subtasks
        this.project = project
    }
    addNote(content){
        this.note = content
    }
    changeProject(newProject){        
        this.project = newProject
    }
    addSubtask(newSub){
        this.subtasks.push(newSub)
    }
    removeSubtask(removedSub){
        this.subtasks = this.subtasks.filter((sub)=>{
            return sub != removedSub
        })
    }
}   

class SubTask extends Entity{
    constructor(title, description, priority, completed = false){
        super(title, description, priority, completed)
    }
}

class Project extends Entity{
    constructor(title, description, priority = 0, completed = false, todos = []){
        super(title, description, priority, completed)
        this.todos = todos
    }
    addTodo(todo){
        this.todos.push(todo)
    }
    removeTodo(removedTodo){
        this.todos = this.todos.filter((todo)=>{
            return todo != removedTodo
        })
    }
    checkCompleted(){
        let completed = true
        this.todos.forEach(todo =>{
            if(todo.completed == false){
                completed = false
            }
        })
        return completed
        
        
    }
}
export {Project, Todo}
let ch = new SubTask('finish HK', 'asd', 2)
let today = new Date('2024-05-22')

let p1 = new Project('school', 'asd', 1)

let p2 = new Project('work', 'working', 2)

let todo_1 = new Todo('learn html', 'is markup language', today, 1, 'nothing', false, [], p1) 
todo_1.addSubtask(ch)
// todo_1.removeSubtask(ch)
// console.log(todo_1);

let todo_2 = new Todo('learn css', 'is styling language', today, 2, 'nothing', false, [], p1) 

todo_1.addSubtask(ch)


p1.addTodo(todo_1)
p1.addTodo(todo_2)

// p1.removeTodo(todo_1)
// p1.removeTodo(todo_2)

// todo_1.todoToggleCompletion()
// todo_2.todoToggleCompletion()
// console.log(p1.checkCompleted())

