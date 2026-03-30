const IMAGES = {
  EmptyList: "/Empty-list.jpg",
  EmptyGallery: "/Empty-Gallery.jpg",
  EmptyFolder: "/Empty-Folder.avif"
};

const SIZES = {
  small: "w-16 h-16",
  middle: "w-40 h-40",
  large: "w-60 h-60"
};

function Empty({ title, size = "small", image = "EmptyList" }) {
  let imageSrc = IMAGES[image] ? IMAGES[image] : image;
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={imageSrc} alt="empty" className={SIZES[size]} />
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default Empty;
