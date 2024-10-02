class Entity{
    constructor(title, description, priority = 0, completed = false){
        this.id = Math.floor(Math.random()*10000)
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
    complete_all_subs(){
        this.subtasks.forEach((sub)=>{
            sub.completed = true
        })
    }
    check_subs(){
        let all_subs_completed = true
        this.subtasks.forEach((sub)=>{
            if(sub.completed == false) all_subs_completed = false
        })
        if(all_subs_completed) this.completed = true
        else this.completed = false
        
    }
    static todo_in_project(todo_id, project_t){
        let response = {
            changed : true,
            todo : Todo.find_todo(todo_id)
        }
        Project.projects.forEach(prj=>{
            if(prj.title == project_t){
                prj.todos.forEach(todo=>{          
                    if(todo.id == todo_id) {
                        response.changed = false
                    }
                })
            }
        })
        return response
    }
    static find_todo(id){
        let response = false
        Project.projects.forEach(prj=>{
            prj.todos.forEach(todo=>{
                if (todo.id == id){
                    response = todo
                }
            })
        })
        return response
    }
}   

class SubTask extends Entity{
    constructor(title, description, priority, completed = false){
        super(title, description, priority, completed)
    }
    static find_subtask(id){
        let response = false
        Project.projects.forEach(prj=>{
            prj.todos.forEach(todo=>{
                todo.subtasks.forEach(sub=>{
                    if (sub.id == id){
                        response = sub
                    }
                })
            })
        })
        return response
    }
    static find_parent_todo(sub_title){
        let parent_todo
        Project.projects.forEach(prj=>{
            prj.todos.forEach(todo=>{
                todo.subtasks.forEach(sub=>{
                    if(sub.title == sub_title){
                        parent_todo = todo
                    }
                })
            })
        })
        return parent_todo
    }
    check_parent_todo(){
        let parent_todo = SubTask.find_parent_todo(this.title)

        if(parent_todo.completed){
            parent_todo.subtasks.forEach((sub)=>{
                sub.completed = true
            })
        }
        
    }
}

class Project extends Entity{
    static projects = []
    constructor(title, description, priority = 0, completed = false, todos = []){
        super(title, description, priority, completed)
        this.todos = todos
    }
    addTodo(todo){
        this.todos.push(todo)
        todo.project = this.title
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
        this.completed = completed
        
        
    }
    static find_project(title){
        let response = false
        Project.projects.forEach(prj=>{
            if (prj.title == title){
                response = prj
            }
        })
        return response
    }
}
export {Project, Todo, SubTask}
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

