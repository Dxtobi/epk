<script>
  const navItems = $state([
    { label: 'Music', href: '#music' },
    // { label: 'Tour', href: '#tour' },
    // { label: 'Photos', href: '#photos' },
    // { label: 'Shop', href: '#shop' }
  ]);
  
  const socialItems = $state([
    { label: 'logos:spotify-icon', href: 'https://open.spotify.com/artist/2k1ZcJQm3HbgMqNOC9VOpG?si=7GDRnVesSySdWEtx_iKq3Q', color: '#1DB954' },
    { label: 'skill-icons:instagram', href: '/instagram', color: '#E1306C' },
    { label: 'line-md:twitter-x', href: '/twitter', color: '#000000' },
    { label: 'simple-icons:audiomack', href: 'https://audiomack.com/boyxofficial', color: '#FFA200' },
    { label: 'simple-icons:facebook', href: 'https://web.facebook.com/Dextobi/', color: '#1877F3' },
    { label: 'simple-icons:youtube', href: 'https://www.youtube.com/@theboyxofficial', color: '#FF0000' },
    { label: 'simple-icons:tiktok', href: 'https://www.tiktok.com/@officialbadboyx', color: '#010101' },
    { label: 'simple-icons:applemusic', href: 'https://music.apple.com/ng/artist/theboyx/1807344999', color: '#FA57C1' },
    { label: 'simple-icons:deezer', href: 'https://www.deezer.com/artist/171403127', color: '#FF0000' }
  ]);
  
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm py-4 px-6">
  <div class="max-w-7xl mx-auto flex justify-between items-center">
    <div class="flex items-center">
      <a href="/" class="font-bold text-xl mr-10"><img src="/logo.svg" alt="boyx" class="w-[70px] h-auto"/></a>
      <ul class="hidden md:flex space-x-6">
        {#each navItems as item}
          <li>
            <a href={item.href} class="hover:underline">{item.label}</a>
          </li>
        {/each}
      </ul>
    </div>
    
    <ul class="hidden md:flex space-x-6">
      {#each socialItems as item}
        <li>
          <a href={item.href} class="hover:underline  grayscale-100 hover:grayscale-0"><iconify-icon icon={item.label} width="20" height="20" style="color: {item.color};"></iconify-icon></a>
        </li>
      {/each}
    </ul>
    
    <button class="md:hidden" aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>
  </div>
</nav>
