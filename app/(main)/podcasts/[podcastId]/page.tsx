import React from "react";

const SinglePodcast = ({ params }: { params: { podcastId: string } }) => {
	const { podcastId } = params;

	return (
		<div>
			<p>Podcast ID: {podcastId}</p>
		</div>
	);
};

export default SinglePodcast;
