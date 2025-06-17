<script>
  import MarqueeText from "$components/marquee-text.svelte";
  import Releasecard from "$components/releasecard.svelte";

  const release = $state(
      {
      id: 6,
      title: "SHITTIN' ME",
      artist: "A$AP Rocky",
      releaseDate: "2024-06-01",
      coverImage: "/Where.jpg?height=300&width=300",
      type: "Single",
      platforms: [
        { name: "spotify", url: "https://open.spotify.com/track/5ElMLAQGF9wA2EjVgTWGAY?si=182d92f12f3845d5", icon:"logos:spotify-icon", color: "#1DB954" },
        { name: "appleMusic", url: "https://music.apple.com/us/album/example6", icon:"simple-icons:applemusic", color: "#FA57C1" },
        { name: "youtube", url: "https://youtu.be/akIk6SqpUOk?si=GuT7Sy3uOeCXV_mS", icon:"lineicons:youtube-music", color: "#FF0000" },
        { name: "soundcloud", url: "https://soundcloud.com/example6", icon:"streamline-ultimate:soundcloud-logo-bold", color: "#FF5500" },
        { name: "tidal", url: "https://tidal.com/browse/track/example6", icon:"simple-icons:tidal", color: "#000000" },
        { name: "amazonMusic", url: "https://music.amazon.com/tracks/example6", icon:"arcticons:amazon-music", color: "#FF9900" }
      ]
    }
  );

</script>



<div class="fixed inset-0  pointer-events-none z-0 bottom-[-60vh] left-[-50px] w-[120vw] " style="transform: rotate(355deg);">
    <MarqueeText />
</div>
<div class="flex items-center justify-center min-h-screen md:min-h-0 md:h-screen md:w-full bg-[#fd9719]">
    <div class="w-full md:max-w-md">
        <Releasecard {release} />
    </div>
</div>

