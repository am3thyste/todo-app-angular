"use strict";
class AlphormHello extends HTMLElement {    // You can extend any other element or Class

   constructor() {
      super();                         //  construct the original item to be extended, here it is the HTMLElement
      console.log("constructor")
   }

   connectedCallback() {
      console.log("connectedCallback")
      this.innerHTML = "<h2>Hello Alphorm</h2>";

   }
   disconnectedCallback() {
      console.log("disconnectedCallback")

   }
   attributeChabgedCallback() {
      console.log("attributeChangedCallback")

   }
}

window.customElements.define("alphorm-hello", AlphormHello);