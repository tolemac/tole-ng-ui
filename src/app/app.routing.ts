import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Layouts
import { MainLayoutComponent } from "./layouts/main-layout.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
    },
    {
        path: "",
        component: MainLayoutComponent,
        data: {
            title: "Home"
        },
        children: [
            {
                path: "dashboard",
                loadChildren: "app/dashboard/dashboard.module#DashboardModule"
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
