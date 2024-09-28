class Entity{
    constructor(title, description, priority = 0, completed = false){
        this.title = title
        this.description = description
        this.priority = priority
        this.completed = completed
    }
    todo_toggle_completion(){
        this.completed ? this.completed = false : this.completed = true
    }
    increase_priority(){
        this.priority >= 3 ? 0 : this.priority += 1
    }
    decrease_priority(){
        this.priority == 0 ? 0 : this.priority -= 1
    }
}
class Todo extends Entity{
    constructor(title, description, dueDate, priority, note = '', completed = false,subtasks = [], project = 'default'){
        super(title, description, priority, completed)
        this.dueDate = `${dueDate.getDate()}/0${dueDate.getMonth()+1}/${dueDate.getFullYear()}` 
        this.note = note
        this.subtasks = subtasks
        this.project = project
    }
    add_note(content){
        this.note = content
    }
    change_project(project){
        this.project = project
    }
    add_subtask(new_sub){
        this.subtasks.push(new_sub)
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
    add_todo(todo){
        this.todos.push(todo)
    }
}
let ch = new SubTask('finish HK', 'asd', 2)
let today = new Date('2024-05-22')
let todo_1 = new Todo('learn html', 'is markup language', today, 1, 'nothing', false) 

todo_1.add_subtask(ch)
// ch.todo_toggle_completion()
// ch.decrease_priority()
// console.log(todo_1);

let p1 = new Project('school', 'asd', 1)
p1.add_todo(todo_1)
console.log(p1);    
