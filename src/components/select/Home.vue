<template>
	<div id="film">
		<Carousel autoplay v-model="value2" height="400px" loop>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/哈利波特.jpg" />
				</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/秒速五厘米.jpg" />
				</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/爱丽丝梦游记.jpg" />
				</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">
					<img class="demo-img" src="../../assets/img/home/你的名字2.jpg" />
				</div>
			</CarouselItem>
		</Carousel>
		<div class="display">
			<h2>正在热播</h2>
			<Row :gutter="16">
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/小偷家族.jpg" />
					<p>小偷家族</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/新喜剧之王.jpg" />
					<p>新喜剧之王</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/疯狂的外星人.jpg" />
					<p>疯狂的外星人</p>
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/飞驰人生.jpg" />
					<p>飞驰人生</p>
				</div>
				</Col>
			</Row>
			<h2>热门推荐</h2>
			<Row :gutter="16">
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/小偷家族.jpg" />
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/新喜剧之王.jpg" />
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/疯狂的外星人.jpg" />
				</div>
				</Col>
				<Col span="6">
				<div class="display-film">
					<img src="../../assets/img/home/飞驰人生.jpg" />
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
				value2: 0
			}
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
	.display-film p{
		font-size: 20px;
		text-align: center;
	}
</style>
