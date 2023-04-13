const one_root = document.querySelector('[data-key="order1"]');        // 1 to one
const one_biscuit = parseInt(one_root.getAttribute('data-biscuits')); // get Attribute
const one_donut  = parseInt(one_root.getAttribute('data-donuts'));   //used parseInt for calculations
const one_pancake  = parseInt(one_root.getAttribute('data-pancakes'));  

const one_status  = one_root.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";
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
const two_status  = two_root.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending";

const twoBiscuit = 'price: R ' + two_biscuit
document.querySelectorAll('.biscuits dd')[1].innerText = twoBiscuit  //queryselectorAll for specific targeting [1]
                                                                          
const twoDonut = 'price: R ' + two_donut 
document.querySelectorAll('.donuts dd')[1].innerText = twoDonut

const twoPancake = 'price: R ' + two_pancake 
document.querySelectorAll('.pancakes dd')[1].innerText = twoPancake

const twoStatus = two_status
document.querySelectorAll('.status')[1].innerText = twoStatus



const three_root = document.querySelector('[data-key="order3"]'); 
const three_biscuit = parseInt(three_root.getAttribute('data-biscuits'));
const three_donut  = parseInt(three_root.getAttribute('data-donuts'));   
const three_pancake  = parseInt(three_root.getAttribute('data-pancakes'));  
const three_status  = three_root.getAttribute('data-delivered') === "true" ? "Delivered" : "Pending"; 

const threeBiscuit = 'price: R ' + three_biscuit
document.querySelectorAll('.biscuits dd')[2].innerText = threeBiscuit  //queryselectorAll for specific targeting [1]
                                                                          
const threeDonut = 'price: R ' + three_donut 
document.querySelectorAll('.donuts dd')[2].innerText = threeDonut

const threePancake = 'price: R ' + three_pancake 
document.querySelectorAll('.pancakes dd')[2].innerText = threePancake

const threeStatus = three_status
document.querySelectorAll('.status')[2].innerText = threeStatus




/*
document(biscuits.p-count).pending = 3-status ? 1-biscuits + 2-biscuits + 3-biscuits: 0
document(biscuits.p-count).delivered 3-status ? 0 : 1-biscuits + 2-biscuits + 3-biscuits

document(donuts.p-count).pending = 3-status ? 1-donuts + 2-donuts + 3-donuts: 0
document(donuts.p-count).delivered 3-status ? 0 : 1-donuts + 2-donuts + 3-donuts

document(pancakes.p-count).pending = 3-status ? 1-pancakes+ 2-pancakes+ 3-pancakes: 0
document(pancakes.p-count).delivered 3-status ? 0 : 1-pancakes+ 2-pancakes + 3-pancakes */
