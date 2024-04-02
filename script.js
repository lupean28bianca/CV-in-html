class DOMHelper {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(content) {
        this.element.innerHTML = content;
    }

    addClass(className) {
        this.element.classList.add(className);
    }

    removeClass(className) {
        this.element.classList.remove(className);
    }

    toggleClass(className) {
        this.element.classList.toggle(className);
    }

    hasClass(className) {
        return this.element.classList.contains(className);
    }

    setText(text) {
        this.element.textContent = text;
    }

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = '';
    }

    isVisible() {
        return window.getComputedStyle(this.element).display !== 'none';
    }

    setAttribute(name, value) {
        this.element.setAttribute(name, value);
    }

    getAttribute(name) {
        return this.element.getAttribute(name);
    }

    removeAttribute(name) {
        this.element.removeAttribute(name);
    }

    onClick(callback) {
        this.element.addEventListener('click', callback);
    }

    onHover(enterCallback, leaveCallback) {
        this.element.addEventListener('mouseenter', enterCallback);
        this.element.addEventListener('mouseleave', leaveCallback);
    }
    onEvent(eventType, callback) {
        this.element.addEventListener(eventType, callback);
    }

}

const hideBtn = new DOMHelper('#btn1');
const showBtn = new DOMHelper('#btn2');
const hidenText=new DOMHelper('#modificat');

hideBtn.onClick(() => {
    hidenText.hide();
});
showBtn.onClick(() => {
    hidenText.show();
});

const changeBtn=new DOMHelper('#btnColor');
const changeBck=new DOMHelper('#btnBack'); 

changeBtn.onClick(() => {
    document.body.style.backgroundColor = "grey";
});
changeBck.onClick(() => {
    document.body.style.backgroundColor = "white";
});
//ultima cerinta js

