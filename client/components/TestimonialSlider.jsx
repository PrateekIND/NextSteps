import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Replace these with your own UI components or fallback to basic ones
import Button2 from "@/components/ui/button2";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Michael Brown",
    role: "Computer Science Student",
    image: "/image/Divyashi tomar.jpeg",
    quote:
      "NextStep helped me narrow down my interests and find the perfect tech specialization. My mentor provided insights I couldn't find anywhere else.",
  },
  {
    id: 2,
    name: "Emma Wilson",
    role: "High School Senior",
    image: "/image/Priya.jpeg",
    quote:
      "I was completely lost about which stream to choose. The career exploration tools and my session with a mentor gave me clarity and confidence.",
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Business Management Graduate",
    image: "/image/yash Tyagi.jpeg",
    quote:
      "The industry insights and networking opportunities through NextStep were invaluable. I secured my dream job within months of graduation.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 border-none shadow-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Quote className="h-12 w-12 text-blue-100 mb-6" />
                <p className="mb-6 text-lg italic text-slate-800">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-[5%_15%]"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center  justify-center gap-2">
        <Button2
          variant="outline"
          size="icon"
          
          className="rounded-full  px-0 py-0 pt-0 pb-0 pl-3 pr-3 "
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button2>
        {testimonials.map((_, index) => (
          <div
            key={index}
            variant="ghost"
            size="sm"
            className={` h-2 w-2 rounded-full pl-0 pr-0 ${
              index === current ? "bg-blue-500" : "bg-blue-100"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <Button2
          variant="outline"
          size="icon"
          className="rounded-full px-0 py-0 pt-0 pb-0 pl-3 pr-3"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button2>
      </div>
    </div>
  );
}
