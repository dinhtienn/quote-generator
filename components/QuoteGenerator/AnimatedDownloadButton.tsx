import React from "react";

import Lottie from "react-lottie-player";
import lottieJson from "../../assets/animated-photo.json";
import {
  CenteredLottie,
  DownloadQuoteCardCon,
  DownloadQuoteCardConText,
} from "../animations/AnimationElement";

interface AnimatedDownloadButtonProps {
  handleDownload: () => void;
}

const AnimatedDownloadButton = ({
  handleDownload,
}: AnimatedDownloadButtonProps) => {
  return (
    <DownloadQuoteCardCon onClick={handleDownload}>
      <CenteredLottie loop animationData={lottieJson} play />
      <DownloadQuoteCardConText>
        Download your quote card
      </DownloadQuoteCardConText>
    </DownloadQuoteCardCon>
  );
};

export default AnimatedDownloadButton;
