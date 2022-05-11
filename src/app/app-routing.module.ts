import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";

const routes: Routes = [
    { path: 'component-a', component: ComponentAComponent },
    { path: 'component-b', component: ComponentBComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}