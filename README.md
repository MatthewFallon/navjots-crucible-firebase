# Hello Navjot

Please use this project as a chance to practice with firebase functions a little. The api to implement again is:

## GET requests

- /hello | respond with "Hello, World"
- /num | respond with the result of 4+4
- /object | return an object of the form:
	- { name: "Navjot", age: 48, arr: [1, 2, 3, 4, 5] }

## PUT requests

- /upperCase | respond with the request body as an upercase string
- /multiply4 | respond with the request body multiplied by 4
- /prettyPrint | take in an object and print the name, age, and arr fields in a formatted string

## Notes

If you need any help just lmk trying to leave this first one pretty easy. Don't forget to install [Postman](https://www.postman.com/) to test the api endpoints with requests.

### Firebase commands

Command to test the project, run this command in the fuhnctions directory or use the vscode npm scripts tool.
```bash
npm run serve
```

Command to push the working version up to the project, you will have the right to do that with your account (first run `firebase login` to login as your google account) Use the command or again the tool in vscode.
```bash
npm run deploy
```
