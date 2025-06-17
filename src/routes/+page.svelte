<script>
  import Navbar from '$components/navbar.svelte';
  import Hero from '$components/hero.svelte';
  import { onMount } from 'svelte';
  import Mysongs from '$components/mysongs.svelte';
  import Socials from '$components/socials.svelte';
  import Releascomp from '$components/releascomp.svelte';
  
  let scrollY = $state(0);
  
  // Track scroll position
  function handleScroll() {
    scrollY = window.scrollY;
  }
  
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="bg-white min-h-screen michroma-regular">
  <Navbar />
  <Hero {scrollY} />
  
  <Socials/>
  <Mysongs />
  <!-- Additional content to enable scrolling -->
  <!-- <div class="h-[50vh] px-8 pt-[20vh] ">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-6">BOYX</h2>
      <p class="mb-4">NO LONG TALK... I REALLY LOVE DOING MUSIC...</p>
    </div>
  </div> -->
</div>
