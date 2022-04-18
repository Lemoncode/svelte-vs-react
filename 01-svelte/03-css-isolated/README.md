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

We are going to create a simpe form:

- Field name.
- Field lastname.
- Field address.

We will add a calculated field called fullname: this is
just to check how reactive code works (we could calculate
this directly in the markup section).

_./src/01-dom-update/dom-update.svelte_

```svelte
<script lang="ts">
  let name = "";
  let lastname = "";

  // Just adding a new field to test that full name
  // calc is not called when address is changed
  let address = "";

  console.log("Hey Rerender going on !!");
</script>

<h1>Update name and lastname = name + lastname</h1>

<div>
  <input placeholder="name" bind:value={name} />
  <input placeholder="lastname" bind:value={lastname} />
  <input placeholder="address" bind:value={address} />

  Fullname: {fullname}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
```

Ok, now we want to store in fullname the name and lastname
concatenation and we want to get it updated whenever any of theses
values change, we can add some reactiveo code like this:

```diff
<script lang="ts">
  let name = "";
  let lastname = "";

  // Just adding a new field to test that full name
  // calc is not called when address is changed
  let address = "";

+  $: {
+    console.log("**Reactive code in action...");
+    fullname = `${name} ${lastname} ${Math.random()}`;
+  }

  console.log("Hey Rerender going on !!");
</script>
```

And that's all:

```bash
npm run dev
```

Now if we change the name and lastname, the fullname will be updated,
but if we change the address, the fullname will not be updated.
