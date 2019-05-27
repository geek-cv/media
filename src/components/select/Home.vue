<template>
	<div id="film">
		<Carousel autoplay v-model="value2" height="400px" loop>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/三体.jpg" />
				</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/哈利波特.jpg" />
				</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/爱丽丝梦游记.jpg" />
				</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/秒速五厘米.jpg" />
				</div>
			</CarouselItem>
		</Carousel>
		<div class="display">
			<h2>正在热播</h2>
			<Row :gutter="16">
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/小偷家族.jpg" />
					<p>
					<Rate disabled value='3' />
					<a @click="change('xiaotoujiazu')">小偷家族</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/新喜剧之王.jpg" />
					<p>
					<Rate disabled value='4' />
					<a @click="change('xinxijuzhiwang')">新喜剧之王</a>
					</p>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/疯狂的外星人.jpg" />
					<p>
						<Rate disabled value='4' />
						<a @click="change('fengkuangdewaixingren')">疯狂的外星人</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/飞驰人生.jpg" />
					<p>
						<Rate disabled value='4' />
						<a @click="change('feichirensheng')">飞驰人生</a>
					</p>
				</div>
				</Col>
			</Row>
			<h2>热门推荐</h2>
			<Row :gutter="16">
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/绿皮书.jpg" />
					<p>
						<Rate disabled value='4' />
						<a @click="change('lvpishu')">绿皮书</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/过春天.jpg" />
					<p>
						<Rate disabled value='4' />
						<router-link to='/bofang'>
							过春天
						</router-link>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/阳台上.jpg" />
					<p>
						<Rate disabled value='4' />
						<router-link to='/bofang'>
							阳台上
						</router-link>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/飞驰人生.jpg" />
					<p>
						<Rate disabled value='4' />
						<a @click="change('feichirensheng')">飞驰人生</a>
					</p>
				</div>
				</Col>
			</Row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value2: 0,
			}
		},
		methods: {
			change(name)
			{
				this.$router.push({path:'/bofang'});
				this.$store.commit("set_video_url",name);
				console.log(this.$store.getters.video_url)
			}
			
		},
		mounted(){
			//window.localStorage.removeItem("video_url")
		}
	}
</script>

<style>
	.demo-img {
		height: 100%;
		width: 100%;
	}
	.display{
		margin-top: 20px;
	}
	/* .display-film p{
		font-size: 20px;
		text-align: center;
	} */
</style>
