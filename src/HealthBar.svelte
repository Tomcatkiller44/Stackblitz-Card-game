<script lang="ts">
  export let current: number;
  export let max: number;
  export let block: number = 0;
  export let showBlock: boolean = true;

  $: pct = Math.max(0, (current / max) * 100);
</script>

<div class="w-full">
  <div class="flex items-center gap-2 mb-1">
    <div class="flex-1 h-5 bg-black/60 rounded-full overflow-hidden border border-slate-700 relative">
      <div
        class="h-full bg-gradient-to-r from-red-700 to-red-500 transition-all duration-500 ease-out"
        style="width: {pct}%"
      ></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-xs font-bold text-white drop-shadow-md">{current} / {max}</span>
      </div>
    </div>
    {#if showBlock && block > 0}
      <div class="flex items-center gap-1 px-2 h-5 bg-sky-900/80 border border-sky-600 rounded-full">
        <span class="text-xs font-bold text-sky-200">{block}</span>
      </div>
    {/if}
  </div>
</div>
