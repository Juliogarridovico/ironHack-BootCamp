[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8107987&assignment_repo_type=AssignmentRepo)
![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)


# Guided exercise - IronSkydive 🎨 - styling (CSS)

<br>

## Introduction

At this point, you got familiar with Cascading Style Sheets (CSS), and you know how to:

- target elements using tags, classes or ids,
- work with font and text properties,
- add colors to text and background.

Remember to open the **CodePen** you created at the beginning of the exercise to do the different iterations of the exercise.

Let's go!

<br>

## IDs

First, you are going to add four ids, one per each `<section>` you have defined. From top to bottom, the ids should be:

- `general-information`
- `structure`
- `team`
- `schedule`

This is going to help us to identify the different sections. This also created something called [internal links](http://www.yourhtmlsource.com/text/internallinks.html). What happens now if you click on the `<nav>` links at the top of the page? It scrolls down automatically to the section! :white_check_mark:

<br>

## General settings for the whole page

Okay, let's start using the CSS tab inside your CodePen project. We will start with setting up the whole page to use the following rule (copy the snippet at the beginning of the CSS tab):

```css
html,
body {
  margin: 0;
  padding: 0;
}
```

This is going to remove all the elements' `margin` and `padding`, or in simple English, will set them to `0`. Why are we doing this? We are doing this to reset some styles that your browser automatically apply to elements, known as _browser default styles_.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_603c70d5d3664d3cd0d7829c6b0367cb.png)

<br>

:thought_balloon: Don't worry about what `margin` and `padding` properties are right now, we'll discuss them in a bit.

<br>

## Font and text

### font-family

For the whole IronSkydive website, we are going to use a font called `Roboto`. You can find it in `https://fonts.google.com/`, Google repository that hosts a huge number of fonts. Typically you have to go through a process to embed one of these fonts in your site, but we have simplified it for you.

At the very beginning of the CSS tab in your CodePen, copy the following line:

```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Roboto:100,300,700');
```

Nothing happens yet. It just adds a reference to two different fonts:

- `Roboto`, with weights of 100, 300, and 700.
- `Roboto Condensed`, with weight 700.

You are going to use both of them on your website. So let's change the font for the entire document. The entire document should have text formatted in the following manner:

- font: `Roboto`.
- size: `10px`.
- line height: `3.5em`.
- weight: `300`.

Remember: we can target elements on which we want to apply some styles using class or id or _tag name_.
You can use `body` tag and add these respective CSS properties to it. Once you have defined the font for the document, let's change the behavior of the headers.

You are using headers from 1 to 5, use a _multi selector_ that will select all of them. Inside this selector, you set the font to `Roboto Condensed`. We will modify the size of the headings in a different selector since each of them will be a different size.

```css
/* CSS multiselector example */

h1,
h2,
h3,
h4,
h5,
h6 {
  /*  define font-family here  */
}
```

The result should be something like this:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8772412e132f34f5246213a371f16ea5.png)

<br>

### Text properties

Right now all the fonts have the same size, let's change that. First, let's style the headings by including the following properties:

| Heading | Properties                                                                                                                                                                                         |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<h1>`  | Size: `9em` <br> Align: `center` <br> Transform: `uppercase`                                                                                                                                       |
| `<h2>`  | Size: `5em` <br> Align: `center` <br> Transform: `uppercase`                                                                                                                                       |
| `<h3>`  | Size: `4.2em` <br> Align: `center` <br> [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): `1em`                                                                         |
| `<h4>`  | Size: `1.5em` <br> [Letter spacing](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing): `0.4px` <br> [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): `1em` |
| `<h5>`  | Size: `1.2em` <br> [Line height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): `1em`                                                                                              |

Once you apply these styles to the different headers you have, `<h1>` and `<h2>` need more space between them. Let's add more space by setting the `<h2>` `line-height` property to `4em`.

You have already specified all the text styles you need to have on your website.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b0f5f1c39886cbe09c75630ca7706c2a.png)

<br>

Great, now let's add some colors to our website.

<br>

## Colors

<br>

Previously, you used the CSS text properties to change the website's appearance, by adding a custom font and sizes, depending on the tag. Now it is time to give it some color!

When you are developing a website, it is a good practice to keep in mind a table with the different colors you are going to use. In this case, the table is:

| Color     | RGB            | Result                                                                                        |
| --------- | -------------- | --------------------------------------------------------------------------------------------- |
| Blue      | `67, 163, 230` | <div style="background: rgb(67, 163, 230); height: 20px; margin: 0 auto; width: 20px;"></div> |
| Dark Blue | `25, 33, 41`   | <div style="background: rgb(25, 33, 41); height: 20px; margin: 0 auto; width: 20px;"></div>   |
| Text      | `0, 0, 0`      | <div style="background: rgb(0, 0, 0); height: 20px; margin: 0 auto; width: 20px;"></div>      |

This table will help you to communicate with your UX/UI design team. When they tell you to apply the `Dark Blue` as a background color, you will know which color it is immediately.

One by one let's describe the changes you have to apply over the different sections we defined on the first iteration of this exercise. Remember the layout we created:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8f778c8cd703db596d5bb22dae089716.jpg)

<br>

Open CodePen in your browser, and let's start!

<br>

### Nav

<br>

The end goal for the `nav` bar is next:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_065124c74d928a12e32e446b759968e3.png)

<br>

Let's start by adding the color. Add `Dark Blue` as a background color.

It is a good practice to use class selectors instead of using HTML tag selectors to define styles. What if you apply a style to the `nav` tag and in the future, you change it to `header`? You would lose all the styles, and change it one by one in the CSS.

Create a selector in your CSS tab called `.nav-bar`, and assign the style described above. Then, assign the class to the `nav` tag in your HTML.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_320885335d288348997362c44aa6f6b0.png)

<br>

It is working... kind of. We have to set the color of links to white and if you try to set the property `color: white` inside `.nav-bar` class, it won't work because words/links are wrapped inside `a` tags.

We can go in the direction of creating a new class and attach the class to each `li` item inside `<nav>`, or we can go **DRY** (Don't Repeat Yourself) and avoid creating one more class but instead of that, reference the items we want to target through the existing class `.nav-bar`.

```css
.nav-bar a {
  /*  styles to be added here    */
}
```

<!-- Let's create another class, called `nav-bar-item`, and -->

Change the `color` to _white_, `text-decoration` to _none_, and `font-size` to `2em` in order to get the desired result.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e03b2f8983da0df77b6e88f973cfc0c5.png)

<br>

In the next iterations, you are going to complete the menu. You are ready to move to the following section.

<br>

### Header

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e80b0ee85c8f2fb8126befe68b152ab2.png)

<br>

Don't be afraid! It is easier than it seems. First of all, you have to set the [background image](https://developer.mozilla.org/en/docs/Web/CSS/background-image?v=control). The properties of the background image are:

- **url:** `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironhack-skydive-background.jpg`.
- **position:** `0 0`.
- **repeat:** `no-repeat`
- **size:** `cover`.

Remember you should create a class, in this case `header`, and assign it to the `header` tag in your HTML to use this style. Now, just set the `header`'s height to `650px`.

The next step is to change the `h2` color to white, and then add some [`text-shadow`](https://developer.mozilla.org/en/docs/Web/CSS/text-shadow) to it. The `text-shadow` property should have as a value `#020819 8px -20px 9px`.

To finish up this section, change the font-size of the quote. Set it to `2.5em`. Create a `quote` class to do that, and add the class to the `aside` tag in the HTML.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c03f57b39ea0d76161156d6e58d91307.png)

<br>

### Section 1

In one of the previous iterations, you added a `general-information` _id_ to this section. Our end goal for this section is:

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_505f90aabf6c0d4e03b4216c07c615f8.png)

<br>

Create a class selector `dark-background`, that applies the following properties:

- background color: dark blue (check out the table at the beginning of this iteration).
- color: white.

Once you have created the class in your CSS, add it to the section. After applying the class, you can see that the text in the `<p>` is tiny, and is not centered. Let's solve this problem.

First, to each paragraph inside the `general-information` section, add a `text` class.

<!-- Then create a multiple selector, that selects all the elements with a `.text` class inside the `#general-information` element. -->

This selector should have the following CSS properties:

- Font size: `2em`.
- Font weight: `100`.
- Text Align: `center`.

Much better. Let's finish this section by adding some styles to the links. The links will look like buttons, and all the links of this section will have the same appearance. It means that you should create a class that applies the necessary CSS properties to a link to look like a button.

<br>

:::info
:bulb: **Why wouldn't we use a button?** Check out [this very concise StackOverflow answer](https://stackoverflow.com/a/25350722/4624718) for a good rule of thumb.
:::

<br>

Let's create a `link-btn` class with the following properties:

- background color: blue (check out the table at the beginning of this iteration).
- color: white.
- font-family: `Roboto Condensed`.
- font size: `2em`.
- [Letter Spacing](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing): `0.5px`.
- text-align: `center`.
- text-decoration: `none`.

Add the class to the three links you have in the section.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7847968ca22bceb75dac295214859d36.png)

<br>

Hmm... It seems we need a way to rearrange our elements and put them in certain positions. This will be the objective of one of the next iterations.

Let's move to the next section.

### Section 2

In the second section, we have added a `structure` id. In this section, you just have to set up the font size and alignment properties.

<!-- You will also remove the `img` width property, and set it in the CSS. -->

Create a `service-box` class in the CSS, with the following properties:

- Font Size: `1.7em`.
- Text Align: `center`.

Assign this class to each `article` inside the `structure` section.

Now, create new multiple selectors for all the `img` classes, inside the `service-box` class.

:+1: Spoiler: Similar what you already did with the links in the navbar, here we will have the following:

```css
.service-box img {
  /*  styles to be added  */
}
```

Add a property inside to set the width of these images to `125px`.

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_85b85fdc98c951967b3554ee821cbfaa.png)

<br>

### Section 3

The most important goal in writing quality CSS is to create classes we can reuse. In this section, we again have dark blue as the background color. You previously have created a `dark-background` class and now add this class to the `team` section.

Now, you have to create two different classes — one for the text of the section, and another one for the team member names. The first class, `section-text`, will have set the font size to `1.9em`, and the text should be aligned to the `center`.

On the other hand, the `member-name` class will set the font size to `1.5em`, with a font weight of `700`. Add the first class to the `p` in the HTML, and the second class to all the `h4` tags.

To avoid properties overwriting other classes, create a multiple selector to set these classes specifically inside the `team` id element:

```css
#team .section-text {
}

#team .member-name {
}
```

Also, let's take care of the images in this section. As we can see they are super large. Let's use multiple selectors to target the `img` tags inside `#team` and set the:

- width to 250px and
- height to 180px.

:+1: Spoiler:

```css
#team img {
  /* styles to be added here */
}
```

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dbe16d63517310a82a988f9f13df4867.png)

<br>

### Section 4

_Nothing to do here...yet!_

### Footer

Again, we have a dark background and white text. Add the `dark-background` class to the `footer` tag in the HTML. Create a `footer` class and add it as a second class on the `<footer>` tag. Use this class to center all the text inside this element and to set up the font size to `1.9em`.

:+1: Spoiler: To add a second class, you have to do the following:

```html
<!-- ... -->

<footer class="dark-background footer">
  <!-- ... -->
</footer>
```

Now, create a new class - `address`, and assign it to the `address` HTML tag. In this class, define:

- font style: `normal`.
- font size: `0.8em`.

We are almost done. The same as we targeted all the links inside the nav bar (using multiple selector approach), here let's target all the links inside footer and their styles:

- color: blue (check out the table at the beginning of this iteration).
- text-decoration: none.

Assign this class to each element inside the list you have in the footer.

:+1: Spoiler: The way to go about this is the next:

```css
.footer a {
  /* styles to be added here */
}
```

And one, the last thing for this iteration is to remove the dots from the list that is displaying social media links. You can target the `ul` tag inside the footer and set the `list-style` property to _none_. So here it is!

<br>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_791457cbe452066c3123de22f4182eb8.png)

<br><br>

:heart: **Happy coding!**
