import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { RecetaDetailInfoComponent } from './receta-detail-info/receta-detail-info.component';
import { RecetaNewComponent } from './receta-new/receta-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecetaIngredienteComponent } from './receta-ingrediente/receta-ingrediente.component';

const appRoutes: Routes = [
  {
    path: 'recetas',
    component: RecetaListComponent,
  },
  {
    path: '',
    redirectTo: '/recetas',
    pathMatch: 'full',
  },
  {
    path: 'recetas/:id',
    component: RecetaDetailInfoComponent,
  },
  {
    path: 'nuevaReceta',
    component: RecetaNewComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RecetaListComponent,
    RecetaDetailComponent,
    RecetaDetailInfoComponent,
    RecetaNewComponent,
    RecetaIngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
