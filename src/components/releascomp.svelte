<script>
  import ReleaseCard from './releasecard.svelte';
  import { onMount } from 'svelte';
  
  let { navigateToPage } = $props();
  
  const releases = $state([
    {
      id: 1,
      title: "D.M.B.",
      artist: "BOYX",
      releaseDate: "2024-01-15",
      coverImage: "/placeholder.svg?height=300&width=300",
      type: "Single",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/track/example1" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example1" },
        { name: "youtube", url: "https://www.youtube.com/watch?v=example1" },
        { name: "soundcloud", url: "https://soundcloud.com/example1" },
        { name: "tidal", url: "https://tidal.com/browse/track/example1" },
        { name: "amazonMusic", url: "https://music.amazon.com/tracks/example1" }
      ]
    },
    {
      id: 2,
      title: "RIOT (Rowdy Pipe'n)",
      artist: "BOYX",
      releaseDate: "2024-02-20",
      coverImage: "/placeholder.svg?height=300&width=300",
      type: "Single",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/track/example2" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example2" },
        { name: "youtube", url: "https://www.youtube.com/watch?v=example2" },
        { name: "soundcloud", url: "https://soundcloud.com/example2" },
        { name: "tidal", url: "https://tidal.com/browse/track/example2" },
        { name: "amazonMusic", url: "https://music.amazon.com/tracks/example2" }
      ]
    },
    {
      id: 3,
      title: "DON'T BE DUMB",
      artist: "BOYX",
      releaseDate: "2024-03-10",
      coverImage: "/placeholder.svg?height=300&width=300",
      type: "Album",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/album/example3" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example3" },
        { name: "youtube", url: "https://www.youtube.com/playlist?list=example3" },
        { name: "soundcloud", url: "https://soundcloud.com/example3" },
        { name: "tidal", url: "https://tidal.com/browse/album/example3" },
        { name: "amazonMusic", url: "https://music.amazon.com/albums/example3" }
      ]
    },
    {
      id: 4,
      title: "TAILOR SWIF",
      artist: "BOYX",
      releaseDate: "2024-04-05",
      coverImage: "/placeholder.svg?height=300&width=300",
      type: "Single",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/track/example4" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example4" },
        { name: "youtube", url: "https://www.youtube.com/watch?v=example4" },
        { name: "soundcloud", url: "https://soundcloud.com/example4" },
        { name: "tidal", url: "https://tidal.com/browse/track/example4" },
        { name: "amazonMusic", url: "https://music.amazon.com/tracks/example4" }
      ]
    },
    {
      id: 5,
      title: "HIGHJACK",
      artist: "BOYX ft. Jessica Pratt",
      releaseDate: "2024-05-12",
      coverImage: "/placeholder.svg?height=300&width=300",
      type: "Single",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/track/example5" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example5" },
        { name: "youtube", url: "https://www.youtube.com/watch?v=example5" },
        { name: "soundcloud", url: "https://soundcloud.com/example5" },
        { name: "tidal", url: "https://tidal.com/browse/track/example5" },
        { name: "amazonMusic", url: "https://music.amazon.com/tracks/example5" }
      ]
    },
    {
      id: 6,
      title: "SHITTIN' ME",
      artist: "BOYX",
      releaseDate: "2024-06-01",
      coverImage: "/placeholder.svg?height=300&width=300",
      type: "Single",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/track/example6" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example6" },
        { name: "youtube", url: "https://www.youtube.com/watch?v=example6" },
        { name: "soundcloud", url: "https://soundcloud.com/example6" },
        { name: "tidal", url: "https://tidal.com/browse/track/example6" },
        { name: "amazonMusic", url: "https://music.amazon.com/tracks/example6" }
      ]
    }
  ]);
  
  let filterType = $state('all'); // 'all', 'single', 'album'
  
  const filteredReleases = $derived(
    filterType === 'all' 
      ? releases 
      : releases.filter(release => release.type.toLowerCase() === filterType)
  );
  
  let isVisible = $state(false);
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm py-4 px-6">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <button onclick={() => navigateToPage('home')} class="font-bold text-xl text-white hover:underline">
        ← ASAP !!!!
      </button>
      <h1 class="text-white text-xl font-bold">NEW RELEASES</h1>
    </div>
  </nav>
  
  <!-- Hero Section -->
  <section class="pt-24 pb-16 px-6">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-6xl md:text-8xl font-black text-white mb-6">
        NEW RELEASES
      </h1>
      <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Stream the latest tracks and albums from BOYX across all major platforms
      </p>
      
      <!-- Filter buttons -->
      <div class="flex justify-center gap-4 mb-12">
        <button 
          onclick={() => filterType = 'all'}
          class="px-6 py-2 rounded-full border border-white/20 text-white transition-all duration-300"
          class:bg-white={filterType === 'all'}
          class:text-black={filterType === 'all'}
         
        >
          All
        </button>
        <button 
          onclick={() => filterType = 'single'}
          class="px-6 py-2 rounded-full border border-white/20 text-white transition-all duration-300"
          class:bg-white={filterType === 'single'}
          class:text-black={filterType === 'single'}
         
        >
          Singles
        </button>
        <button 
          onclick={() => filterType = 'album'}
          class="px-6 py-2 rounded-full border border-white/20 text-white transition-all duration-300"
          class:bg-white={filterType === 'album'}
          class:text-black={filterType === 'album'}
          
        >
          Albums
        </button>
      </div>
    </div>
  </section>
  
  <!-- Releases Grid -->
  <section class="px-6 pb-24">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredReleases as release, index}
          <div 
            class="opacity-0 translate-y-8 transition-all duration-700"
            style="transition-delay: {index * 100}ms"
            class:opacity-100={isVisible}
            class:translate-y-0={isVisible}
          >
            <ReleaseCard {release} />
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
