let functionalLink = document.querySelector('.functionalLink');
let functional = document.querySelector('.functional');
functionalLink.addEventListener('click', function(event){
    event.preventDefault();
    functional.scrollIntoView(top);
});

let designLink = document.querySelector('.designLink');
let design = document.querySelector('.design');
designLink.addEventListener('click', function(event){
    event.preventDefault();
    design.scrollIntoView(top);
});

let supportAndUpdatesLink = document.querySelector('.supportAndUpdatesLink');
let support = document.querySelector('.support');
supportAndUpdatesLink.addEventListener('click', function(event){
    event.preventDefault();
    support.scrollIntoView(top);
});

let additionalLink = document.querySelector('.additionalLink');
let addons = document.querySelector('.addons');
additionalLink.addEventListener('click', function(event){
    event.preventDefault();
    addons.scrollIntoView(top);
});

let pricingLink = document.querySelector('.pricingLink');
let pricing = document.querySelector('.pricing');
pricingLink.addEventListener('click', function(event){
    event.preventDefault();
    pricing.scrollIntoView(top);
});

let leaveRequestBtn = document.querySelector('.leaveRequestBtn');

leaveRequestBtn.addEventListener('click', function(event){
    event.preventDefault();
    pricing.scrollIntoView(top);
});
