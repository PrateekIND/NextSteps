import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, UserPlus, CheckCircle, Compass, MessageSquare, ThumbsUp } from "lucide-react"
import Button from "@/components/ui/button"; // Your custom Button component
import { Lightbulb, Globe, Users, BookOpen ,Briefcase, Code, Paintbrush,ChevronRight } from "lucide-react";
import ServiceCard from "../../components/ui/ServiceCard";
 // Adjust this based on your component setup
import MentorCard from "../../components/ui/MentorCard";

const HomePage = () => {
  const mentors = [
    {
      name: "Dr. Divyanshi Tomar",
      role: "Medical Professional",
      image: "../../public/image/Divyashi tomar.jpeg",
      bio: "20+ years in healthcare, specializing in career guidance for medical aspirants.",
    },
    {
      name: "Yash Tyagi",
      role: "Tech Entrepreneur",
      image: "../../public/image/yash Tyagi.jpeg",
      bio: "Founded 3 successful startups and mentored over 200 young tech professionals.",
    },
    {
      name: "Ashtha Tyagi",
      role: "Finance Expert",
      image: "../../public/image/Priya.jpeg",
      bio: "15 years in investment banking, helping students navigate the world of finance.",
    },
  ];
  const careerData = [
    {
      id: "software-engineer",
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: "Software Engineer",
      description: "Build the digital worlds we live in.",
      tags: ["Coding", "Innovation", "Problem-Solving"],
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
  return (
    <>
      <section className="w-full py-12 md:py-10 lg:py-12 xl:py-18 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-slate-800">
                    Take the Right Step Toward Your Future
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    Discover your ideal career path with personalized guidance from industry experts who've been where you want to go.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="gap-1">
                    <a href="/explore">
                      Explore Careers
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </Button>
                  <Button asChild className="border border-blue-500 text-blue-500 hover:bg-blue-50">
                    <a href="/book">Book a Session</a>
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Students discussing career options"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
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
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 group hover:bg-indigo-50"
      >
        <div className="flex items-center mb-4">{career.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
          {career.title}
        </h3>
        <p className="text-gray-600 mt-2">{career.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {career.tags.map((tag, index) => (
            <span key={index} className="text-sm bg-gray-200 px-3 py-1 rounded-full text-gray-700">
              {tag}
            </span>
          ))}
        </div>
        <div className="px-6 pb-6">
          <div className="pt-4 flex items-center text-blue-500 font-medium group-hover:translate-x-1 transition-transform">
            Explore Path <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </Link>
    ))}
  </div>

  <div className="mt-16 flex flex-col items-center space-y-8">
    <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-gradient-to-r from-slate-50 to-blue-50 p-8 border border-slate-100">
      <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_400px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-yellow-100 p-2">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Not sure where to start?</h3>
          </div>
          <p className="text-slate-600">
            Take our career assessment quiz to discover paths that match your interests, skills, and personality.
          </p>
          <div>
            <Button asChild className="gap-1 bg-blue-500 hover:bg-blue-600">
              <Link href="/quiz">
                Take Career Quiz <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/placeholder.svg?height=200&width=400"
            width={400}
            height={200}
            alt="Career quiz illustration"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  {/* 💥 Add your button here! */}
  <div className="mt-12 flex justify-center">
    <Button
      asChild
      variant="outline"
      size="lg"
      className="gap-1 border-blue-500 text-blue-500 hover:bg-blue-50"
    >
      <Link to="/explore">
        View All Career Paths <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
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
          <Button variant="outline" className="gap-1 border-blue-500 text-blue-500 hover:bg-blue-50">
            View All Mentors <ArrowRight className="h-4 w-4" />
          </Button>
          <Button className="gap-1 bg-blue-500 hover:bg-blue-600">
            <UserPlus className="h-4 w-4 mr-1" />
            Join as Mentor
          </Button>
        </div>
      </div>
    </section>

    

    </>
  );
};

export default HomePage;
