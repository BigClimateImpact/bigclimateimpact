<script>
  import "../styles/tailwind-output.css";
</script>

<div class="navbar mb-2 shadow-lg bg-primary text-center text-neutral-content border-b-2 border-b-accent">
  <div class="px-2 mx-auto">
    <span class="text-5xl font-medium">
      <a href="/"><span class="text-secondary" style="font-family: Signika, sans">Big Climate Impact</span></a>
    </span>
  </div>
</div>

<slot></slot>

<div class="py-4 artboard artboard-demo bg-base-200">
  <ul class="menu px-3 shadow-lg bg-base-100 rounded-box sm:horizontal">
    <li>
      <a href="/help">
        Help Out
      </a>
    </li>
    <li>
      <a href="https://bigclimateimpact.substack.com">
        Newsletter
      </a>
    </li>
    <li>
      <a href="https://reddit.com/r/BigClimateImpact">
        Discussion
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Big_Climate">Twitter</a>
    </li>
    <li><a href="/about">About</a></li>
  </ul>
</div>
