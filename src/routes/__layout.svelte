<script>
  import "../styles/tailwind-output.css";
</script>
<!-- Try some classes here -->
<h1 class="uppercase text-center text-5xl border-b-2 border-red-500 mt-4 mb-8" style="font-family: Comfortaa, Helvetica, sans-serif">
  <a href="/"><span class="text-red-500">Big </span><span class="text-white bg-gray-500"> Climate </span><span class="text-blue-500">Impact</span></a>
</h1>

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
