import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.movieTrailer);
  if (!trailer) return;
  const { key } = trailer;
  return (
    <iframe
      className="aspect-video w-full absolute left-0 top-0"
      src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&?modestbranding=1&showinfo=0&si=1JM2c2cZMugG8Xv6`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      frameBorder="0"
    ></iframe>
  );
};

export default VideoBackground;
