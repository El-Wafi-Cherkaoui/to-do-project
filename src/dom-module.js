import { Project, Todo } from "./todos-module";
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
            Dom.projects.push(newProject)
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
                form.append(Dom.createSelect(Dom.projects, 'project'))
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
            Dom.projects.forEach(proj=>{
                if(project == proj.title){
                    proj.addTodo(new Todo(title, description, dueDate, priority, note, false, [], project))
                }
            })
            // let newProject = new Todo(title,description, dueDate, priority, note, false, [], project)
            console.log(Dom.projects);
            
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
    
}
Dom.projects.push(new Project('school', 's', 3))
Dom.projects.push(new Project('work', 'asdads', 3))

export default Dom