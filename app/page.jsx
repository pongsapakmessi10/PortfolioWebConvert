"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PortfolioSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "final-concept",
      title: "Final Concept",
      subtitle:
        "Refined the visual design and emphasized data visualization to help customers make better trade-offs",
      images: [
        { label: "Screenshot" },
        { label: "Screenshot" },
        { label: "Screenshot or video", wide: true },
      ],
    },
    {
      type: "before-after",
      title: "Final Design",
      before: {
        title: "BEFORE",
        description: "Description of the problem",
        label: "Screenshot or video",
      },
      after: {
        title: "AFTER",
        description: "What you fixed",
        label: "Screenshot or video",
      },
    },
    {
      type: "testimonial",
      quote:
        '"The new system helped me increase my productivity by 200%. There was something about it that just made me feel empowered and efficient."',
      author: "PERSON",
      imageLabel: "Photo of a person / final product",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <div className="flex justify-between items-center p-6">
        <button
          onClick={prevSlide}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentSlide ? "bg-blue-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 pb-12">
        {slide.type === "final-concept" && (
          <div>
            <div className="mb-12">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                FINAL DESIGN
              </p>
              <h1 className="text-5xl font-normal text-blue-900 mb-6">
                {slide.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl">{slide.subtitle}</p>
            </div>

            <div className="grid grid-cols-17 gap-6">
              {slide.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`bg-gray-200 flex items-center justify-center ${
                    img.wide ? "col-span-7" : "col-span-5"
                  }`}
                  style={{ minHeight: "500px" }}
                >
                  <span className="text-gray-500 text-lg">{img.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {slide.type === "before-after" && (
          <div>
            <div className="mb-12">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                BEFORE & AFTER
              </p>
              <h1 className="text-5xl font-normal text-blue-900">
                {slide.title}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div
                  className="bg-gray-200 flex items-center justify-center mb-6"
                  style={{ minHeight: "420px" }}
                >
                  <span className="text-gray-500 text-lg">
                    {slide.before.label}
                  </span>
                </div>
                <h2 className="text-blue-900 font-semibold text-sm tracking-wider mb-2">
                  {slide.before.title}
                </h2>
                <p className="text-gray-600">{slide.before.description}</p>
              </div>

              <div>
                <div
                  className="bg-gray-200 flex items-center justify-center mb-6"
                  style={{ minHeight: "420px" }}
                >
                  <span className="text-gray-500 text-lg">
                    {slide.after.label}
                  </span>
                </div>
                <h2 className="text-blue-900 font-semibold text-sm tracking-wider mb-2">
                  {slide.after.title}
                </h2>
                <p className="text-gray-600">{slide.after.description}</p>
              </div>
            </div>
          </div>
        )}

        {slide.type === "testimonial" && (
          <div>
            <div className="mb-12">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
                OUTCOMES
              </p>
              <h1 className="text-5xl font-normal text-blue-900">Testimonial</h1>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col justify-center">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 w-90">
                  {slide.quote}
                </p>
                <p className="text-blue-900 font-semibold text-sm tracking-wider">
                  — {slide.author}
                </p>
              </div>

              <div
                className="bg-gray-200 flex items-center justify-center"
                style={{ minHeight: "500px" }}
              >
                <span className="text-gray-500 text-lg">
                  {slide.imageLabel}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-16 py-6">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>[Your Name]</span>
          <span>|</span>
          <span>Product Design Portfolio</span>
          <span>|</span>
          <span>[Month Year]</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlides;
