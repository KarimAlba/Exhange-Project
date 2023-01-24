//header settigs

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

// footer settings

let footerFunctionalLink = document.querySelector('.footerFunctionalLink');
footerFunctionalLink.addEventListener('click', function(event){
    event.preventDefault();
    functional.scrollIntoView(top);
});

let footerDesignLink = document.querySelector('.footerDesignLink');
footerDesignLink.addEventListener('click', function(event){
    event.preventDefault();
    design.scrollIntoView(top);
});

let footerSupportAndUpdatesLink = document.querySelector('.footerSupportAndUpdatesLink');
footerSupportAndUpdatesLink.addEventListener('click', function(event){
    event.preventDefault();
    support.scrollIntoView(top);
});

let footerAdditionalLink = document.querySelector('.footerAdditionalLink');
footerAdditionalLink.addEventListener('click', function(event){
    event.preventDefault();
    addons.scrollIntoView(top);
});

let footerPricingLink = document.querySelector('.footerPricingLink');
footerPricingLink.addEventListener('click', function(event){
    event.preventDefault();
    pricing.scrollIntoView(top);
});

// Open/close model window 

let leaveRequestBtn = document.querySelector('.leaveRequestBtn');
let stopActions = document.querySelector('.stopActions');
let modalWindow = document.querySelector('.modalWindow');

leaveRequestBtn.addEventListener('click', function(event){
    event.preventDefault();
    stopActions.style.display = 'block';
    modalWindow.style.display = 'flex';
});

let sendBtn = document.querySelector('.sendBtn');
let closingBtn = document.querySelector('.closeModalWindow');

closingBtn.addEventListener('click', function(event){
    event.preventDefault();
    stopActions.style.display = 'none';
    modalWindow.style.display = 'none';
});

sendBtn.addEventListener('submit', function(event){
    event.preventDefault();
    stopActions.style.display = 'none';
    modalWindow.style.display = 'none';
});