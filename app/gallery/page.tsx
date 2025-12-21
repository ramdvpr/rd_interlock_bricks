import { promises as fs } from "fs";
import path from "path";
import GalleryClient from "./gallery-client";

export default async function GalleryPage() {
  const imagesDirectory = path.join(process.cwd(), "public/gallery/image");
  const videosDirectory = path.join(process.cwd(), "public/gallery/video");

  let dynamicImages: { src: string; alt: string; category: string }[] = [];
  let dynamicVideos: { src: string; title: string; category: string }[] = [];

  try {
    const imageFilenames = await fs.readdir(imagesDirectory);
    dynamicImages = imageFilenames
      .filter((file) => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
      .map((name) => ({
        src: `/gallery/image/${name}`,
        alt: name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        category: "Gallery",
      }))
      .sort((a, b) => a.alt.localeCompare(b.alt));
  } catch (error) {
    console.error("Error reading gallery image directory:", error);
    dynamicImages = [];
  }

  try {
    const videoFilenames = await fs.readdir(videosDirectory);
    dynamicVideos = videoFilenames
      .filter((file) => /\.(mp4|webm|ogg)$/i.test(file))
      .map((name) => ({
        src: `/gallery/video/${name}`,
        title: name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
        category: "Video",
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.error("Error reading gallery video directory:", error);
    dynamicVideos = [];
  }

  return (
    <GalleryClient
      dynamicImages={dynamicImages}
      dynamicVideos={dynamicVideos}
    />
  );
}
