import {createOrderHtml, html, updateDraggingHtml, moveToColumn, } from  './view.js'
import { createOrderData, updateDragging} from './data.js'



// export const check = (/* order */) => {
/*     const { id, title, table, created } = order

    const element = document.createElement('div')
    element.className = 'order'
    element.draggable = true
    element.dataset.id = id*/
    const created = new Date

    const hours = created.getHours().toString().padStart(2, '0')
    const minutes = created.getMinutes().toString().padStart(2, '0') 

    // element.innerHTML = /* html */ `
    //     <div class="order__title" data-order-title>${html.add.title.value }</div>
        
    //     <dl class="order__details">
    //         <div class="order__row">
    //             <dt>Table:</dt>
    //             <dd class="order__value" data-order-table>${html.add.title.value }</dd>
    //         </div>

    //         <div class="order__row">
    //             <dt>Ordered:</dt>
    //             <dd class="order__value">${hours}:${minutes}</dd>
    //         </div>
    //     </dl>
    // `

/*     return element
} */



const addButton = document.querySelector('button[form="add-form"]')


const orderDiv = document.querySelector('[data-column]')

function handleMe(){   
    event.preventDefault()
    html.add.overlay.style.display = 'none'

    
    orderDiv.innerHTML = 
`
    <div class="order__title" data-order-title>${html.add.title.value }</div>
    
     <dl class="order__details">
         <div class="order__row">
             <dt>Table:</dt>
             <dd class="order__value" data-order-table>${html.add.table.value }</dd>
         </div>

        <div class="order__row">
            <dt>Ordered:</dt>
            <dd class="order__value">${hours}:${minutes}</dd>
        </div>
    </dl>
`   
}

addButton.addEventListener('click', handleMe )

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *              
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


// actions for when button is clicked
const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}
const handleHelpToggle = (event)  => {
    html.help.overlay.style.display = "block"
}
function handleHelpCancel(){
    html.help.overlay.style.display = "none"
    html.other.add.focus()    
}
const handleAddToggle = () => {
    html.add.overlay.style.display = 'block'
    
}
const handleAddCancel = () => {
    html.add.overlay.style.display = 'none'
    html.other.add.focus() 
}
const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}

html.add.cancel.addEventListener('click', handleAddCancel) //used
html.other.add.addEventListener('click', handleAddToggle) //used
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpCancel) //used
html.other.help.addEventListener('click', handleHelpToggle) // used

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}