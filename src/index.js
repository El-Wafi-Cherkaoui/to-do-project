import home_load from './home.js'
import menu_load  from './menu.js'
import about_load  from './about.js'

home_load()

let content_div = document.querySelector('#content')
let menu_btn = document.querySelector('#menu')
let home_btn = document.querySelector('#home')
let about_btn = document.querySelector('#about')

menu_btn.addEventListener('click', ()=>{
    content_div.textContent = ''
    menu_load()
})
home_btn.addEventListener('click', ()=>{
    content_div.textContent = ''
    home_load()
})
about_btn.addEventListener('click', ()=>{
    content_div.textContent = ''
    about_load()
})