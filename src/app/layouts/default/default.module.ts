import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'
import { SharedModule } from './../../shared/shared.module'
import {  MatDividerModule } from '@angular/material/divider';
import {  MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { DefaultComponent } from './default.component' 
import { DashboardComponent } from './../../modules/dashboard/dashboard.component' 
import { PostsComponent } from './../../modules/posts/posts.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class DefaultModule { }
