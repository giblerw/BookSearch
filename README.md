# Bookz
### Author: Weston Gibler
---
### [Deployed App](https://bookz-by-weston.firebaseapp.com/ "Bookz App")
---
## How to run app locally:

#### In your terminal:

1. Clone the repository to your local disk:
 ```
$ git clone https://github.com/giblerw/Bookz.git
```

2. Open the project directory, and install dependencies:
```
$ cd bookz
```
```
$ npm install 
    or 
$ yarn
```

3. Start local server:
```
$ npm run start 
    or 
$ yarn start
```

4. Open a browser window; go to:
```
localhost://8080
```
---

## How to run tests:

#### In the project's root directory:

1. Run the test command:
```
$ npm run test:unit
    or
$ yarn test:unit
```
---

## Technology Used

#### Front End
* Vue.js
* Vue-Cli v3
* Webpack 
* Babel
* Eslint
* Bootstrap 4
* Jest
#### APIs
* Google Books API
#### Hosting
* Firebase
    * I used firebase because I've had mostly good luck with it in the past. Using the Firebase CLI tools, adding cloud functionality and hosting services to your app has never seemed more strait forward and quick... Which is exactly what I was looking for to bring this one home.
---

## Notes & TODOs
 
#### Thoughts
* I had fun with this one. It had been a little while since I last built anything with Vue; became the blocker from me finishing all the tasks within time.
* I started building the project in a simple HTML/CSS/JS file structure. About halfway through, I decided to migrate the project to a component based structure as well as upgrading to use vue-cli v.3. This removed all the cumbersome boiler plate configuration that I had spent a good chunk of time on. Definately worth doing for this project, as it really abstracted away all the noise.
#### What's next?
* As it is now, I am finishing up the orderBy toggle switch; changing how the results are ordered.
* After that, I want to integrate a "bookshelf"; where the user can add and delete books at will.
* Lastly, I will add a few filtering toggles, links and inbedded reading.
---

## Instructions

#### Find a publically available open API and Create a Vue app that allows the user to

-  Add or remove from the list

-  Change the order of the items in the list

-  (In progress...) Sort the list of books by a criteria

-  ~~Display a book page with a minimum of 3 data points~~

-  ~~Include unit tests~~

-  ~~Deploy it on the cloud~~
---