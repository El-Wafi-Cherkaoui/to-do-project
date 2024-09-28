import './styles.css'
import bg_img from './m.png'   
let content_div = document.querySelector('#content')
function home_load() {

    content_div.style.backgroundImage = `url('${bg_img}')`
    content_div.style.height = 'fit-content'
    content_div.style.backgroundRepeat = 'no-repeat'
    content_div.style.backgroundPosition = 'center'
    content_div.style.padding = '1vw'
    content_div.style.borderRadius = '1vw'

    create_element('h1', 'Moroccan Restaurant')
    create_element('p', 'Moroccan restaurant is special experience for many.')
}
function create_element(type, title) {
    let element = document.createElement(type)
    element.textContent = title
    style(element)
    content_div.append(element)
}
function style(element){
    element.style.textAlign = 'center'
    element.style.color = 'aliceblue'
    element.style.fontSize = '1.6rem'
    element.style.fontWeight = 'bold'
    element.style.textShadow = '1px 1px 1px green'
}
export default home_load