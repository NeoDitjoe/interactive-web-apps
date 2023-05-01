import {createOrderHtml, html, updateDraggingHtml, moveToColumn, } from  './view.js'
import { createOrderData, updateDragging, state} from './data.js'
//const updateOrder = document.querySelector('button[form="edit-form"]').addEventListener('click', UpdateOrderButton)

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
    const order = {id, title, table, created };
    state.orders[id] = order;

    const orderElement = createOrderHtml(order);
    
    html.area.ordered.append(orderElement);   

    html.add.form.reset();
    html.add.overlay.style.display = 'none';
    html.other.add.focus() 

 
    html.area.ordered.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.classList.contains('order')) {

            const orderId = event.target.dataset.id;
            
            html.edit.title.value = state.orders[orderId].title;
            html.edit.table.value = state.orders[orderId].table;

            html.edit.overlay.style.display = "block";



        html.edit.delete.addEventListener('click', (event) => {

                event.preventDefault()
                
                const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
                html.area.ordered.removeChild(existingOrderElement);
                
                html.edit.overlay.style.display = "none";
                
            })


        html.edit.form.addEventListener('submit', (event) => {
                event.preventDefault();

        
                state.orders[orderId].title = html.edit.title.value;
                state.orders[orderId].table = html.edit.table.value;

         
                const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
                html.area.ordered.removeChild(existingOrderElement);

                
                const newOrderElement = createOrderHtml(state.orders[orderId]);
                newOrderElement.setAttribute('data-id', orderId);
          
            
                const select = document.querySelector('[name="column"]')
                if (select.value == 'ordered') {
                console.log('Order has been placed');
                html.area.ordered.append(newOrderElement);
                } else if (select.value == 'preparing') {
                console.log('Order is being prepared');
                html.area.preparing.append(newOrderElement);
                } else if (select.value == 'served') {
                console.log('Order has been delivered');
                html.area.served.append(newOrderElement);
                } 
                html.edit.overlay.style.display = "none";
            });
        }   
    });

//preparing column
    html.area.preparing.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.classList.contains('order')) {

            const orderId = event.target.dataset.id;
            
            html.edit.title.value = state.orders[orderId].title;
            html.edit.table.value = state.orders[orderId].table;

            html.edit.overlay.style.display = "block";

    html.edit.delete.addEventListener('click', (event) => {

                event.preventDefault()
                
                const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
                html.area.preparing.removeChild(existingOrderElement);
                html.edit.overlay.style.display = "none";
                
            })

    html.edit.form.addEventListener('submit', (event) => {
                event.preventDefault();

        
                state.orders[orderId].title = html.edit.title.value;
                state.orders[orderId].table = html.edit.table.value;

         
                const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
                html.area.preparing.removeChild(existingOrderElement);

                const newOrderElement = createOrderHtml(state.orders[orderId]);
                newOrderElement.setAttribute('data-id', orderId);

            
                const select = document.querySelector('[name="column"]')
                if (select.value == 'ordered') {
                console.log('Order has been placed');
                html.area.ordered.append(newOrderElement);
                } else if (select.value == 'preparing') {
                console.log('Order is being prepared');
                html.area.preparing.append(newOrderElement);
                } else if (select.value == 'served') {
                console.log('Order has been delivered');
                html.area.served.append(newOrderElement);
                } 
                html.edit.overlay.style.display = "none";
            });
        }   
    });

    //served block
    html.area.served.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.classList.contains('order')) {

            const orderId = event.target.dataset.id;
            
            html.edit.title.value = state.orders[orderId].title;
            html.edit.table.value = state.orders[orderId].table;

            html.edit.overlay.style.display = "block";

    html.edit.delete.addEventListener('click', (event) => {

                event.preventDefault()
                
                const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
                html.area.served.removeChild(existingOrderElement);
                html.edit.overlay.style.display = "none";
                
            })

    html.edit.form.addEventListener('submit', (event) => {
                event.preventDefault();

        
                state.orders[orderId].title = html.edit.title.value;
                state.orders[orderId].table = html.edit.table.value;

         
                const existingOrderElement = document.querySelector(`[data-id="${orderId}"]`);
                html.area.served.removeChild(existingOrderElement);

                const newOrderElement = createOrderHtml(state.orders[orderId]);
                newOrderElement.setAttribute('data-id', orderId);

            
            
                const select = document.querySelector('[name="column"]')
                if (select.value == 'ordered') {
                console.log('Order has been placed');
                html.area.ordered.append(newOrderElement);
                } else if (select.value == 'preparing') {
                console.log('Order is being prepared');
                html.area.preparing.append(newOrderElement);
                } else if (select.value == 'served') {
                console.log('Order has been delivered');
                html.area.served.append(newOrderElement);
                } 
                html.edit.overlay.style.display = "none";
            });
        }   
    });    
};


const handleEditToggle = (event) => {}

const handleEditCancel = (event) => {
    html.edit.overlay.style.display = "none"
}


html.add.cancel.addEventListener('click', handleAddCancel) //used
html.other.add.addEventListener('click', handleAddToggle) //used
html.add.form.addEventListener('submit', handleAddSubmit)  // used

html.other.grid.addEventListener('click', handleEditToggle) 
html.edit.cancel.addEventListener('click', handleEditCancel) //used

html.help.cancel.addEventListener('click', handleHelpCancel) //used
html.other.help.addEventListener('click', handleHelpToggle) // used

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}
for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
   
}

