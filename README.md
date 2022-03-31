# Dad Jokez Web App

This web app uses "I can haz dad joke" API ( https://icanhazdadjoke.com/api ) to display jokes.

No tests were written for this verison of the app.

Find a deployed version of this app here; ( https://mfredx-dad-jokez.herokuapp.com/ )

## Functionality

The App has the following features;

1.  Fetch & display a random joke every 10 seconds

2.  Accept a search term (maximum 10 characters long) and display the first 20 jokes containing that term.

3.  Shows a history of the last 5 search terms

## Skills Demonstrated

- Demonstrates competence using a modern JavaScript framework, in this instance Nuxt.js
- Shows expereience with Single Page Applications composition utilising components (`JokeCard` would be a good example of this)
- Shows expereince with state management and Reactive Programming. Vuex was the state management library used (`store/index.js` has Vuex code used to implement the history feature)

## Stack Used

- Nuxt.js
- Tailwind CSS

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
