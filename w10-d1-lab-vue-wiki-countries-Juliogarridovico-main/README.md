![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Vue.js WikiCountries

## Introduction

After spending too much time on GitHub, you found a [JSON dataset of countries](https://ih-countries-api.herokuapp.com/countries) and you decided to use it to create your Wikipedia of countries!

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-wiki-countries-1.gif" alt="Example - Finished LAB" />
</p>


## Setup

- Fork this repo
- Clone this repo
- Open the LAB and start:

  ```bash
  $ cd lab-vue-wiki-countries
  $ npm install
  $ npm run dev
  ```


## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin main
  ```

- Create a Pull Request so that your TAs can check your work.


## Getting Started

Clean the `App.vue` component so that it has the following structure inside the template tags

```vue
<!-- src/App.js -->
<template>
  <div class="app">
  </div>
</template>
```

<br>

## Instructions

### Iteration 0 | vue Router installation

Remember to install the vue Router:

```shell
$ npm install vue-router
```

And set up the router in your `src/router/index.js` file:

```js
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import(/* webpackChunkName: 'list' */ '../CountriesList.vue'),
  },
  {
    path: '/details', // THEN, YOU WILL HAVE TO CHANGE THIS FOR A PARAM!
    name: 'details',
    component: () => import(/* webpackChunkName: 'details' */ '../components/CountryDetails.vue')
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
```

### Bootstrap installation

We will use Bootstrap(https://getbootstrap.com/) for the design :+1:

```shell
$ npm install bootstrap
```

To make the Bootstrap styles available in the entire app, import the stylesheet in `main.js`:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).mount('#app')

```

## Instructions

### Iteration 1.1 | Create components

In this iteration, we will focus on the general layout. Before you start, inside the `src` folder, create the `components` folder. There you will create at least 3 components:

- `Navbar`: Displaying the basic navbar with the LAB name

- `CountriesList`: Displays the list of links with the country names. Each link should be a `vue-router-dom` `router-link` which we will use to <u>send</u> the country code (`alpha3Code`) via the URL.

- `CountryDetails`: Is the component that we will render via the `vue-router`'s `Route` and will be <u>receiving</u> the country code (`alpha3Code`) via the URL.

  This is actually the id of the country (example: `/ESP` for Spain, `/FRA` for France).

To help you with the structure of the components, we gave you an example of a page inside `example.html`.

If you want to style it, refresh your memory on Bootstrap in the [docs](https://getbootstrap.com/docs/4.0) or check out how we approached styling in the `example.html`.

### Iteration 1.2 | Navbar component

The simplest way to define a component in vue is to write a JavaScript function aka function component. The navbar should be displaying the title *LAB - WikiCountries*.

### Iteration 1.3 | CountriesList component

This component should render a list of `router-link`s that are used to trigger the browser URL change. Click on a `router-link` component will activate the corresponding `Route` showing the country details component.

### Iteration 1.4 | CountryDetails component and `router-view` setup

Now that our list of countries is ready, we should create the `CountryDetails` page. `CountryDetails` displays the country details as per the link that we clicked. This component should be dynamically displayed/rendered with the `<router-vue />`.

```vue
<!-- Example -->

<router-view />
```

Components rendered with Vue.js can read the query with `this.$route`. We can use this to obtain the information coming from the browser's URL bar, for example, the `alpha3Code` code of the country.

**NOTE:** For the small picture of the flag, you can use the lowercased `alpha2Code` and embed it in the URL as shown below:

- France: https://flagpedia.net/data/flags/icon/72x54/fr.png
- Germany: https://flagpedia.net/data/flags/icon/72x54/de.png
- Brazil: https://flagpedia.net/data/flags/icon/72x54/br.png
- etc.

----

### Iteration 2 | Linking it all together

Once done creating the components, the structure of elements that your `App.vue` will render should look somewhat like this:

```vue
<div class="app">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList :countries="countries" />
      <router-view />
    </div>
  </div>
</div>
```

----

### Iteration 3 | Set the state when the component mounts

Our `App.vue` application should pull `countries` into the vue data method, holding the data coming from the `src/countries.json` file.

To import countries.json in App.vue, you can use:

`import countries from "./countries.json";`
and then in your `data`:

`
data() {
  return {
    countries: countries
  }
}`

----

### Iteration 4 | Bonus | Fetch countries data from an API

Instead of relying on the static data coming from a `json` file, let's do something more interesting and get out the data from an actual API.

Let's make a `GET` request to the URL [https://ih-countries-api.herokuapp.com/countries](https://ih-countries-api.herokuapp.com/countries) and use the data returned from the response as the list of the countries. You can use either `fetch` or `axios` to make the request. 

You should use the `mounted()` Hook to set the lifcycle hook that runs only once and makes a request to the API. The request should happen first thing when the application loads, therefore think about when and from where we should make the request to the API.

----

### Iteration 5 | Bonus | Fetch one country data from an API

Using the `mounted()` hook set `CountriesDetails` component. It should make a request to the RestCountries API and fetch the data for the specific country. You can construct the request endpoint using the country's `alpha3Code`. Example:

- United States: https://ih-countries-api.herokuapp.com/countries/USA
- Japan: https://ih-countries-api.herokuapp.com/countries/JPN
- India: https://ih-countries-api.herokuapp.com/countries/IND

The effect should run after the initial render and each time the URL parameter with the `alpha3Code` changes.

<br>

Happy coding! :heart:
