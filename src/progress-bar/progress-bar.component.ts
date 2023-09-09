import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges{
    @Input() progress = 50;
    @Input() backgroundColor = '#ccc';
    @Input() progressColor = 'tomato';

    constructor(){
        console.log({
            progress: this.progress,
            backgroundColor: this.backgroundColor,
            progressColor: this.progressColor
        });
    }

    ngOnInit(): void {
        console.log('init', {
            progress: this.progress,
            backgroundColor: this.backgroundColor,
            progressColor: this.progressColor
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', {
            progress: this.progress,
            backgroundColor: this.backgroundColor,
            progressColor: this.progressColor
        });
    }
}