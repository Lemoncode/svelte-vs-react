<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import { HelloWorld } from "./00-hello-world";
  import { DomUpdate } from "./01-dom-update";
  import { HandlingCSS } from "./02-handling-css";
  import { ReactiveCode } from "./03-reactive-code";
  import { LifeCycle } from "./04-life-cycle";
  import { AsyncCallback } from "./05-async-callback";
  import { ConditionalRendering } from "./06-conditional-rendering";
  import { CommonData } from "./07-common-data";
  import { DataLoad } from "./08-data-load";
  import { WebComponent } from "./09-web-components";
</script>

<main>
  <Router>
    <nav>
      <Link to="/hello-world" class="link"
        ><div class="link">00 Hello world</div></Link
      >
      <Link to="/render"><div class="link">01 DOM Update</div></Link>
      <Link to="/handlingCss"><div class="link">02 HandlingCSS</div></Link>
      <Link to="/reactiveCode"><div class="link">03 Reactive Code</div></Link>
      <Link to="/lifeCycle"><div class="link">04 Life Cycle</div></Link>
      <Link to="/asynccallback"><div class="link">05 Async Callback</div></Link>
      <Link to="/conditionalrendering"
        ><div class="link">06 Conditional Rendering</div></Link
      >
      <Link to="/commondata"><div class="link">07 Common Data</div></Link>
      <Link to="/dataload"><div class="link">08 Data Load</div></Link>
      <Link to="/webcomponent"><div class="link">09 Web Component</div></Link>
    </nav>

    <div>
      <Route path="/hello-world">
        <HelloWorld name="World" />
      </Route>
      <Route path="/render">
        <DomUpdate />
      </Route>
      <Route path="/handlingCss">
        <HandlingCSS />
      </Route>
      <Route path="/reactiveCode">
        <ReactiveCode />
      </Route>
      <Route path="/lifeCycle">
        <LifeCycle />
      </Route>
      <Route path="/asynccallback">
        <AsyncCallback />
      </Route>
      <Route path="/conditionalrendering">
        <ConditionalRendering />
      </Route>
      <Route path="/commondata">
        <CommonData />
      </Route>
      <Route path="/dataload">
        <DataLoad />
      </Route>
      <Route path="/webcomponent">
        <WebComponent />
      </Route>
    </div>
  </Router>
</main>

<style>
  nav {
    display: flex;
    gap: 5px;
  }

  .link {
    padding-right: 5px;
    border-right: 1px solid #ccc;
  }
</style>
