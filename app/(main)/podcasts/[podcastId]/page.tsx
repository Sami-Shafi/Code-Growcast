import React from "react";

const SinglePodcast = ({ params }: { params: { podcastId: string } }) => {
	const { podcastId } = params;

	return (
		<div>
			<p>Podcast ID: {podcastId}</p>
            <h2>Single Podcast Details Page</h2>
		</div>
	);
};

export default SinglePodcast;
