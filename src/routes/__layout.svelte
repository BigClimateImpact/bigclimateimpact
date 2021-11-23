<script>
  import "../styles/tailwind-output.css";
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-center text-neutral-content border-b-2 border-b-red-500">
  <div class="px-2 mx-auto">
    <span class="text-5xl font-bold uppercase" style="font-family: Comfortaa, sans">
      <a href="/"><span class="text-red-500">Big </span><span class="text-white"> Climate </span><span class="text-blue-500">Impact</span></a>
          </span>
  </div>
</div>

<slot></slot>

<div class="flex flex-row w-full place-content-center mt mb-8">
  <div><a href="/help">Help Out</a></div>
  <div class="divider divider-vertical"></div>
  <div><a href="https://bigclimateimpact.substack.com">Newsletter</a></div>
  <div class="divider divider-vertical"></div>
  <div><a href="https://reddit.com/r/BigClimateImpact">Discussion</a></div>
  <div class="divider divider-vertical"></div>
  <div><a href="https://twitter.com/Big_Climate">Twitter</a></div>
  <div class="divider divider-vertical"></div>
  <div><a href="/colophon">Colophon</a></div>
</div>
