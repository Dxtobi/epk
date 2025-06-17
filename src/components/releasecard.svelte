<script>
  let { release } = $props();
  
  let isHovered = $state(false);
  let isExpanded = $state(true);
  
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
</script>

<div 
  class="backdrop-blur-2xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
  class:scale-[1.02]={isHovered}
  onmouseenter={() => isHovered = true}
  onmouseleave={() => isHovered = false}
  role="group"
>
  <div class="relative aspect-square overflow-hidden">
    <img 
      src={release.coverImage || "/placeholder.svg"} 
      alt={`${release.title} by ${release.artist}`}
      class="w-full h-full object-cover transition-transform duration-700"
      class:scale-105={isHovered}
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300"
      class:opacity-100={isHovered}
    ></div>
    
    <!-- Play button overlay -->
    <div 
      class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
      class:opacity-100={isHovered}
    >
      <!-- <button class="w-16 h-16 rounded-full bg-white flex items-center justify-center">
        
       <span class="text-black text-2xl">▶</span> 
      </button> -->
    </div>
    
    <!-- Release type badge -->
    <div class="absolute top-4 right-4  backdrop-blur-md px-3 py-1 rounded-full">
      <span class="text-xs font-medium text-white">{release.type}</span>
    </div>
  </div>
  
  <div class="p-6">
    <h3 class="text-xl font-bold text-white mb-1">{release.title}</h3>
    <p class="text-gray-50 mb-3">{release.artist}</p>
    <p class="text-gray-50 text-sm mb-4">{formatDate(release.releaseDate)}</p>
    
    <!-- Listen on platforms -->
    <div>
      <button 
        onclick={() => isExpanded = !isExpanded}
        class="bg-[#fd9719]/50  w-full py-2 px-4  transition-colors duration-300 rounded-md text-white text-sm font-medium backdrop-blur-3xl flex items-center justify-between"
      >
        Listen on platforms
        <span class="transition-transform duration-300" class:rotate-180={isExpanded}>↓</span>
      </button>
      
      {#if isExpanded}
        <div class="mt-3 grid grid-cols-2 gap-2">
          {#each release.platforms as platform}
            <a 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex capitalize items-center gap-2 py-2 px-3 bg-[#fd9719]/60  transition-colors duration-300 rounded text-sm text-white"
            >
              <iconify-icon icon={platform.icon} width="20" height="20" style="color: {platform.color};"></iconify-icon>
              <span>{platform.name}</span>
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
