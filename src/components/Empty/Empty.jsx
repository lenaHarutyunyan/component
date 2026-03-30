function Empty({
  title,
  size = "small",
  img = "EmptyList",
  customImg
}) {
  const Images = {
    EmptyList: "/Empty-list.jpg",
    EmptyGallery: "/Empty-Gallery.jpg",
    EmptyFolder: "/Empty-Folder.avif",
  };

  const Sizes = {
    small: "w-16 h-16",
    middle: "w-40 h-40",
    large: "w-60 h-60",
  };

  const imageSrc = customImg || Images[img];

  return (
    <div className="flex flex-col items-center gap-2">
      <img src={imageSrc} alt="empty" className={Sizes[size]} />
      <h2>{title}</h2>
    </div>
  );
}

export default Empty;
