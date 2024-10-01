import { Project, SubTask, Todo } from "./todos-module";
class Dom{
    static projects = []
    static detailsBox = document.querySelector('.details')
    static notification(title, content, color){
        let notificationDiv = document.createElement('div')
        notificationDiv.className = 'notification'
        
        let title_h1 = document.createElement('h1')
        title_h1.textContent = title
        title_h1.style.backgroundColor = color
        let content_p = document.createElement('p')
        content_p.textContent = content

        notificationDiv.append(title_h1)
        notificationDiv.append(content_p)
        Dom.detailsBox.append(notificationDiv)
    }
    static projectForm(){
        let form = document.createElement('form')
        form.id = 'project_form'
        let labels = [
            'title', 'description', 'priority'
        ]
        labels.forEach(label=>{
            let newLabel = document.createElement('label')
            newLabel.textContent = label
            form.append(newLabel)

            if(label != 'priority'){
                form.append(Dom.createInput('text', label))
            }
            else{
                form.append(Dom.createInput('number', label))
            }

        })
        let submitBtn = document.createElement('input')
        submitBtn.type = 'submit'
        submitBtn.value = 'Add Project'
        submitBtn.id = 'add_project'
        form.append(submitBtn)
        Dom.detailsBox.append(form)

        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            let title = document.querySelector('#title').value
            let description = document.querySelector('#description').value
            let priority = document.querySelector('#priority').value
            let newProject = new Project(title, description, priority)
            Project.projects.push(newProject)
        })
    }
    static todoForm(){
        let form = document.createElement('form')
        form.id = 'todo_form'
        let labels = [
            'title', 'description', 'dueDate', 'priority', 'note' , 'project'
        ]
        labels.forEach(label=>{
            let newLabel = document.createElement('label')
            newLabel.textContent = label
            form.append(newLabel)

            if(label == 'priority'){
                form.append(Dom.createInput('number', label))
            }
            else if(label == 'dueDate'){
                form.append(Dom.createInput('date', label))
            }
            else if(label == 'project'){
                form.append(Dom.createSelect(Project.projects, 'project'))
            }
            else {
                form.append(Dom.createInput('text', label))
            }

        })
        let submitBtn = document.createElement('input')
        submitBtn.type = 'submit'
        submitBtn.value = 'Add Task'
        submitBtn.id = 'add_task'
        form.append(submitBtn)
        Dom.detailsBox.append(form)

        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            let title = document.querySelector('#title').value
            let description = document.querySelector('#description').value
            let priority = document.querySelector('#priority').value
            let dueDate = document.querySelector('#dueDate').value
            let note = document.querySelector('#note').value
            // let project = JSON.parse(document.querySelector('#project').value)
            let project = document.querySelector('#project').value
            Project.projects.forEach(proj=>{
                if(project == proj.title){
                    proj.addTodo(new Todo(title, description, dueDate, priority, note, false, [], project))
                }
            })
            // let newProject = new Todo(title,description, dueDate, priority, note, false, [], project)
            console.log(Project.projects);
            
        })
    }
    static createInput(type, id){
        let newInput = document.createElement('input')
        newInput.type = type
        newInput.id = id
        return newInput
    }
    static createSelect(listObj, id){
        let newSelect = document.createElement('select')
        newSelect.id = id

        listObj.forEach(obj=>{
            let new_option = document.createElement('option')
            new_option.textContent = obj.title
            // new_option.value = JSON.stringify(obj)
            newSelect.append(new_option)

        })

        return newSelect
    }
    static refreshDetailsCont(){
        let detailsCont = document.querySelector('.details')
        detailsCont.textContent = ''
    }
    static getAllTodos(){
        let allTodos = []
        Project.projects.forEach(prj =>{
            prj.todos.forEach(todo =>{
                allTodos.push(todo)
            })
        })
        return allTodos
    }
    static showAllProjects(){
        Dom.refreshDetailsCont()
        let projects = Project.projects
        projects.forEach(prj=>{
            let prjCont = document.createElement('div')
            prjCont.className = 'project'

            let title = document.createElement('h1')
            title.textContent = prj.title
            prjCont.append(title)

            let prj_desc = document.createElement('p')
            prj_desc.textContent = prj.description
            prj_desc.className = 'prj_desc'
            prjCont.append(prj_desc)

            let todosList = document.createElement('ul')
            todosList.className = 'todos'
            todosList.id = prj.title
            this.createList(prj.todos, todosList, false, 'todos')
            prjCont.append(todosList)

            
            Dom.detailsBox.append(prjCont)
            let todosLiList = document.querySelectorAll(`#${prj.title} > li`)
            todosLiList.forEach(li=>{
                let subtasks = JSON.parse(li.dataset.subtasks)
                let subtasksUl = document.createElement('ul')
                subtasks.forEach(sub=>{
                    let li = document.createElement('li')
                    
                    let checkBox = document.createElement('input')
                    checkBox.type = 'checkbox'
                    
                    li.append(checkBox)
                    Dom.completeSubtask(sub, checkBox, li)
                    li.append(document.createTextNode(sub.title))
                    
                    if (sub.completed) {
                        li.style.color = 'green'
                        checkBox.checked = true
                    }
                    subtasksUl.append(li)
                }) 
                li.append(subtasksUl)
            })
            
        })
    }
    static showAllTodos(){
        Dom.refreshDetailsCont()
        let todos = Dom.getAllTodos()
        todos.forEach(todo=>{
            let todoCont = document.createElement('div')
            if(todo.completed) todoCont.style.borderColor = 'green'
            todoCont.className = 'todo'
            todoCont.dataset.todo = JSON.stringify(todo)
            Dom.modify_btn(todoCont)
            
            let prj_title = document.createElement('h3')
            prj_title.textContent = todo.project

            let title = document.createElement('h1')
            title.textContent = todo.title

            let desc = document.createElement('p')
            desc.textContent = todo.description

            let date = document.createElement('i')
            date.textContent = todo.dueDate
            
            let subTasks = document.createElement('ul')
            subTasks.className = 'subTasks'

            let note = document.createElement('p')
            note.textContent = todo.note

            
            this.createList(todo.subtasks, subTasks, true, 'subs')

            todoCont.append(prj_title)
            todoCont.append(title)
            todoCont.append(date)
            todoCont.append(desc)
            Dom.detailsBox.append(todoCont)
            
            todoCont.onclick = ()=>{
                // todoCont.style.height = '50vh'
                todoCont.append(subTasks)
                todoCont.append(note)
                // Dom.createList(todo.subtasks, todoCont, true)
                // console.log(todo.subtasks);
                
            }
            let current_project = Project.find_project(todo.project)
            let del_btn = document.createElement('button')
            del_btn.textContent = 'Delete'
            todoCont.append(del_btn)
            del_btn.onclick = ()=> {
                console.log(current_project.todos);
                current_project.removeTodo(todo)
                console.log(current_project.todos);
                Dom.showAllTodos()
            }
        })
    }
    static createList(list, container, subTasks = false, type = ''){
        
        list.forEach(element=>{
            
            // if(type == 'subs')
            
            let li = document.createElement('li')
            let checkBox = document.createElement('input')
            checkBox.type = 'checkbox'
            li.append(checkBox)
            
            li.append(document.createTextNode(element.title))

            if (element.completed) {
                li.style.color = 'green'
                checkBox.checked = true
            }
            if(!subTasks){

                let i = document.createElement('i')
                i.textContent = element.dueDate
                li.append(i)
                
                li.dataset.subtasks = JSON.stringify(element.subtasks)
            }
            else{
                // console.log('a');
                
            }
            container.append(li)

            this.completeTodo(element, checkBox, li)

            if(type == 'todos') {
                // console.log(element);
                element.check_subs()
            }
            else if(type == 'subs'){
                element.check_parent_todo()
            }
        })
    }
    static completeTodo(todo, checkboxInp, li){
        checkboxInp.addEventListener('change', ()=>{
            todo.todoToggleCompletion()
            if(checkboxInp.checked){
                li.style.color = 'green'
            }
            else{
                li.style.color = 'black'
            }
            // Dom.showAllTodos()
            // Dom.showAllProjects()
            console.log(todo);
            
        })
    }
    static completeSubtask(subtask, checkboxInp, li){
        let sub = SubTask.find_subtask(subtask.id)
        
        checkboxInp.addEventListener('change', ()=>{
            sub.todoToggleCompletion()
            if(checkboxInp.checked){
                li.style.color = 'green'
            }
            else{
                li.style.color = 'black'
            }
        })
    }
    static modify_btn(container){
        let modify_btn = document.createElement('button')
        modify_btn.textContent = 'Modify'
        modify_btn.className = 'modify_btn'
        container.append(modify_btn)

        modify_btn.onclick = ()=>{
            let todo = JSON.parse(container.dataset.todo)
            this.update_todo_form(todo, container)
        }
    }
    static update_todo_form(todo, container){
        container.textContent = ''
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.gap = '1vh'

        let project_select = Dom.createSelect(Project.projects, 'project')

        let title = document.createElement('input')
        title.value = todo.title

        let date = document.createElement('input')
        date.type = 'date'
        let new_format_date = todo.dueDate.split('/')
        date.value = `${new_format_date[2]}-${new_format_date[1]}-${new_format_date[0]}`
        
        let desc = document.createElement('textarea')
        desc.value = todo.description

        let priority = document.createElement('input')
        priority.type = 'number'
        priority.value = todo.priority

        let note = document.createElement('textarea')
        note.value = todo.note

        let submit_btn = document.createElement('button')
        submit_btn.textContent = 'Change'

        container.append(project_select)
        container.append(title)
        container.append(date)
        container.append(desc)
        container.append(note)
        container.append(priority)

        container.append(submit_btn)

        submit_btn.onclick = ()=>{
            Dom.apply_update(todo, project_select, title, date, desc, priority, note)
            Dom.showAllTodos()
        }
    }
    static apply_update(todo, project, title, date, desc, priority, note){
        let todo_id = todo.id
        let response = Todo.todo_in_project(todo_id, project.value) 
        if (response.changed){                    
            let old_todo_project = Project.find_project(response.todo.project)
            response.todo.changeProject(project.value)
            
            let new_todo_project = Project.find_project(project.value)
            
            new_todo_project.addTodo(response.todo)
            old_todo_project.removeTodo(response.todo)            
        }
        response.todo.title = title.value
        response.todo.date = date.value
        response.todo.description = desc.value
        response.todo.priority = priority.value
        response.todo.note =note.value
    }
    
    
}
Project.projects.push(new Project('school', 's', 3))
Project.projects.push(new Project('work', 'asdads', 3))

let test_pj = new Project('CMC', 'project inside CMC', 3)
let todo1 = new Todo('meeting', 'meeting in MacDonals for some reason', '22/02/2023', 1, 'no money and free wifi')
let sub1 = new SubTask('open book', 'asdasd')
let sub2 = new SubTask('write notes', 'xaaxaxa')
todo1.addSubtask(sub1)
todo1.addSubtask(sub2)
test_pj.addTodo(todo1)


Project.projects.push(test_pj)
// Dom.todo_in_project(todo1.id, 'CMC')
export default Dom