import { Component } from "@angular/core";

@Component({
  selector: "app-screens",
  imports: [],
  templateUrl: "./screens.component.html",
  styleUrl: "./screens.component.scss",
})
export class ScreensComponent {
  UserNames = ["Ram", "Ravi", "Mounika", "pavan Kalyan"];
  UserDetails = [
    { name: "ram", age: 27, email: "ram@gmail.com" },
    { name: "mounika", age: 24, email: "mounika@gmail.com" },
    { name: "santhosh", age: 27, email: "santhosh@gmail.com" },
  ];

  getNames(name: string) {
    console.log(name);
  }
  getclick(event: Event) {
    console.log("this is ", event.type, "Event Working Fine");
  }
}
