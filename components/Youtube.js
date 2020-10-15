export default function Youtube({ videoId, width = "100%", height = 450 }) {
  const src = `https://www.youtube.com/embed/${videoId}?version=3&loop=1&playlist=${videoId}`;
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
