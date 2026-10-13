<script lang="ts">
  import { writable } from 'svelte/store';
  import type { GameScreen } from './types';
  import StartScreen from './StartScreen.svelte';
  import BattleScene from './BattleScene.svelte';

  const screen = writable<GameScreen>('start');
</script>

{#if $screen === 'start'}
  <StartScreen onStart={() => screen.set('battle')} />
{:else}
  <BattleScene />
{/if}
