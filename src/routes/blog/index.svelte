<script context="module">
	export function preload({ params, query }) {
		let url = `blog/1.json`
		return this.fetch(url).then(r => r.json()).then(blog => {
			return { blog };
		});
	}
</script>

<script>
	import CardList from '../../components/CardList.svelte';
	import Pagination from '../../components/Pagination.svelte';
	export let blog;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Blog Posts</h1>
<CardList contentArray="{blog.posts}" />
<Pagination currentPage="{blog.pages.current}" lastPage="{blog.pages.last}" url="blog" pageType="page" />