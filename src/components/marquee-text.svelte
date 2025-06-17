<script>
  let marqueeItems = $state([
    'BOYX99', 'BOYX99', 'BOYX99', 'BOYX99', 'BOYX99', 'BOYX99', 'BOYX99', 'BOYX99'
  ]);
</script>

<div class="marquee-container">
  <div class="marquee michroma-bold">
    {#each marqueeItems as item, i}
      <span class="marquee-item text-black">{item}</span>
    {/each}
  </div>
</div>

<style>
  .marquee-container {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  .marquee {
    display: flex;
    width: fit-content;
    animation: marquee 300s linear infinite;
    white-space: nowrap;
  }
  
  .marquee2 {
    animation-direction: reverse;
    animation-duration: 100s;
  }
  
  .marquee-item {
    font-size: 40vw;
   
    padding: 0 20px;
    
    text-transform: uppercase;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>
