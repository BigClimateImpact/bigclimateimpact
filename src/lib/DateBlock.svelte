<script>
    export let primary;
    export let runoff;
    export let general;
</script>

<div class="card bg-secondary text-secondary-content lg:card-side float-right shadow-xl bordered">
    <div class="card-body">
        <div class="card-title">Dates to remember</div>
        <div>Primary: <b>{primary.toDateString()}</b></div>
        {#if runoff}
            <div class="divider"></div>
            <div>Runoff: <b>{runoff.toDateString()}</b></div>
        {/if}
        <div class="divider"></div>
        <div>General: <b>{general.toDateString()}</b></div>
    </div>
</div>