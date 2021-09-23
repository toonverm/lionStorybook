import {LionListbox} from '@lion/listbox';
import {css} from '@lion/core';

export class AtomListbox extends LionListbox {

    constructor() {
        super();
        this.selectionFollowsFocus = true;
        this.rotateKeyboardNavigation = true;
        this.multipleChoice = false;
        this.addEventListener(
            `model-value-changed`,
            this._dispatchSelected
        );
    }

    static get styles() {
        return [
            super.styles,
            css`
              :host {
                border: 1px solid var(--atoms-middle-gray);
                width: var(--atom-listbox-width, 15rem);
                height: var(--atom-listbox-height, 25rem);
                overflow-y: scroll;
                scrollbar-color: var(--atoms-middle-gray);
                scrollbar-width: thin;
              }

              :host::-webkit-scrollbar {
                width: 4px;
              }

              :host::-webkit-scrollbar-thumb {
                background: var(--atoms-middle-gray);
              }
            `
        ]
    }


    _dispatchSelected() {
        this.dispatchEvent(
            new CustomEvent(`change`, {
                bubbles: true,
                detail: {
                    values: Array.from(this._getCheckedElements()).map(t => t.choiceValue)
                },
            }),
        );

    }
}
