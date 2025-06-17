<script>
  import MarqueeText from './marquee-text.svelte';
  import Sportifysingle from './Sportifysingle.svelte';
  
  // Props
  let { scrollY = 0 } = $props();
  
  // Calculate image position based on scroll
  const imageTransform = $derived(
    scrollY < 100 
      ? 'translate(0, 0) scale(1)' 
      : `translate(0, -${Math.min(scrollY - 100, 300)}px) scale(${Math.max(0.7, 1 - (scrollY - 100) / 1000)})`
  );
  
  // Calculate image opacity based on scroll
  const imageOpacity = $derived(
    scrollY < 100 ? 1 : Math.max(0, 1 - (scrollY - 100) / 300)
  );
  
  let imageLoaded = $state(false);
  
  function handleImageLoad() {
    setTimeout(() => {
      imageLoaded = true;
    }, 300);
  }
</script>

<div class="fixed inset-0  pointer-events-none z-0 bottom-[-60vh] right-[-50px]" style="transform: rotate(355deg);">
    <MarqueeText />
</div>
<section class="relative h-screen overflow-hidden">
  <!-- Fixed background text -->
  
  <!-- Hero content -->
  <div class="relative z-10 h-full flex flex-col justify-center items-center px-4">
    <div class="max-w-6xl w-full">
      <div class="flex flex-col md:flex-row items-center justify-between gap-2">
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
          
          <img 
              src="/thelogo.svg?height=600&width=600" 
              alt="ASAP Rocky" 
              class="w-full h-auto transition-transform duration-700"
              onload={handleImageLoad}
            />
            <div class="flex gap-4 mt-6">
                <a href="https://www.youtube.com/@theboyxofficial" class="bg-black text-center text-white px-6 py-2 rounded shadow hover:bg-gray-900 transition-colors w-1/2">
                    Go to Videos
                </a>
                <a href="/New" class=" text-[#6b9e0c] border border-[#a3e42c] px-6 py-2  text-center rounded shadow backdrop-blur-xl transition-colors w-1/2 cursor-pointer">
                    Latest Release
                </a>
            </div>
        </div>
        <div 
          class="w-full md:w-1/2 relative transition-all duration-700 ease-out"
          style="transform: {imageTransform}; opacity: {imageOpacity};"
        >
          <div 
            class="relative overflow-hidden transition-all duration-1000 backdrop-blur-md"
            class:translate-y-0={imageLoaded}
            class:translate-y-full={!imageLoaded}
          >
            <img 
              src="/DX.png?height=600&width=600" 
              alt="ASAP Rocky" 
              class="w-full h-auto transition-transform duration-700"
              onload={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-10 left-0 right-0 m-auto md:w-[20%] w-[95%] flex justify-center items-center h-20 bg-black/50 backdrop-blur-md">
      <Sportifysingle />
    </div>
  </div>
  
</section>
