# 00-boilerplate

# Intro

# Step by step guide:

Let's create the project using _degit_ and add suppor to typescript

```bash
npx degit sveltejs/template svelte-showcase
cd svelte-app
node scripts/setupTypeScript.js
```

_For the sake of simplicity we have moved the project to the 00-boilerplate root folder_

Let's Install the dependencies...

```bash
npm install
```

Let's start the project

```bash
npm run dev
```

And Navigate to [localhost:8080](http://localhost:8080), to check that the application is running

It's time to add a router, we will add page per example.

```bash
npm install svelte-navigator --save
```

Before we start importing modules we need to add some tweaking into our
_global.d.ts_ file, we need to indicate to typesript that _.svelte_ are
valida modules.

_./global.d.ts_

```diff
/// <reference types="svelte" />

+ declare module '*.svelte';
```

And extend the _tsconfig_ configuration, we will add amongst ther options

_./tsconfig_

```diff
{
  "extends": "@tsconfig/svelte/tsconfig.json",

+  "compilerOptions": {
+    "importsNotUsedAsValues": "preserve",
+    "module": "ESNext",
+    "target": "ESNext",
+    "moduleResolution": "node",
+    "strict": false,
+    "noImplicitAny": false,
+    "allowSyntheticDefaultImports": true,
+    "baseUrl": "./src/",
+  },

  "include": ["src/**/*"],
  "exclude": ["node_modules/*", "__sapper__/*", "public/*"]
}
```

Now let's create some placeholder for the demos:

_./src/00-hello-world/hello-world.svelte_

```svelte
<script lang="ts">

</script>

<h1>Place holder hello world demo</h1>
```

// Same thing for the rest of components

And let's add the routing in our app

_./src/App.svelte_

```svelte
<script lang="ts">
	import { Router, Route, Link } from "svelte-navigator";
	import HelloWorld from "./00-hello-world/hello-world.svelte";
	import DomUpdate from './01-dom-update/dom-update.svelte';
	import HandlingCSS from "./02-handling-css/handling-css.svelte";
	import ReactiveCode from "./03-reactive-code/reactive-code.svelte";
	import LifeCycle from "./04-life-cycle/life-cycle.svelte";
	import AsyncCallback from "./05-async-callback/async-callback.svelte";
	import ConditionalRendering from "./06-conditional-rendering/conditional-rendering.svelte";
	import CommonData from "./07-common-data/common-data.svelte";
	import DataLoad from "./08-data-load/data-load.svelte";
	import WebComponent from "./09-web-components/web-component.svelte";
</script>



<main>
<Router>
	<nav>
		<Link to="/hello-world" class="link"><div class="link">00 Hello world</div></Link>
		<Link to="/render"><div class="link">01 DOM Update</div></Link>
		<Link to="/handlingCss"><div class="link">02 HandlingCSS</div></Link>
		<Link to="/reactiveCode"><div class="link">03 Reactive Code</div></Link>
		<Link to="/lifeCycle"><div class="link">04 Life Cycle</div></Link>
		<Link to="/asynccallback"><div class="link">05 Async Callback</div></Link>
		<Link to="/conditionalrendering"><div class="link">06 Conditional Rendering</div></Link>
		<Link to="/commondata"><div class="link">07 Common Data</div></Link>
		<Link to="/dataload"><div class="link">08 Data Load</div></Link>
		<Link to="/webcomponent"><div class="link">09 Web Component</div></Link>
	</nav>


	<div>
		<Route path="/hello-world">
			<HelloWorld/>
		</Route>
		<Route path="/render">
			<DomUpdate/>
		</Route>
		<Route path="/handlingCss">
			<HandlingCSS/>
		</Route>
		<Route path="/reactiveCode">
			<ReactiveCode/>
		</Route>
		<Route path="/lifeCycle">
			<LifeCycle/>
		</Route>
		<Route path="/asynccallback">
			<AsyncCallback/>
		</Route>
		<Route path="/conditionalrendering">
			<ConditionalRendering/>
		</Route>
		<Route path="/commondata">
			<CommonData/>
		</Route>
		<Route path="/dataload">
			<DataLoad/>
		</Route>
		<Route path="/webcomponent">
			<WebComponent/>
		</Route>
	</div>
</Router>
</main>

<style>
  nav {
		display:flex;
		gap: 5px;
	}

	.link {
		padding-right: 5px;
		border-right: 1px solid #ccc;
	}
</style>

```
