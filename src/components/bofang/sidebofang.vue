<template>
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
      <div class="review">
        <el-table :data="tableData" style="width:100%" height="250">
          <!-- <el-table-column prop="_id" label="id" width="180"></el-table-column> -->
          <el-table-column prop="message" label="热门评论" width="180"></el-table-column>
          <el-table-column prop="messname" label="影片名字" width="180"></el-table-column>
          <el-table-column prop="create_time" label="时间" width="180"></el-table-column>
        </el-table>
        <input type="text" value="评论" v-model="mess2">
        <button @click="submit">评论</button>
        <button @click="collect">收藏</button>
      </div>
    </div>
    <div class="sidebar" style="width:400px;borde:1px solid red;float:left">
      <h2>视频选集</h2>
      <el-table :data="tableData1">
          <el-table-column label="序号" width="100" prop="id">
          </el-table-column>
          <el-table-column label="选集" width="200" prop="name">
          </el-table-column>
           <el-table-column label="操作" width="100">
               <el-button>
                   播放
               </el-button>
          </el-table-column>
      </el-table>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import axios from "../../axios";
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  inject: ["reload"],
  data() {
    return {
      value6: "",
      tableData1: [
        {
         id: "1",
         name:"《仙剑奇侠传一》上",
        },
        {
         id: "2",
         name:"《仙剑奇侠传一》下",
        },
        {
          id: "3",
         name:"《仙剑奇侠传三》",
        }
      ],
      mess2: "",
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
    // console.log("this is current player instance object", this.player);
    // console.log(this.sources[0].src);
    self = this;
    this.updateAllMess();
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  created() {},
  methods: {
    updateAllMess() {
      return axios.getAllMess().then(response => {
        //成功了就把data.result里的数据放入messages在页面展示
        console.log(response.data.result);

        this.tableData = response.data.result;
      });
      //收藏
    },
    collect() {
      let data3 = {
        name: window.localStorage.getItem("username"),
        videoname: window.localStorage.getItem("video_url")
      };
      axios
        .addCollect(data3)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.log(response);
        });
    },
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
          self.updateAllMess();
          self.mess2 = "";
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    change(name) {
      //this.$router.push({path:'/bofang'});
      //   this.reload();
      this.$router.push({ path: "/bofang" }); //测试跳转页面是否刷新
      this.$store.commit("set_video_url", name);
      console.log(this.$store.getters.video_url);
      location.reload();
    }
  }
};
</script>
<style scoped>
.display {
  width: 1400px;
  height: 730px;
  border: 1px solid brown;
}
.player {
  border: 1px solid red;
  float: left;
}
.review {
  width: 700px;
  height: 100px;
  border: 1px solid blue;
  float: left;
}
</style>