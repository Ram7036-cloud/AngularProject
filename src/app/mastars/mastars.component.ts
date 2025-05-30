import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-mastars",
  imports: [],
  templateUrl: "./mastars.component.html",
  styleUrl: "./mastars.component.scss",
})
export class MastarsComponent {
  day = "monday";
  routers = "";
  handleDays(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    this.day = val;
  }
}
