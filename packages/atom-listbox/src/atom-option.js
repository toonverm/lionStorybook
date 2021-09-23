import {LionOption} from '@lion/listbox';
import {css} from '@lion/core';

export class AtomOption extends LionOption {


  constructor() {
    super();
    this.match = true;
  }

  static get styles() {
    return [
      super.styles,
      css`
              :host([checked]) {
                background-color: blue;
              }

              :host(:not([match])) {
                display: none;
              }

              :host(:hover) {
                cursor: pointer;
                color: white;
                background-color: lightblue;
              }

              ::slotted(.highlight) {
                font-weight: bold;
              }

            `
    ]
  }

  static get properties() {
    return {
      match: {
        type: Boolean, reflect: true
      },
    };
  }

  /**
   * @configure
   * @param {string} currentValue
   */
  onFilterMatch(currentValue) {
    const {innerHTML} = this;
    // eslint-disable-next-line no-param-reassign
    this.__originalInnerHTML = innerHTML;
    const newInnerHTML = innerHTML.replace(
      new RegExp(`(${currentValue})`, `i`),
      `<span class="highlight">$1</span>`,
    );
    // For Safari, we need to add a label to the element
    this.setAttribute(`aria-label`, this.textContent);
    this.innerHTML = newInnerHTML;
    // Alternatively, an extension can add an animation here
    this.match = true;

  }

  /**
   * @configure LionCombobox
   */
  onFilterUnmatch() {

    this.removeAttribute(`aria-label`);
    if (this.__originalInnerHTML) {
      this.innerHTML = this.__originalInnerHTML;
    }
    this.match = false
  }
}
