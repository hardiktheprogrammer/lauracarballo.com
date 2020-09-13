export default function Youtube({ videoId, width = "100%", height = 366 }) {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="youtube-container">
      <iframe
        width={width}
        height={height}
        src={src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen="1"
      />
    </div>
  );
}
