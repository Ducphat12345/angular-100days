import { Component } from "@angular/core";

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent{
    user = {
        'name': 'Phát',
        'age': 24
    };

    handler(event: any){ 
        console.log('clicked', event);
    }
}