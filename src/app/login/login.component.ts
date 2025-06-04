import { Component, effect } from "@angular/core";

@Component({
  selector: "app-login",
  imports: [],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css", "./login.component.scss"],
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  yourEmail: string = "ram@gmail.com";
  yourPassword: string = "123";
  loginDisable = false;

  useremail(event: Event) {
    let Email = (event.target as HTMLInputElement).value;
    this.email = Email;
  }
  userpassword(event: Event) {
    let Password = (event.target as HTMLInputElement).value;
    this.password = Password;
  }

  check() {
    if (this.email == this.yourEmail && this.password == this.yourPassword) {
      alert("Login Fine");
    } else {
      alert("LoginFailed");
      this.loginDisable = true;
      setTimeout(() => {
        this.loginDisable = false;
      }, 5000);
    }
  }
}
