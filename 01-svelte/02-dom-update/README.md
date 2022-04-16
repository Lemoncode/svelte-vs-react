# 02-Dom Update Reactive

# Intro

In this demo we are going to compare how the DOM gets updated using
Svelte vs React rerender approach

# Step by step guide:

We will take as starting point 00-boilerplate, let's copy that project
in to a fresh folder and execute

```bash
npm install
```

We are going to add two variables that will store a name and a lastname,
then whenever there is an update we will store the resulting value in a
third variable called full name (for the sake of the demo we won't use
two way data binding)):

_./src/00-hello-world/hello-world.svelte_

```svelte
<script lang="ts">
  let name = "World";
</script>

<h1>Hello {name} !</h1>
```

Let's run the build:

```bash
npm run build
```

We can check the minified size (not gzipped) of the whole project is 30Kb, we
can check it against the react project.
