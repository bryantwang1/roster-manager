# RosterManager

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

#### _A project for demonstrating knowledge of AngularJS 2 for Epicodus that allows users to track members of a gaming team_

#### By _**Bryant Wang**_

## Setup/Installation Requirements

_To run this web app you need Node.js installed._

1. Clone this repository
2. Open your console program(Terminal, Powershell, etc.)
3. In your console, navigate to the cloned project folder
4. Run the following:

          > npm install
          > bower install

5. Go to your Firebase account, make a new app, and get credentials to add Firebase to a web app.
6. In the path `src/app`, make an `api-keys.ts` file that contains the following, replacing the fields with your credentials from Firebase:

          > export var masterFirebaseConfig = {
              apiKey: "xxxx",
              authDomain: "xxxx.firebaseapp.com",
              databaseURL: "https://xxxx.firebaseio.com",
              storageBucket: "xxxx.appspot.com",
              messagingSenderId: "xxxx"
            };

7. Run `ng serve` in the console. The app should now be running on your local server.


## Technologies Used

_AngularJS, Node.js (mostly for npm), bower, sass, edited in Atom_

### License

*GPL*

Copyright (c) 2017 **_Bryant Wang_**

## GitHub Pages Link
https://bryantwang1.github.io/roster-manager/

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
