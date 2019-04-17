<template>
	<div id="film">
		<Carousel autoplay v-model="value2" height="300px" loop>
        <CarouselItem>
            <div class="demo-carousel">
				<img class="demo-img" src="../../assets/img/哈利波特.jpg" />
			</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
				<img class="demo-img" src="../../assets/img/哈利波特.jpg" />
			</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
				<img class="demo-img" src="../../assets/img/哈利波特.jpg" />
			</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
				<img class="demo-img" src="../../assets/img/哈利波特.jpg" />
			</div>
        </CarouselItem>
    </Carousel>
	</div>
</template>

<script>
	export default {
        data () {
            return {
                value2: 0
            }
        }
	}
</script>

<style>
	.demo-img{
		height: 100%;
		width: 100%;
	}

</style>
