import { Component } from "@angular/core";

@Component({
    selector: "main-layout",
    template: `
    <header class="app-header navbar">
        menu
    </header>
    <div class="app-body">
        <div class="sidebar">
            <nav class="sidebar-nav">
                <ul class="nav">
                    <li class="nav-item">
                        <!--<a class="nav-link" 
                            routerLinkActive="active" 
                            [routerLink]="['/dashboard']">
                            <i class="icon-speedometer"></i> Dashboard 
                            <span class="badge badge-info">NEW</span>
                        </a>-->
                    </li>
                </ul>
            </nav>
        </div>
        <!-- Main content -->
        <main class="main">

            <!-- Breadcrumb -->
            <ol class="breadcrumb">
                <!--<breadcrumbs></breadcrumbs>-->
            </ol>

            <div class="container-fluid">
                <router-outlet></router-outlet>
            </div>
            <!-- /.conainer-fluid -->
        </main>
    </div>
`
})
export class MainLayoutComponent {

}