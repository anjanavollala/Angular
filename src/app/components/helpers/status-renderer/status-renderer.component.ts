import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Color, Status } from 'src/app/app.constants';

@Component({
  selector: 'app-status-renderer',
  templateUrl: './status-renderer.component.html',
  styleUrls: ['./status-renderer.component.scss']
})
export class StatusRendererComponent implements ICellRendererAngularComp {
  @Input() status: Status | undefined;
  color: Color | undefined;

  agInit(params: ICellRendererParams): void {
    this.status = params.value;
    switch (this.status) {
      case Status.open:
        this.color = Color.accent
        break;
      case Status.inProgress:
        this.color = Color.warn;
        break;
      case Status.completed:
        this.color = Color.primary;
        break;
      default:
        break;
    }
  }

  refresh(): boolean {
    return false;
  }
}
