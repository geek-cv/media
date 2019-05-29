<template>
  <div>
    <div class="display">
      <div class="player">
        <video-player
          class="video-player-box"
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
          @ready="playerReadied"
        ></video-player>
      </div>
      <div class="review">
        <el-table :data="tableData" style="width:100%" height="300">
          <!-- <el-table-column prop="_id" label="id" width="180"></el-table-column> -->
          <el-table-column prop="message" label="热门评论" width="180"></el-table-column>
          <el-table-column prop="messname" label="影片名字" width="180"></el-table-column>
        </el-table>
        <input type="text" value="评论" v-model="mess2">
        <button @click="submit()">评论</button>
        <div>

        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import axios from "../../axios";
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  data() {
    return {
      value6: "",
      tableData: [
        {
          _id: "",
          message: "",
          messname:""
        }
      ],
      url: window.localStorage.getItem("video_url"),
      starvalue: "",
      message: "",
      playerOptions: {
        // videojs options
        muted: false,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            src:
              "http://39.108.94.12/" +
              window.localStorage.getItem("video_url") +
              ".mp4"
          }
        ],
        width: 700,
        height: 400 //document.documentElement.clientWidth, //播放器宽度
      }
    };
  },
  mounted() {
    console.log("this is current player instance object", this.player);
    console.log(this.sources[0].src);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  created() {
    axios.getAllMess().then(response => {
      //成功了就把data.result里的数据放入messages在页面展示
      this.tableData = response.data.result;
    });
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
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
    submit() {
      let data2 = {
        name: window.localStorage.getItem("video_url"),
        mess: this.mess2
      };
      axios
        .addMess(data2)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.display {
  width: 1000px;
  height: 400px;
  border: 1px solid brown;
}
.player {
  border: 1px solid red;
  float: left;
}
.review {
  width: 296px;
  height: 400px;
  border: 1px solid blue;
  float: left;
}
.footer {
  height: 100px;
  width: 1000px;
  border: 1px solid red;
}
</style>