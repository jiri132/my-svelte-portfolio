<script lang="ts">
    import { previewData } from "./data";

</script>
  
<section class="preview">
    <article class="first window" style="background-image: url('{ previewData.firstProjectImage }')" />
    <article class="second window" style="background-image: url('{ previewData.secondProjectImage }')" />
    <article class="third window" style="background-image: url('{ previewData.thirdProjectImage }')" />
</section>
  
  
<style lang="scss">
  
  .preview {
    position: relative;
    padding: 0px 16px;
    margin-top: 64px;
    width: 100%;
    height: 520px;
  
    @media (min-width: 280px) and (max-width: 426px) {
        margin-top: 0px;
        padding: 0px 0px;
      }

    // Gradient Backdrop
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 900px;
      height: 520px;
  
      transition: transform 0.5s;
      background-image: radial-gradient(at 27% 37%,#3a8bfd 0,transparent 50%),radial-gradient(at 97% 21%,#9772fe 0,transparent 50%),radial-gradient(at 52% 99%,#fd3a4e 0,transparent 50%),radial-gradient(at 30% 59%,#5afc7d 0,transparent 50%),radial-gradient(at 67% 66%,#ecbc68 0,transparent 30%),radial-gradient(at 33% 50%,#8ca8e8 0,transparent 50%),radial-gradient(at 79% 53%,#eea5ba 0,transparent 50%);
      
      @media only screen and (min-width: 640px) {
        transform: scaleX(-1) translate(50%, -50%);
  
        filter: blur(100px) saturate(150%);
        opacity: .3;
      }
  
      @media only screen and (max-width: 640px) {
        transform: scaleX(-.5) translate(100%, -50%);
  
        filter: blur(60px) saturate(150%);
        opacity: .3;
      }
      
    }
  
    .window {
      position: absolute;
  
      width: 480px;
      height: 320px;
  
      background-color: #111;
      border: 1px solid #404040;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  
      transform: translate(-50%, -50%);
  
      background-size: cover;
      transition: transform 0.5s, top 0.5s, left 0.5s, width 0.5s, height 0.5s;
  
      @media only screen and (min-width: 640px) {
        &.first {
          z-index: 2;
          height: 360px;
  
          top: calc(50% - 80px);
          left: calc(50% - 180px);
        }
  
        &.second {
          z-index: 1;
          width: 640px;
  
          top: calc(50% - 20px);
          left: calc(50% + 80px);
        }
  
        &.third {
          z-index: 3;
  
          top: calc(50% + 80px);
          left: 50%;
        }
      }
  
      @media only screen and (max-width: 640px) {
        &.first {
          z-index: 1;
          width: 240px;
          height: 155px;
  
          top: calc(50% - 120px);
          left: 50%;
          
          background-image: url('src/assets/img/codex.png');
        }
  
        &.second {
          z-index: 0;
          height: 160px;
          width: 320px;
  
          top: 50%;
          left: 50%;
  
          background-image: url('src/assets/img/barnstorm.jpg');
        }
  
        &.third {
          z-index: 2;
          width: 240px;
          height: 160px;
  
          top: calc(50% + 120px);
          left: 50%;
  
          background-image: url('src/assets/img/emberry.png');
        }
      }
    }
  }
  
  </style>