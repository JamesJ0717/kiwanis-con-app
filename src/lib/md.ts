import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export async function getContent() {
  const fullPath = path.join("public/main.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString().replaceAll("<a ", "<a target='_blank'");

  return {
    contentHtml,
    ...matterResult.data,
  };
}
