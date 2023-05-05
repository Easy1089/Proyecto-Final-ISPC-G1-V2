import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-miembroequipo',
  templateUrl: './miembroequipo.component.html',
  styleUrls: ['./miembroequipo.component.css']
})

export class MiembroequipoComponent {
  @Input() miembro: any;
}
