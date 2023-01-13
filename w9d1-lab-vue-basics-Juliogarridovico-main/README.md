[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8302519&assignment_repo_type=AssignmentRepo)
![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Vue.js Basics

## Introduction

In this lab, you'll continue exploring the basics of how to use Vue.js and will set the foundation for bigger, more complicated projects.

Here are the things you'll have to achieve during this lab:

- Create a basic template structure inside a new project.
- Display the result of a JavaScript operation in a component's HTML.
- Show an element only if a particular property is set to `true`.
- Display a list of elements that are stored inside a component.
- (Bonus) Change the background color of an element when pressing a button.

Let's begin!

## Setup

- Fork this repo
- Clone this repo
- Open the LAB and start:

  ```bash
  $ cd lab-vue-basics
  $ npm install
  $ npm start
  ```


## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin main
  ```

- Create a Pull Request so that your TAs can check your work.


<!-- ## Getting Started -->


## Instructions

### Iteration 1 | Create a basic template structure inside a new project

For this lab, you'll have to create a new Vue project in a new folder. You can choose which options you want to include, but remember to stick with Vue 2 for the moment being.

One of the main advantages of Vue (or any other frontend framework) is how easy it is to reuse components all over your application. This is exactly what we'll practice right now.

You have to create a `navbar` component and a `footer` component, that you'll include in all your app's inner pages. Hint: if you import them in your App.vue component, all your inner pages will display them too.

Right now, you don't need to worry about styling these components; just make sure they're working and you're free to advance to the next task.


### Iteration 2 | Display the result of a Javascript operation in a component's HTML

Yesterday you practiced showing a `string` inside a Vue component's template using mustache syntax (`{{}}`). Today, we've seen that strings are not the only things you can insert on your HTML using this technique.

This challenge has two parts:

- First, you just need to insert a mathematical operation inside your HTML and see what happens. Something as simple as `2 + 2` is enough here.
- Then, the real challenge begins: you have to "print" a `string` on your template, with a twist: this string has to be returned by a function. Hint: [this article](https://lavalite.org/blog/created-and-mountedin-vuejs) can shed some light on how you can do this.

### Iteration 3 | Show an element only if a particular property is set to `true`

One of the main reasons we use something like Vue is so we can simplify common JavaScript operations. One of the main advantages of this framework is that it allows us to display elements conditionally in a very simple way.

Let's practice this! Your challenge here is to create a boolean data inside a Vue component, and link it to an HTML element that will only show up in your template if the condition is set to `true`.

We've seen the `v-if` and `v-show` properties in class today; but if you're stuck, [the official documentation](https://v2.vuejs.org/v2/guide/conditional.html) can be very helpful here.

### Iteration 4 | Display a list of elements that are stored inside a component

Remember how hard `for loops` seemed with vanilla JavaScript? Vue does a lot of the heavy lifting when we're using them, and can allow us to display a list of elements on the screen in a much easier way.

In this exercise, you're going to practice how to use the `v-for` directive. The challenge has the following components:

- You need to create a list of posts inside the `data` of one of your Vue components. These posts need to include the following data: title, description, and content; and you need at least three of them.
- Then, you have to make the posts "show up" on your `template` using the `v-for` directive.

Again, if you're stuck here, [you can always refer to the official documentation](https://v2.vuejs.org/v2/guide/list.html).

### Iteration 5 | Bonus | Change the background color of an element when pressing a button

Up for a harder challenge? Vue allows us to do pretty "magical" things in a simplified way. In this case, you'll learn how to change a CSS property dynamically using data binding.

We haven't gone very deep into this topic; but here are some tips to point you in the right direction:

- You'll need to create either a class or a CSS property and [bind it](https://v1.vuejs.org/guide/syntax.html) to a condition.
- You'll have to create a method that changes the class or the property and trigger it via a button click. We practiced that in yesterday's lab, so feel free to refer to it if you need any help.

Sounds good? Let's get started!

<br>

Happy coding! :heart:
