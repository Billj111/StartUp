import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SomeTableComponent } from './components/some-table/some-table.component';
import { SomeParentComponent } from './components/some-parent/some-parent.component';
import { PaginatorComponent } from './components/paginator/paginator.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: 'some-parent',   component: SomeParentComponent  },
    { path: 'some-table',   component: SomeTableComponent  },
    { path: 'paginator',   component: PaginatorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
