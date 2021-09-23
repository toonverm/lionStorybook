import '../atom-listbox.js';
import {elementUpdated, expect, fixture, html} from '@open-wc/testing';

describe(`atom-list-box`, () => {
    it(`should set the correct checkedIndex when an item is selected`, async () => {
        // setup a wrapper node and add css custom property
        const parentNode = document.createElement(`div`);

        const el = await fixture(html`
            <atom-listbox>
                <atom-option>Acerola</atom-option>
                <atom-option>Apple</atom-option>
                <atom-option>Banana</atom-option>
            </atom-listbox>`, {parentNode});
        await elementUpdated(el);
        await el.querySelectorAll(`atom-option`)[2].click();

        expect(el.checkedIndex).to.equal(2);
    });

    it(`should fire an event wit the correct checkedValue when an item is selected`, async () => {
        // setup a wrapper node and add css custom property
        const parentNode = document.createElement(`div`);
        let selected;
        const el = await fixture(html`
            <atom-listbox @change=${(val) => {
                selected = val.detail.values
            }}>
                <atom-option .choiceValue=${`H`}>Hydrogen</atom-option>
                <atom-option .choiceValue=${`He`}>Helium</atom-option>
                <atom-option .choiceValue=${`Li`}>Lithium</atom-option>
                <atom-option .choiceValue=${`Be`}>Beryllium</atom-option>
                <atom-option .choiceValue=${`B`}>Boron</atom-option>
            </atom-listbox>`, {parentNode});
        await elementUpdated(el);
        await el.querySelectorAll(`atom-option`)[2].click();

        expect(selected).to.have.members([`Li`]);
    });

});
