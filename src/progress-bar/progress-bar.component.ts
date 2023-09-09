import { Component, Input } from "@angular/core";

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent{
    @Input() progress = 50;
    @Input() backgroundColor = '#ccc';
    @Input() progressColor = 'tomato';
}