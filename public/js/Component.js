export class Component {
    'use strict';
 
    constructor(options) {
       this.container = undefined;
    }
 
    render() {
       return `<div></div>`;
    }
 
    beforeMount() {}

    mount(parentContainer, position) {
        this.beforeMount();

        const newComponent = document.createElement('div');
        newComponent.innerHTML = this.render();
        this.container = newComponent.firstElementChild;
        parentContainer.insertAdjacentElement(position || "beforeEnd", this.container);
        newComponent.remove();

        this.afterMount();
    }

    afterMount() {}
 
    update() { }
 
    beforeUnmount() {}
    
    unmount() {
       this.beforeUnmount();
       this.removeContainer();
       this.afterUnmount();
    }
 
    afterUnmount() {}

    removeContainer() {
        this.container.remove();
        this.container = undefined;
    }
}