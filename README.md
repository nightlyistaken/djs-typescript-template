# Discord.js + TypeScript
This is a project template for Discord.js and typescript.

To create a new project based on this template:

```sh
git clone https://github.com/dhairy-online/djs-typescript-template.git
cd djs-typescript-template
```
Note that you will need to have **Node.js** installed with version 16.1+
and **yarn**

***Please see the Get started section for important points***

## Get started
Install the dependencies

```sh
yarn install
```
**IMPORTANT** 

Now lets configure `config.json` and `token.json` files

Create `token.json` at the current  directory and then write this in it:-

`token.json`
```json
"token"
```
replace token with your bot's token

now go to `src/`...

```sh
cd src/
```
...and open `config.json`.
 
replace `865164129655455754` with your bot's application ID (client ID)

`config.json`

```json
{
    "applicationId": "here"
}
```
..and.. you are done! *nice*

Now simply start the development server and enjoy! :

```sh
 yarn dev
```


