# Communicating with Props

**3 Tenents of React Components**

![3 Tenents of React Components](../assets/MRR01.PNG)

Create a new application `create-react-app components --use-npm`

Deleted all the pre built `src` files

> Added Semantic UI for CSS Styling.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>
```

> New way to check the changes in the files.

Add `>` infront of the commit names in md file. Reference it to the commit file.

> Created a Comment Component with Semantic UI

Installed [Faker package](https://github.com/marak/Faker.js/) to insert fake image to our app.

This was done using the API provided by them. A lot can be found in their repo.

Eg.

```jsx
<img alt="avatar" src={faker.image.avatar()} />
```

> Image Faker Installed and Added

> Copied one comment section to 2 more
