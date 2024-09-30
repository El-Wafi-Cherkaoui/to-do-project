import './styles.css'
import Dom from './dom-module'

let addTaskBtn = document.querySelector('#add_task')
let addProjectBtn = document.querySelector('#add_project')

let allProjectsBtn = document.querySelector('#all_projects')
let allTodosBtn = document.querySelector('#all_tasks')


addTaskBtn.addEventListener('click', ()=>{
    Dom.refreshDetailsCont()
    Dom.todoForm()
})
addProjectBtn.addEventListener('click', ()=>{
    Dom.refreshDetailsCont()
    Dom.projectForm()
})

allProjectsBtn.addEventListener('click', ()=>{
    Dom.refreshDetailsCont()
    Dom.showAllProjects()

})
allTodosBtn.addEventListener('click', ()=>{
    Dom.refreshDetailsCont()

    Dom.showAllTodos()
    console.log(Dom.projects);
    
})
// Dom.projectForm()
// Dom.todoForm()

// console.log(Dom);

// Dom.notification('haha', 'hoho')
// console.log(Dom.createInput('text'));
