import deploy from "../deploy";
import { client } from "../..";
import { cyan, green } from "chalk";
import { Event } from "../interfaces";

export = {
  name: "ready",
  once: true,
  execute() {
    console.log(`Ready and connected as ${cyan(client.user?.tag)}`);
    console.log(green(`client's ws ping is ${client.ws.ping}ms`));
    // deploy commands
    deploy();
  },
} as Event;
