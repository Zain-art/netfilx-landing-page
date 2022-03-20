const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitem = document.querySelectorAll('.tab-content-item');

function selectitem(e) {
    removeborder();
    removeshow();
    this.classList.add('tab-border');
    // current item from dom
    console.log(this.id);
    const tabcontentitems = document.querySelector(`#${this.id}-content`);
    // add show class
    tabcontentitems.classList.add('show');
}
tabitems.forEach(item => item.addEventListener('click', selectitem));

function removeborder() {
    tabitems.forEach(item => item.classList.remove('tab-border'));
}

function removeshow() {
    tabcontentitem.forEach(item => item.classList.remove('show'));
}
//listen for tab click
tabitems.forEach(item => item.addEventListener('click', selectitem));