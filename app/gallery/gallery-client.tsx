"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface GalleryClientProps {
    dynamicImages: {
        src: string
        alt: string
        category: string
    }[]
}



const videos = [
    {
        type: 'youtube',
        id: "UfPLP_S1D4s",
        title: "Customer Testimonial",
        description: "Hear what our satisfied customers have to say about RD Interlock Bricks quality and service.",
        format: "vertical" as const,
    },
    {
        type: 'youtube',
        id: "wdPgjfgZaBI",
        title: "Compound Wall Construction",
        description: "Watch how our interlocking bricks make compound wall construction faster and more efficient.",
        format: "vertical" as const,
    },
    {
        type: 'youtube',
        id: "wLFTz4xvO0M",
        title: "Residential Home Construction",
        description:
            "Complete residential home construction showcasing electrical and plumbing line setup within interlocking brick walls.",
        format: "vertical" as const,
    },
    {
        type: 'youtube',
        id: "5UuBM__bvDg",
        title: "Godown Construction",
        description:
            "Industrial godown construction demonstrating the strength and speed of interlocking brick installation.",
        format: "vertical" as const,
    },
]

interface GalleryClientProps {
    dynamicImages: {
        src: string
        alt: string
        category: string
    }[]
    dynamicVideos: {
        src: string
        title: string
        category: string
    }[]
}

export default function GalleryClient({ dynamicImages, dynamicVideos }: GalleryClientProps) {
    const [selectedTab, setSelectedTab] = useState<"images" | "videos">("images")

    // Use dynamic images directly
    const allImages = dynamicImages

    // Merge static and dynamic videos
    const allVideos = [
        ...videos,
        ...dynamicVideos.map(v => ({
            type: 'local',
            src: v.src,
            title: v.title,
            description: "Gallery Video",
            format: "vertical"
        }))
    ]

    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-montserrat)]">
                            Our <span className="text-primary">Gallery</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Explore our projects, manufacturing facility, and see the quality of our interlocking bricks in action.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="py-8 border-b bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setSelectedTab("images")}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${selectedTab === "images"
                                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                                : "bg-background border-2 text-foreground hover:border-primary hover:text-primary"
                                }`}
                        >
                            Photo Gallery
                        </button>
                        <button
                            onClick={() => setSelectedTab("videos")}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${selectedTab === "videos"
                                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                                : "bg-background border-2 text-foreground hover:border-primary hover:text-primary"
                                }`}
                        >
                            Video Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Images Gallery */}
            {selectedTab === "images" && (
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allImages.map((image, index) => (
                                <Card
                                    key={index}
                                    className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    <CardContent className="p-0">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${image.src || "/placeholder.svg"}`}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                unoptimized
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-medium mb-2">
                                                    {image.category}
                                                </div>
                                                <p className="text-sm font-medium">{image.alt}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {selectedTab === "videos" && (
                <section className="py-20 lg:py-32">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {allVideos.map((video: any, index) => (
                                <Card
                                    key={index}
                                    className="group border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl overflow-hidden"
                                >
                                    <CardContent className="p-0">
                                        <div
                                            className={`relative ${video.format === "vertical" ? "aspect-[9/16]" : "aspect-video"} bg-black`}
                                        >
                                            {video.type === 'youtube' ? (
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${video.id}`}
                                                    title={video.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="w-full h-full"
                                                />
                                            ) : (
                                                <video
                                                    controls
                                                    className="w-full h-full object-cover"
                                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}${video.src}`}
                                                >
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                        </div>
                                        <div className="p-4 space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 shrink-0">
                                                    <Play className="h-3 w-3 text-primary" />
                                                </div>
                                                <h3 className="text-sm font-bold font-[family-name:var(--font-montserrat)] group-hover:text-primary transition-colors line-clamp-1">
                                                    {video.title}
                                                </h3>
                                            </div>
                                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{video.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
