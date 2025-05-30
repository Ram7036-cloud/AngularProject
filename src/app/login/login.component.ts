import { Component } from "@angular/core";
import { from } from "rxjs";

@Component({
  standalone: true,
  selector: "app-login",
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  LoginPage: boolean = true;
  btnName: string = "ShowLoginpage";
  handleLoginpage() {
    this.LoginPage = !this.LoginPage;
    this.btnName = "showRegiaterPage";
  }

  color: string = "allmixed";
  handlecolors(val: string) {
    this.color = val;
  }
}
