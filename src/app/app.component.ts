import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private datePipe: DatePipe) {
  }

  count = 0;
  show = false;
  registros: string[] = [];
  toggle() {
    this.show = !this.show;
    this.log(this.show);
  }

  log(event: any) {
    this.count++;
    this.registros.push('Se registra click: ' + event + ' Fecha: '
      + this.datePipe.transform(Date.now().toString(), 'dd/MM/yyyy HH:mm') + '\n');
  }

}
