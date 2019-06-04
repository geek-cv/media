<template lang="">
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
    <div class="sidedisplay" style="margin-left:20px">
      <h2>综合高分</h2>
      <Col span="6">
        <div class="img1" style="float:left;">
          <img src="../../assets/img/bofang/小偷家族.jpg">
        </div>
        <div>
          <p style="text-indent:2em;">讲述柴田家靠犯罪来维持家计，在一家之主柴田治捡回一个遍体鳞伤的小女孩后，这个家庭的秘密渐渐曝光的故事。
          </p>
        </div>
        <p>
          <a @click="change('xiaotoujiazu')">小偷家族</a>
        </p>
      </Col>
      <Col span="6">
        <div class="img1" style="float:left;">
          <img src="../../assets/img/bofang/大鱼海棠.jpg">
        </div>
        <div>
          <p style="text-indent:2em;">该片讲述了掌管海棠花生长的少女椿为报恩而努力复活人类男孩“鲲”的灵魂，在本是天神的湫帮助下与彼此纠缠的命运斗争的故事。
          </p>
        </div>
        <p>
          <a @click="change('dayuhaitang')">大鱼海棠</a>
        </p>
      </Col>
      <h2>经典影片</h2>
      <Col span="6">
        <div class="img1" style="float:left;">
          <img src="../../assets/img/bofang/秒速五厘米.jpg">
        </div>
        <div>
          <p style="text-indent:2em;">动画以一个少年为故事轴心而展开连续3个独立故事的动画短篇，时代背景是从1990年代至现代的日本，通过少年的人生展现东京以及其他地区的变迁。
          </p>
          </div>
        <p>
          <a @click="change('miaosuwulimi')">秒速五厘米</a>
        </p>
      </Col>
      <Col span="6">
        <div class="img1" style="float:left;">
          <img src="../../assets/img/bofang/三体.jpg">
        </div>
        <div><p style="text-indent:2em;">
          作品讲述了地球人类文明和三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。</p>
          </div>
        <p>
          <a @click="change('miaosuwulimi')">三体</a>
        </p>
      </Col>
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
      tableData: [
        {
          _id: "",
          message: "",
          messname: "",
          create_time: ""
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
            src:"http:\\C:\Users\sun\Desktop\sun.mp4"
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
      location.reload()
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