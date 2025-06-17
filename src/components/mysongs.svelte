<script>
  import { onMount } from 'svelte';
  import SportyIframe from './sportyIframe.svelte';
  
  let sectionRef = $state(null);
  let isVisible = $state(true);
  
  const albums = $state([
    { id: 1, title: 'TESTING', artist: 'A$AP Rocky', color: 'hover:bg-blue-600' },
    { id: 2, title: 'LIVE.LOVE.A$AP', artist: 'A$AP Rocky', color: 'hover:bg-purple-600' },
    { id: 3, title: 'AT.LONG.LAST.A$AP', artist: 'A$AP Rocky', color: 'hover:bg-orange-600' },
    { id: 4, title: 'LONG.LIVE.A$AP', artist: 'A$AP Rocky', color: 'hover:bg-red-600' },
    { id: 5, title: 'SIDEGLIDE', artist: 'A$AP Rocky', color: 'hover:bg-teal-600' },
    { id: 6, title: 'BREATH', artist: 'Collaboration', color: 'hover:bg-pink-500' },
    { id: 7, title: 'WILD FOR THE NIGHT', artist: 'A$AP Rocky', color: 'hover:bg-green-600' },
    { id: 8, title: 'HYPNOTIZE', artist: 'A$AP Rocky', color: 'hover:bg-yellow-600' },
    { id: 9, title: 'SIDEGLIDE REMIX', artist: 'A$AP Rocky', color: 'hover:bg-indigo-600' },
    { id: 10, title: 'PALACE', artist: 'A$AP Rocky', color: 'hover:bg-gray-600' },
    { id: 11, title: 'FASHION WEEK', artist: 'A$AP Rocky', color: 'hover:bg-cyan-600' },
    { id: 12, title: 'MULTIPLY', artist: 'A$AP Rocky', color: 'hover:bg-rose-600' },
    { id: 13, title: 'DISTORTED RECORDS', artist: 'A$AP Rocky', color: 'hover:bg-emerald-600' },
    { id: 14, title: 'PRAISE THE LORD', artist: 'A$AP Rocky', color: 'hover:bg-violet-600' },
    { id: 15, title: 'SUNDRESS', artist: 'A$AP Rocky', color: 'hover:bg-amber-600' }
  ]);
  
  onMount(() => {
   
  });
</script>

<section 
id="music"
  bind:this={sectionRef}
  class="relative min-h-screen backdrop-blur-2xl overflow-hidden  b"
>
  <!-- Background with blue lighting effect -->
  <div class="absolute inset-0">
    <div class="absolute inset-0  "></div>
    <div class="absolute top-0 left-0 w-1/3 h-full "></div>
    <div class="absolute top-1/4 right-1/4 w-64 h-64  rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 left-1/4 w-96 h-96  rounded-full blur-3xl"></div>
  </div>
  
  <!-- Background figure silhouette -->
  
  
  <!-- Main content -->
  <div class="relative z-10 h-full flex flex-col md:flex-row items-center justify-between pt-30">
    <!-- Left side - Music text -->
    <div class="flex items-center justify-start pl-8 md:pl-16">
      <h2 class="text-[#8cd10c] text-8xl md:text-9xl font-black transform md:-rotate-90   origin-center whitespace-nowrap">
        Music
      </h2>
    </div>
    
    <!-- Center - Album grid -->
    <!-- <div class="flex-1 flex items-center justify-center p-8 w-full h-full">
      <div 
        class="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl transition-all duration-1000 w-full h-full"
       
      >
        {#each albums as album, index}
          <div 
            class="group relative aspect-square rounded-lg  cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
            style="animation-delay: {index * 0.1}s"

          >
            <div class="w-full h-full grayscale-100  {album.color} hover:grayscale-0 flex items-center justify-center relative">
             
              <div class="absolute inset-2 bg-black/20 rounded flex flex-col items-center justify-center p-2">
                <div class="text-white text-xs font-bold text-center mb-1 leading-tight">
                  {album.title}
                </div>
                <div class="text-white/70 text-xs text-center">
                  {album.artist}
                </div>
              </div>
              
            
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play text-white">
                  <polygon points="6,3 20,12 6,21"/>
                </svg>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div> -->

    <div class="w-full p-4">
      <SportyIframe/>
    </div>
    
    <!-- Right side - BOYX text -->
    <div class="flex items-center justify-end pr-8 md:pr-16">
      <h3 class="text-white/60 text-lg font-light transform md:rotate-90 origin-center whitespace-nowrap">
        BOYX
      </h3>
    </div>
  </div>
  
  <!-- Bottom text -->
  <div class="absolute bottom-8 left-8 md:left-16">
    <p class="text-white text-lg font-light tracking-wider">
      SEE YOU ON THE DANCE FLOOR
    </p>
  </div>
  
  <!-- Headphone icon -->
  <div class="absolute bottom-8 right-8 md:right-16">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headphones text-white/60">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
    </svg>
  </div>
</section>

<style>
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
</style>
