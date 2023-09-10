import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit{
    name = 'Phát';

    @Input() checked = false;
    @Output() checkedChange = new EventEmitter<boolean>();

    constructor(){
    }

    ngOnInit(): void {
        
    }

    toggle(){
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }
}