"use client";
import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [isDownloading, setDownloading] = useState(false);

const handleDownload = async () => {
  try {
    setDownloading(true);

    // Get user's country from IP
    const res = await fetch("https://ipapi.co/json/");
    const locationData: { country_name?: string } = await res.json();
    const country = locationData.country_name || "Unknown";

    // Send data to your Neon DB via API route
    await fetch("/.netlify/functions/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country }),
    });

    // Trigger download using environment variable safely
    const downloadUrl = process.env.NEXT_PUBLIC_DOWNLOAD_URL;
    if (downloadUrl) {
      window.location.href = downloadUrl;
    } else {
      console.error("Download URL is not configured in environment variables.");
    }
  } catch (err) {
    console.error("Download tracking failed:", err);
  } finally {
    setDownloading(false);
  }
};


  return (
    <section className="relative pb-0" id="home-section">
      <div className="bg-banner-image absolute w-full h-full top-0 blur-390"></div>
      <div className="overflow-hidden">
        <div className="container lg:pt-20 pt-10 relative">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 my-16 items-center">
              <div className="lg:col-span-7 mb-16">
                <h1 className="mb-5 lg:text-start text-center sm:leading-snug leading-tight capitalize">
                  Take Control of <br /> Your Screen Time
                </h1>
                <p className="text-white font-normal mb-10 max-w-[70%] lg:text-start text-center lg:mx-0 mx-auto capitalize">
                  Manage apps, block distractions, and boost your focus. Track your daily usage, set smart limits, and build healthy digital habits effortlessly.
                </p>
                <div className="flex align-middle justify-center lg:justify-start">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6 cursor-pointer"
                  >
                    {isDownloading ? "Downloading..." : "Download"}
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 lg:-m-48 -m-20 overflow-hidden">
                <Image
                  src={getImagePath("/images/banner/banner.png")}
                  alt="nothing"
                  width={1013}
                  height={760}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
