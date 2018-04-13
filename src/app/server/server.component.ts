import { Component } from "@angular/core";

@Component({
  // pass configuration
  // html tag, unique name
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus() {
    return this.serverStatus;
  }
}
