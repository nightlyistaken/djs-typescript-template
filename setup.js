const fs = require("fs");
const prompt = require("prompt");

console.clear();
console.log("Starting setup");
prompt.start();

prompt
  .get(["token", "id"], function (err, result) {
    fs.writeFile("token.json", `"${result.token}"`, (e) => {
      if (e) throw e;
      console.log("Token Saved!");
    });

    fs.writeFile(
      "src/config.json",
      `
      {
          "applicationId": "${result.id}"
      }
      `,

      (e) => {
        if (e) throw e;
        console.log("ID Saved!");
      }
    );
    
    console.log("Done! :)");
    console.log("Now that the setup is done, I will delete the setup.js file");
    fs.unlink("setup.js", (e) => {
      if (e) throw e;
    });
  });
