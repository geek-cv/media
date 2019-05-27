<template>
	<div class="content">
		<div class="player">
		<video-player  class="video-player-box"
		               ref="videoPlayer"
		               :options="playerOptions"
		               :playsinline="true"
		               customEventName="customstatechangedeventname"
		
		               @play="onPlayerPlay($event)"
		               @pause="onPlayerPause($event)"
		               @ended="onPlayerEnded($event)"
		               @waiting="onPlayerWaiting($event)"
		               @playing="onPlayerPlaying($event)"
		               @loadeddata="onPlayerLoadeddata($event)"
		               @timeupdate="onPlayerTimeupdate($event)"
		               @canplay="onPlayerCanplay($event)"
		               @canplaythrough="onPlayerCanplaythrough($event)"
		
		               @statechanged="playerStateChanged($event)"
		               @ready="playerReadied">
		</video-player>
		</div>
	</div>
  
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  export default {
  
    data() {
      return {
        url:window.localStorage.getItem('video_url'),
				starvalue:'',
				message:'',
        playerOptions: {
          // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src:"http://39.108.94.12/"+window.localStorage.getItem('video_url')+".mp4"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {

      console.log('this is current player instance object', this.player)
      console.log(this.sources[0].src)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>
<style>
	.player{
		height: 600px;
		width: 600px;
	}
</style>