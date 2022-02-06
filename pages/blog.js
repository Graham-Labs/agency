import { getPosts, getPages } from "../lib/posts";
import PostLink from "../components/PostLink";

export default function Home({ newPosts, newPages }) {
	console.log("Title ===> ", newPosts);

	return (
		<div className="w-full h-full flex flex-col justify-center md:flex-row">
			{/* <ScrollToTopButton /> */}
			<h1 className="font-poppins font-bold ml-10 mt-10 text-[60px] md:flex md:justify-center md:sticky">
				Blog
			</h1>
			<ul className="m-10">
				{newPosts.map((eachPost, i) => (
					<PostLink key={i} eachPost={eachPost} />
				))}
			</ul>
		</div>
	);
}

export async function getStaticProps(context) {
	const posts = await getPosts();
	const pages = await getPages();

	let newPosts = [];
	let newPages = [];

	posts.forEach((eachPost, i) => {
		newPosts.push(eachPost);
	});

	pages.forEach((eachPage, i) => {
		newPages.push(eachPage);
	});

	if (!posts) {
		return {
			notFound: true,
		};
	}

	if (!pages) {
		return {
			notFound: true,
		};
	}

	return {
		props: { newPosts, newPages },
		revalidate: 10,
	};
}
