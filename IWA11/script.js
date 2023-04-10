const one_root = document.querySelector('[data-key="order1"]');        // 1 to one
const one_biscuit = parseInt(one_root.getAttribute('data-biscuits')); // get Attribute
const one_donut  = parseInt(one_root.getAttribute('data-donuts'));   //used parseInt for calculations
const one_pancake  = parseInt(one_root.getAttribute('data-pancakes'));  
const one_status  = one_root.getAttribute('data-delivered');
const one = document.querySelector('h2');                           //order 2 to order 1

const One = "Order 1"
document.querySelector('h3').innerText = One

const oneBiscuit = 'price: R ' + one_biscuit
document.querySelector('dd').innerText = oneBiscuit

const oneDonut = 'price: R ' + one_donut 
document.querySelector('.donuts dd').innerText = oneDonut

const onePancake = 'price: R ' + one_pancake 
document.querySelector('.pancakes dd').innerText = onePancake

const oneStatus = one_status
document.querySelector('.status').innerText = oneStatus


const two_root = document.querySelector('[data-key="order2"]');        // 1 to one
const two_biscuit = parseInt(two_root.getAttribute('data-biscuits')); // get Attribute
const two_donut  = parseInt(two_root.getAttribute('data-donuts'));   //used parseInt for calculations
const two_pancake  = parseInt(two_root.getAttribute('data-pancakes'));  
const two_status  = two_root.getAttribute('data-delivered');

const twoBiscuit = 'price: R ' + two_biscuit
document.querySelectorAll('.biscuits dd')[1].innerText = twoBiscuit  //queryselectorAll for specific targeting [1]
                                                                          
const twoDonut = 'price: R ' + two_donut 
document.querySelectorAll('.donuts dd')[1].innerText = twoDonut

const twoPancake = 'price: R ' + two_pancake 
document.querySelectorAll('.pancakes dd')[1].innerText = twoPancake

const twoStatus = one_status
document.querySelectorAll('.status')[1].innerText = twoStatus

/*
const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending


document(biscuits.p-count).pending = 3-status ? 1-biscuits + 2-biscuits + 3-biscuits: 0
document(biscuits.p-count).delivered 3-status ? 0 : 1-biscuits + 2-biscuits + 3-biscuits

document(donuts.p-count).pending = 3-status ? 1-donuts + 2-donuts + 3-donuts: 0
document(donuts.p-count).delivered 3-status ? 0 : 1-donuts + 2-donuts + 3-donuts

document(pancakes.p-count).pending = 3-status ? 1-pancakes+ 2-pancakes+ 3-pancakes: 0
document(pancakes.p-count).delivered 3-status ? 0 : 1-pancakes+ 2-pancakes + 3-pancakes */




/* 10 = 10 */