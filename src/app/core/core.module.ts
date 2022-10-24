import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        SidenavListComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
        SidenavListComponent,
    ]
})
export class CoreModule { }
