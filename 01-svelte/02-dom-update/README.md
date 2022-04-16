# 01-Hello world

# Intro

# Step by step guide:

We will take as starting point 00-boilerplate, let's copy that project
in to a fresh folder and execute

```bash
npm install
```

We are going to add some very basic hello world code:

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


