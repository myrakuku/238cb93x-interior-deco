import React from 'react';
import PropTypes from 'prop-types';

const VideoEmbed = ({ embedUrl, title }) => {
  return (
    <div style={{ width: '100%', height: '75vh' }}>
      <iframe
        style={{ width: '100%', height: '100%' }}
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

VideoEmbed.propTypes = {
  embedUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoEmbed;