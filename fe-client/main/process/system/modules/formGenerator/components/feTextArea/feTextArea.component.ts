import { Component, ViewContainerRef } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
    selector: 'fe-textarea',
    styleUrls: ['feTextArea.component.css'],
    templateUrl: 'feTextArea.component.html',
    host: {
        '(keypress)': '_onKeypress($event)',
    }
})
export class FeTextAreaComponent extends FeBaseComponent {

    _onKeypress(e) {
        if (this.hasMaxLength) {
            const limit = +this.len;
            if (e.target.value.length === this.maxLength) e.preventDefault();
        }
    }

    ngOnInit() {
        super.ngOnInit();
        this.control.valueChanges.subscribe(this.changeLength.bind(this))
    }

    changeLength(data: string) {
        this.len = data.length;
        if (this.len < this.minLength) {
            this._Class = 'badge-danger';
        }
        else {
            this._Class = 'badge-success';
        }
    }

    get hasMinLength() {
        return this.hasValidation('minLength');
    }

    get hasMaxLength() {
        return this.hasValidation('maxLength');
    }
    get minLength() {
        if (this.hasMinLength) {
            return this.config.validations.minLength.value;
        }
        return 0;
    }

    get maxLength() {
        if (this.hasMaxLength) {
            return this.config.validations.maxLength.value;
        }
        return 0;
    }

    get mask() {
        if (this.config.mask) {
            let mask = this.config.mask;
            return { mask };
        }
        return { mask: false };
    }

    get len() {
        return this.length;
    }
    set len(len) {
        this.length = len;
    }

    set _Class(changeClass) {
        this.conditionClass = changeClass;
    }
    get _Class() {
        return this.conditionClass;
    }

}
