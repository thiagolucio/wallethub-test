# WhTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

 - Made this using: 
 - Angular 8
 - Bootstrap 4 (purely)
 - JSON Server (for local Backend API )
 
 
## Run project

- clone this repository and inside project file run at terminal or your console `npm install`
- Install Json Server to run project with npm `npm install -g json-server` (you can install locally too, but I'm not recommend).
- Run backend API typing at terminal/ console inside project file the command `json-server --watch db.json` and the json server run at "http://localhost:3000/" by default. 
- Use "ng serve" to run the server at `http://localhost:4200/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Choices About this test

1) Slide/ Slogan Image: In the Slide/ Slogan imgage, I decided to use a ".jpg" image in the end because it is just a slide, for the unique way I treated the responsiveness with the image to suit all screen dimensions. In the end, as this is a test I didn't need to use a ".svg" image for example as the same image would be used on all devices.
    To demonstrate knowledge in the "src / assets / img" folder, there are images in various formats with background and without in order to demonstrate knowledge in image editing. 

2) Why Bootstrap 4: I chose the Bootstrap visual library in its latest version because as I have not received any design guidance and how in agile development teams visual libraries are developmental accelerators, in my opinion, the visual components used in slice art have quite a visual resemblance to bootstrap components, is a solid library supported. I used the latest version as it is best suited for good development practices.

3) About dimensions (slide/slogan, buttons, links, topbar, etc), I tried to maintain to the design. Since I did not receive standard measurements of heights, widths of any of the screen elements, I made the layout based on the design of the image provided using the minimum code required for such development. I also made the simplest design possible in this sense just making the canvases that were not foreseen and made without visual references more creative.

4) I put some comments in the codes to justify why I did it because it was a test. I make it clear that in actual development cases my comments are exclusively when needed. I make my codes as simple as possible so that they are easy to maintain, even for beginners. I believe this lowers system costs.

5) The "id's" made at the local json bank were only used to two decimal places because it is a test you need no more.. 

6) The login system created is fake and simple. It does not store your login and password. If you refresh the page the system will reload on the login screen.
