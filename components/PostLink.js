import React from "react";
import { format, localeFormat } from "light-date";
import Link from "next/link";

function PostLink({ eachPost }) {
	return (
		<>
			<Link href="/post/[slug]" as={`/post/${eachPost.slug}`}>
				<a href="" className="hover:text-gray-500 underline text-[18px]">
					{eachPost.title}
				</a>
			</Link>
			<ul className="mt-4 flex text-[14px]">
				<li>
					Publish Date:{" "}
					{localeFormat(new Date(eachPost.published_at), "{MMM}") +
						" " +
						format(new Date(eachPost.published_at), "{dd}")}
				</li>

				<li className="ml-5">Time: {eachPost.reading_time} mins</li>
			</ul>
			<p className="mt-5 mb-14 max-w-2xl">{eachPost.excerpt}</p>
		</>
	);
}

export default PostLink;
