import FeaturedHighlightsSection from "../gallery/FeaturedHighlightsSection";
import GalleryCTASection from "../gallery/GalleryCTASection";
import GalleryHeroSection from "../gallery/GalleryHeroSection";
import GalleryMasonrySection from "../gallery/GalleryMasonrySection";
import VideoShowcaseSection from "../gallery/VideoShowcaseSection";


const Gallery = () => {
  return (
    <>
      <GalleryHeroSection />
      <FeaturedHighlightsSection />
      <GalleryMasonrySection />
      <VideoShowcaseSection/>
      <GalleryCTASection />
    </>
  );
};

export default Gallery;