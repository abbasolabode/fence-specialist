import { useQuery } from "@tanstack/react-query";
import { getBlogArticles } from "../services/apiBlogArticles";
import AnchorLink from "./AnchorLink";
import Spinner from "./Spinner";

export default function LatestBlog() {
	const { data: blogPosts = [], isLoading } = useQuery({
		queryKey: ["blogArticles"],
		queryFn: getBlogArticles,
	});

	if (!blogPosts) return null;
	if (isLoading) return <Spinner />;

	return (
		<div className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mt-[6rem] bg-rose-50">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8 md:mb-12 text-center lg:text-left">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
						Latest <span className="text-utiliBlue italic">blog articles</span>
					</h2>
				</div>

				{/* Blog Posts Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 md:mb-12">
					{blogPosts?.map((blogPost) => (
						<div
							key={blogPost?.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							{/* Blog Image */}
							<div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
								<img
									className="w-full h-full object-cover"
									src={blogPost?.image}
									alt={blogPost?.title || "Blog post"}
								/>
							</div>

							{/* Blog Content */}
							<div className="p-4 md:p-6">
								<h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">
									{blogPost?.title}
								</h3>

								{/* Meta Info */}
								<div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
									<span>{blogPost?.owner}</span>
									<span className="h-4 border-l border-gray-300"></span>
									<span>{blogPost?.type}</span>
									<span className="h-4 border-l border-gray-300"></span>
									<span>{blogPost?.date}</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* See All Button */}
				<div className="text-center lg:text-left">
					<AnchorLink
						href="/blog"
						className="inline-block px-6 py-2 bg-spanYellow rounded-lg font-medium hover:bg-opacity-90 transition-colors"
					>
						See all Blog Posts
					</AnchorLink>
				</div>
			</div>
		</div>
	);
}