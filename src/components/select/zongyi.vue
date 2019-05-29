<template>
	<div id="film">
		<div class="display">
			<h2>热门综艺</h2>
			<Row :gutter="16">
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/向往的生活3.jpg" />
					<p>
					<Rate disabled value='3' />
					<a >向往的生活</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/奔跑吧3.jpg" />
					<p>
					<Rate disabled value='4' />
					<a>奔跑吧3</a>
					</p>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/密室大逃脱.jpg" />
					<p>
						<Rate disabled value='4' />
						<a>密室大逃脱</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/快乐大本营.jpg" />
					<p>
						<Rate disabled value='4' />
						<a>快乐大本营</a>
					</p>
				</div>
				</Col>
			</Row>
			<h2>精选剧集</h2>
			<Row :gutter="16">
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/海峡两岸.jpg" />
					<p>
						<Rate disabled value='4' />
						<a>海峡两岸</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/等着我.jpg" />
					<p>
						<Rate disabled value='4' />
						<a>等着我</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/今日关注.jpg" />
					<p>
						<Rate disabled value='4' />
						<a>今日关注</a>
					</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/digit/非诚勿扰.jpg" />
					<p>
						<Rate disabled value='4' />
						<a @click="change('feichengwurao')">非诚勿扰</a>
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
</style>
