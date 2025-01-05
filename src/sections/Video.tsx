import React from 'react';

const Video: React.FC = () => {
    return (
        <section className="video section" id="video">
            <h2 className="section-title">Video</h2>

            <div className="video__container container">
                <video src="assets/videos/video
                .mp4" controls className="video__content" />
            </div>
        </section>
    );
}

export default Video;