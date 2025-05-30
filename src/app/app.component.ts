import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ScreensComponent } from "./screens/screens.component";
import { MastarsComponent } from "./mastars/mastars.component";

@Component({
  standalone: true,
  selector: "app-root",
  imports: [RouterOutlet, LoginComponent, ScreensComponent, MastarsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "my-Angular-app";
}
