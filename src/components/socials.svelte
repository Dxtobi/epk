<script>

  const socialItems = $state([
     { label: 'logos:spotify-icon', href: 'https://open.spotify.com/artist/2k1ZcJQm3HbgMqNOC9VOpG?si=7GDRnVesSySdWEtx_iKq3Q', color: '#1DB954' },
    { label: 'skill-icons:instagram', href: 'https://www.instagram.com/boyxofficial/', color: '#E1306C' },
    { label: 'line-md:twitter-x', href: 'https://x.com/programmer_dex', color: '#000000' },
    { label: 'simple-icons:audiomack', href: 'https://audiomack.com/boyxofficial', color: '#FFA200' },
    { label: 'simple-icons:facebook', href: 'https://web.facebook.com/Dextobi/', color: '#1877F3' },
    { label: 'simple-icons:youtube', href: 'https://www.youtube.com/@theboyxofficial', color: '#FF0000' },
    { label: 'simple-icons:tiktok', href: 'https://www.tiktok.com/@officialbadboyx', color: '#010101' },
    { label: 'simple-icons:applemusic', href: 'https://music.apple.com/ng/artist/theboyx/1807344999', color: '#FA57C1' },
    { label: 'simple-icons:deezer', href: 'https://www.deezer.com/artist/171403127', color: '#FF0000' }
  ]);
</script>


<div class="min-h-[30vh] w-full flex justify-center flex-wrap items-center gap-5  bg-opacity-90 backdrop-blur-sm  px-4 py-32">
    {#each socialItems as item}
        <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}  class="p-5 rounded-xl border-2 border-gray bg-white bg-opacity-90 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300 grayscale-100 hover:grayscale-0">
            <iconify-icon icon={item.label} width="50" height="50" style="color: {item.color};"></iconify-icon>
        </a>
    {/each}
</div>