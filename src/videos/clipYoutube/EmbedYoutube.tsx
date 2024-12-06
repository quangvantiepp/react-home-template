import { Space } from "antd";
import React from "react";

const EmbedYoutube: React.FC = () => {
  return (
    <>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/6rD4C61STps"
        title="video"
      >
        video
      </iframe>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/-57QMghHX14"
        title="video"
      />
    </>
  );
};

export default EmbedYoutube;
