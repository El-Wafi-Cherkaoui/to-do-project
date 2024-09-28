import './styles.css'  
let content_div = document.querySelector('#content')
function menu_load() {
    content_div.style.backgroundImage = 'url()'
    content_div.style.height = 'fit-content'
    content_div.style.backgroundRepeat = 'no-repeat'
    content_div.style.backgroundPosition = 'center'
    content_div.style.padding = '1vw'
    content_div.style.borderRadius = '1vw'

    create_element('h1', 'There is no menu right now')
    // create_element('p', 'Moroccan restaurant is special experience for many.')
}
function create_element(type, title, color = 'white') {
    let element = document.createElement(type)
    element.textContent = title
    element.color = color
    style(element)
    content_div.append(element)
}
function style(element){
    element.style.textAlign = 'center'
    element.style.color = 'red'
    element.style.fontSize = '1.6rem'
    element.style.fontWeight = 'bold'
    element.style.textShadow = '1px 1px 1px green'
}
export default menu_load