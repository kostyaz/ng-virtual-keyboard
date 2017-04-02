import { ElementRef } from '@angular/core';
import { MdDialog } from '@angular/material';
export declare class NgVirtualKeyboardDirective {
    private element;
    private dialog;
    private opened;
    layout: Array<Array<string>> | string;
    placeholder: string;
    onFocus(): void;
    onClick(): void;
    /**
     * Constructor of the class.
     *
     * @param {ElementRef}  element
     * @param {MdDialog}    dialog
     */
    constructor(element: ElementRef, dialog: MdDialog);
    /**
     * Getter for used keyboard layout.
     *
     * @returns {KeyboardLayout}
     */
    private getLayout();
    /**
     * Getter for used placeholder for virtual keyboard input field.
     *
     * @returns {string}
     */
    private getPlaceHolder();
}
