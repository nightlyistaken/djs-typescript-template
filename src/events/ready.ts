import deploy from "../deploy";
import { client } from "../..";
import { cyan } from "chalk"
export = {
    name: "ready",
    once: true,
    execute() {
        console.log(`Ready and connected as ${cyan(client.user?.tag)}`)
        deploy();
    }
}