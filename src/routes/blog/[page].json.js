import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import _ from 'lodash';

const getAllPosts = () =>

	fs.readdirSync("content").map(fileName => {
		const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
		return grayMatter(post).data;
	});

export function get({ params }, res) {
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	let numberOfElements = 16
	let currentPage = params.page
	let posts = _.orderBy(getAllPosts(), 'date', 'desc')
	posts = _.chunk(posts, numberOfElements)
	let blog = {
		posts: posts[currentPage - 1],
		pages: {
			current: currentPage,
			last: posts.length
		}
	}
	res.end(JSON.stringify(blog));
}