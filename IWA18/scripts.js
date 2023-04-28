import {createOrderHtml, html, updateDraggingHtml, moveToColumn, } from  './view.js'
import { createOrderData, updateDragging, state} from './data.js'

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
const handleAddSubmit = (event) => {
    event.preventDefault();

    const title = html.add.title.value;
    const table = html.add.table.value;

    const id = Object.keys(state.orders).length + 1;
    const created = new Date();
    const order = { id, title, table, created };
    state.orders[id] = order;

    const orderElement = createOrderHtml(order);
    html.area.ordered.append(orderElement);

    html.add.form.reset();
    html.add.overlay.close();
    html.add.overlay.style.display = 'none'

}

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

