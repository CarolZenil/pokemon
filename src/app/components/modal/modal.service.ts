import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private _dialog: MatDialog) {}

  public editProfileData(): Promise<any> {
    const dialogRef = this._dialog.open(ModalComponent, {
      width: '80vw',
      height: '75vh',
      maxHeight: '75vh !important',
      maxWidth: '80vw !important',
      disableClose: true,
    });

    return dialogRef.afterClosed().toPromise();
  }


}
