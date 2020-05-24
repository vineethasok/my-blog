<script>
  export let slug, title, date, url;
</script>
<style>

.box {
	margin: 10px;
	width: 300px;
	height: 400px;
	position: relative;
	text-align: center;
	border-radius: 3px;
	-webkit-transition: 200ms ease-in-out;
	-o-transition: 200ms ease-in-out;
	transition: 200ms ease-in-out;
	-webkit-box-shadow: 0 0 15px rgba(0,0,0,0.3);
	        box-shadow: 0 0 15px rgba(0,0,0,0.3);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}
.box:hover {
  transform: scale(0.9, 0.9);
	-webkit-box-shadow: 0 0 5px rgba(0,0,0,0.7);
	        box-shadow: 0 0 5px rgba(0,0,0,0.7);
}
.box h1 {
	color: #fff;
	padding: 30px;
	margin-top: 100px;
	text-align: center;
	font-weight: 100;
	font-size: 25px;
	background: rgba(0,0,0,0.8);
	-webkit-box-shadow: 0 0 30px rgba(0,0,0,0.7);
	        box-shadow: 0 0 30px rgba(0,0,0,0.8);
}

.date {
	position: absolute;
	width: 100%;
	padding-top: 1rem;
	padding-bottom: 1rem;
	bottom: 0;
	background: rgba(0,0,0,0.8);
}

.date h4 {
	color: #fff;
	font-weight: 300;
	text-align: center;
	letter-spacing: 3px;
	text-shadow: 0 0 3px rgba(0,0,0,0.9);
}
</style>

<a class="box {slug}" href="{url}" rel='prefetch' >
  <div class="date">
    <h4>{date}</h4>
  </div>
  <h1>{title}</h1>
</a>