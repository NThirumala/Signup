import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appCompare]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CompareDirective,
        multi: true
    }]
   
})
export class CompareDirective implements Validator{
    @Input() appCompare : string;
    validate(control: AbstractControl): {[key:string]:any} | null{
        const toCompare = control.parent.get(this.appCompare);
        if(toCompare && toCompare.value!== control.value){
            return {'notEqual' : true };
        }

        return null;
    }
}