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
  const posts = _.orderBy(getAllPosts(),'date', 'desc')
  let blog = {
    posts: _.chunk(posts, 3)[0],
  }
  res.end(JSON.stringify(blog));
}