import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, CheckCircle, Compass, MessageSquare, ThumbsUp } from "lucide-react"
import Button from "@/components/ui/button"; // Your custom Button component
import Button2 from "@/components/ui/button2"; // Your custom Button component
import { Lightbulb, Globe, Users, BookOpen ,Briefcase, Code, Paintbrush,ChevronRight } from "lucide-react";
import ServiceCard from "../../components/ui/ServiceCard";
import MentorCard from "../../components/ui/MentorCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import TestimonialSlider from "@/components/TestimonialSlider";



const HomePage = () => {
  const mentors = [
    {
      name: "Dr. Divyanshi Tomar",
      role: "Medical Professional",
      image: "/image/Divyashi tomar.jpeg",
      bio: "20+ years in healthcare, specializing in career guidance for medical aspirants.",
    },
    {
      name: "Yash Tyagi",
      role: "Tech Entrepreneur",
      image:"/image/yash Tyagi.jpeg",
      bio: "Founded 3 successful startups and mentored over 200 young tech professionals.",
    },
    {
      name: "Ashtha Tyagi",
      role: "Finance Expert",
      image: "/image/Priya.jpeg",
      bio: "15 years in investment banking, helping students navigate the world of finance.",
    },
  ];
  const careerData = [
    {
      id: "Technology",
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: "Technology",
      description: "Explore careers in software development, data science, cybersecurity, and AI.",
      tags: ["Software Engineering", "Data Science", "Cybersecurity"],
    },
    {
      id: "graphic-designer",
      icon: <Paintbrush className="h-6 w-6 text-pink-600" />,
      title: "Graphic Designer",
      description: "Bring ideas to life through design.",
      tags: ["Creativity", "Aesthetics", "Communication"],
    },
    {
      id: "project-manager",
      icon: <Briefcase className="h-6 w-6 text-green-600" />,
      title: "Project Manager",
      description: "Lead teams to success and deliver results.",
      tags: ["Leadership", "Organization", "Planning"],
    },
  ];

  const faqData = [
    {
      question: "How does NextStep's career counseling work?",
      answer:
        "Our career counseling process begins with an assessment of your interests, skills, and goals...",
    },
    {
      question: "Who are the mentors at NextStep?",
      answer:
        "Our mentors are industry professionals with at least 5+ years of experience...",
    },
    {
      question: "How much does career counseling cost?",
      answer:
        "We offer various packages to suit different needs and budgets...",
    },
    {
      question: "Can NextStep help with college applications?",
      answer:
        "Yes, we provide guidance on college applications...",
    },
    {
      question: "How do I become a mentor at NextStep?",
      answer:
        "To become a mentor, you should have at least 5 years of professional experience...",
    },
    {
      question: "Is NextStep available internationally?",
      answer:
        "Yes, NextStep services are available globally...",
    },
  ];


  return (
    <>
     <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
      
      {/* LEFT: TEXT + BUTTONS */}
      <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-slate-800">
            Take the Right Step Toward Your Future
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Discover your ideal career path with personalized guidance from industry experts who've been where you want to go.
          </p>
        </div>

        {/* BUTTONS - INLINE ON MOBILE TOO */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Button asChild className="gap-1 whitespace-nowrap">
            <a href="/explore">
              Explore Careers
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Button>
          <Button2
            asChild
            className="border border-blue-500 text-blue-500 hover:bg-blue-50 whitespace-nowrap"
          >
            <a href="/book">Book a Session</a>
          </Button2>
        </div>
      </div>

      {/* RIGHT: IMAGE */}
      <div>
        <img
          src="/image/Hero.png"
          width={550}
          height={550}
          alt="Students discussing career options"
          className="w-full max-w-[450px] mx-auto rounded-xl object-cover aspect-square"
        />
      </div>
    </div>
  </div>
</section>




<section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
                  About NextStep
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-800">
                  Your Career Journey Starts Here
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NextStep helps students explore career options, understand future opportunities, and connect with
                  expert mentors who can provide personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
          Our Services
        </h2>
        <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Comprehensive career guidance tailored to your unique journey
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      <ServiceCard
        icon={Globe}
        title="Explore Careers"
        description={"Discover and explore various career paths based on your interests, skills, and educational background."}
        bgColor="bg-blue-50 text-blue-500"
      />
      <ServiceCard
        icon={Users}
        title="Expert Mentorship"
        description="Connect with industry professionals who provide personalized guidance and insights from their experience."
        bgColor="bg-green-50 text-green-500"
      />
      <ServiceCard
        icon={BookOpen}
        title="Stream Guidance"
        description="Get detailed information about different academic streams and their potential career outcomes."
        bgColor="bg-purple-50 text-purple-500"
      />
    </div>
  </div>
</section>

<section className="px-6 py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Career Paths</h2>
    <p className="text-gray-600 text-lg">Find the career that matches your passion and skills 💼✨</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {careerData.map((career) => (
      <Link
        to={`/career/${career.id}`}
        key={career.id}
        className="rounded-[9px] border bg-white text-gray-800 shadow-sm overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-slate-200 group"
      >
        <div className="p-6 flex flex-col h-full justify-between">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-[6px] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center shadow-sm">
              {career.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl pt-2 lg:pb-2 md:pb-1 xl:pb-4 font-bold text-slate-800 group-hover:text-purple-500 transition-colors">
                {career.title}
              </h3>
              <p className="mt-2 lg:pb-2 md:pb-1 xl:pb-3 text-slate-600">{career.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {career.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 pl-5 flex items-center text-purple-500 font-medium group-hover:translate-x-1 transition-transform">
            Explore Path <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </Link>
    ))}
  </div>

  <div className="mt-12 flex justify-center">
    <Button2
      asChild
      variant="outline"
      size="lg"
      className="gap-1 border-blue-500 text-blue-500 hover:bg-blue-50"
    >
      <Link to="/explore">
        View All Career Paths <ChevronRight className="h-4 w-4" />
      </Link>
    </Button2>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
              Meet Our Mentors
            </h2>
            <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn from industry experts who are passionate about guiding the next generation
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button2 variant="outline" className="gap-1 border-blue-500 text-blue-500 hover:bg-blue-50">
            View All Mentors <ArrowRight className="h-4 w-4" />
          </Button2>
          <Button className="gap-1 bg-blue-500 hover:bg-blue-600">
            <UserPlus className="h-4 w-4 mr-1" />
            Join as Mentor
          </Button>
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Success stories from students who found their path with NextStep
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <TestimonialSlider />
            </div>
          </div>
        </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Success stories from students who found their path with NextStep
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <TestimonialSlider />
            </div>
          </div>
        </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Find answers to common questions about our career counseling services
        </p>
      </div>
    </div>

    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqData.map(({ question, answer }, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-gray-300"
          >
            <AccordionTrigger className="text-left text-slate-800 hover:text-blue-500 text-md md:text-lg font-medium">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-sm md:text-md py-2">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Heading and Buttons */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Path?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step toward a fulfilling career with personalized guidance from our expert mentors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                
                size="lg"
                variant="secondary"
                className="gap-1 bg-slate-100 text-blue-500 hover:text-blue-700  hover:bg-slate-200"  
              >
                <Link to="/book" className="text-blue-500 flex items-center">
                  Book a Session <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                
                variant="outline"
                size="lg"
                className="border-white border  text-white hover:bg-white hover:text-blue-500"
              >
                <Link to="/explore">Explore Careers</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Stats Cards */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              {[
                { stat: "500+", label: "Career Paths" },
                { stat: "100+", label: "Expert Mentors" },
                { stat: "5000+", label: "Students Guided" },
                { stat: "98%", label: "Satisfaction Rate" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 rounded-[8px] bg-white/10 p-5 text-center"
                >
                  <div className="text-3xl font-bold">{item.stat}</div>
                  <div className="text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>



    </>
  );
};

export default HomePage;
