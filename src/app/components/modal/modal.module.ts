import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';
@NgModule({
    imports: [
        CommonModule,
        MatProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ModalComponent
        ],
    exports: [
        ModalComponent, 
    ],
    providers: [
        {
            provide: MatDialogRef,
            useValue: {}
          },
        ModalService
    ],
})
export class ModalModule {}
