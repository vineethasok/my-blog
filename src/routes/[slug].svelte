<script context="module">
	export async function preload(page) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${page.params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data, currentUrl: `${page.host}${page.path}` };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import SocialShare from '../components/SocialShare.svelte';
	export let post, currentUrl;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content {
		margin: 6rem 2rem;
		font-size: 1.4em;
	}

	.content :global(h2) {
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.content :global(.video-container) {
		position: relative;
		padding-top: 56.25%;
	}

	.content :global(.video-container) :global(*) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.content :global(img) {
		width: 100%;
	}

	.cover-image-container {
		position: relative;
	}

	.cover-image-container::after {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(191, 126, 104, 0.56);
	}

	.cover-title {
		position: absolute;
		bottom: 10%;
		color: white;
		padding-left: 1rem;

	}

	.cover-image-container h4 {
		display: flex;
	}

	.cover-image-container h4 svg {
		fill: white;
		width: 2rem;
		height: 2rem;
		padding-right: 1rem;
	}


	.cover-image {
		position: relative;
		height: 400px;
		margin: -2em;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		filter: blur(1px);
		-webkit-filter: blur(1px);
	}

</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<div class="cover-image-container">
	<div class="cover-image {post.slug}">
	</div>
	<div class="cover-title">
		<h1>{post.title}</h1>
		<h4>
			<svg>
			<use xlink:href="fa.svg#clock"></use>
		</svg>
		{post.date}
		</h4>
	</div>
</div>

<div class='content'>
	{@html post.html}
</div>

<SocialShare text="123" url="{currentUrl}"/>