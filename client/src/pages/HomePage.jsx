import React from "react";
import { ArrowRight, CheckCircle, Compass, MessageSquare, ThumbsUp } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // For internal links

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-36">
              <div className="flex items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-navy-900"
                >
                  <path d="M20 80L50 20L80 50L50 80L20 80Z" fill="#0a192f" />
                </svg>
                <span className="ml-2 text-2xl font-bold text-navy-900">NextStep</span>
              </div>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            Home
          </Link>
          <Link href="#explore" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            Explore Careers
          </Link>
          <Link href="#book" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            Book a Session
          </Link>
          <Link href="#about" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            Testimonials
          </Link>
          <Link href="#faqs" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            FAQs
          </Link>
          <Link href="#contact" className="text-sm font-medium text-navy-900 hover:text-navy-700">
            Contact
          </Link>
        </nav>
        <div>
          <Button className="bg-navy-900 hover:bg-navy-800 text-white">Book Now</Button>
        </div>
      </div>
    </header>

    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-navy-50 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-400 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-navy-900 blur-3xl opacity-20"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-yellow-400 text-navy-900 px-3 py-1 rounded-full text-sm font-medium mb-2">
                Career Guidance for Classes 8-12
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-navy-900">
                Take the Next Step Towards Your <span className="text-yellow-500">Dream Career</span>
              </h1>
              <p className="text-navy-800 md:text-xl max-w-[600px]">
                Guiding students with real advice from real professionals. Discover your path, connect with mentors,
                and build your future with confidence.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-6 text-lg">
                  Explore Careers
                </Button>
                <Button
                  variant="outline"
                  className="border-navy-900 text-navy-900 hover:bg-navy-50 px-8 py-6 text-lg"
                >
                  Book a Session
                </Button>
                <Button variant="ghost" className="text-navy-900 hover:bg-navy-50 px-8 py-6 text-lg">
                  Take Career Quiz
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-navy-100 border-2 border-white flex items-center justify-center text-navy-900 text-xs font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-navy-700">Join 5,000+ students who found their path</p>
              </div>
            </div>

            <div className="hidden relative h-[300px] md:h-[400px] lg:h-[600px] md:block ">
              <img src="/personal growth-bro.svg" alt="Career Guidance" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Stream selection cards */}
        
        </div>
      </section>

      {/* Career Paths Section */}
      <section id="explore" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
                Explore Career Paths
              </h2>
              <p className="mx-auto max-w-[700px] text-navy-800 md:text-xl">
                Discover the right path for your future based on your interests and strengths.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white p-1">
                <button className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium bg-navy-900 text-white shadow-sm">
                  Science
                </button>
                <button className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  Commerce
                </button>
                <button className="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  Arts
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Medicine",
                  description: "Become a doctor, surgeon, or specialist in various medical fields.",
                  icon: "🩺",
                },
                {
                  title: "Engineering",
                  description: "Pursue careers in mechanical, electrical, computer, or civil engineering.",
                  icon: "⚙️",
                },
                {
                  title: "Research",
                  description: "Contribute to scientific advancement through research and development.",
                  icon: "🔬",
                },
                {
                  title: "Technology",
                  description: "Work in software development, data science, or cybersecurity.",
                  icon: "💻",
                },
                {
                  title: "Architecture",
                  description: "Design buildings and structures that shape our environment.",
                  icon: "🏗️",
                },
                {
                  title: "Pharmacy",
                  description: "Specialize in medication and pharmaceutical sciences.",
                  icon: "💊",
                },
              ].map((career, index) => (
                <Card key={index} className="flex flex-col p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{career.icon}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{career.title}</h3>
                  <p className="text-navy-700 flex-1">{career.description}</p>
                  <Link href="#" className="inline-flex items-center mt-4 text-navy-900 font-medium hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-navy-800 md:text-xl">
                Our simple three-step process to help you find your perfect career path.
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 mb-4">
                <Compass className="h-8 w-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Explore</h3>
              <p className="text-navy-700">Browse through various career options based on your stream of interest.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 mb-4">
                <MessageSquare className="h-8 w-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Connect</h3>
              <p className="text-navy-700">
                Book a session with our expert counselors who specialize in your field of interest.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 mb-4">
                <ThumbsUp className="h-8 w-8 text-navy-900" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Decide</h3>
              <p className="text-navy-700">
                Make an informed decision about your career path with personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-navy-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                We're committed to helping students make the right career choices.
              </p>
            </div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Personalized Advice",
                description: "Tailored guidance based on your unique interests, strengths, and goals.",
              },
              {
                title: "Verified Experts",
                description: "All our counselors are experienced professionals in their respective fields.",
              },
              {
                title: "Affordable",
                description: "Quality career guidance at prices that are accessible to all students.",
              },
              {
                title: "Supportive",
                description: "Continuous support throughout your journey, even after your session.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <CheckCircle className="h-10 w-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
                Student Testimonials
              </h2>
              <p className="mx-auto max-w-[700px] text-navy-800 md:text-xl">
                Hear from students who found their path with our guidance.
              </p>
            </div>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya S.",
                quote:
                  "The counseling session helped me understand which engineering branch would be best for me based on my interests in mathematics and problem-solving.",
                image: "personal growth-bro.svg?height=80&width=80",
              },
              {
                name: "Rahul M.",
                quote:
                  "I was confused between Commerce and Arts. My counselor helped me see how my communication skills could be valuable in a business career.",
                image: "/personal growth-bro.svg?height=80&width=80",
              },
              {
                name: "Ananya K.",
                quote:
                  "The career assessment tests and the follow-up session gave me clarity about pursuing research in biological sciences.",
                image: "/personal growth-bro.svg?height=80&width=80",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="flex flex-col p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <h3 className="text-lg font-bold text-navy-900">{testimonial.name}</h3>
                </div>
                <p className="text-navy-700 italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Session Section */}
      <section id="book" className="w-full py-12 md:py-24 bg-yellow-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
                Ready to Find Your Path?
              </h2>
              <p className="mx-auto max-w-[700px] text-navy-800 md:text-xl">
                Book a session with our expert counselors and take the first step towards a fulfilling career.
              </p>
              <div className="flex justify-center mt-8">
                <Button className="bg-navy-900 hover:bg-navy-800 text-white text-lg px-8 py-6">Book Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy-900">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-navy-800 md:text-xl">
                Find answers to common questions about our career counseling services.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How do I book a counseling session?",
                  answer:
                    "You can book a session by clicking on the 'Book Now' button and filling out the form. Our team will contact you within 24 hours to confirm your appointment.",
                },
                {
                  question: "What happens during a counseling session?",
                  answer:
                    "During the session, our expert counselor will discuss your interests, strengths, and goals. They will provide information about various career options and help you understand the path to achieve your career objectives.",
                },
                {
                  question: "How long does a session last?",
                  answer:
                    "A standard session lasts for 45-60 minutes. However, we can arrange extended sessions if needed.",
                },
                {
                  question: "Do you offer group counseling sessions?",
                  answer:
                    "Yes, we offer both individual and group counseling sessions. Group sessions are great for schools or groups of friends who want to explore career options together.",
                },
                {
                  question: "Can parents join the counseling session?",
                  answer:
                    "We encourage parents to be part of the process. They can join the session or we can arrange a separate discussion with them.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-navy-900 font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-navy-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer id="contact" className="w-full py-12 bg-navy-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path d="M20 80L50 20L80 50L50 80L20 80Z" fill="white" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-white">NextStep</span>
            </div>
            <p className="text-gray-300 mt-2">Guiding students towards their dream careers with expert counseling.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#explore" className="text-gray-300 hover:text-white">
                  Explore Careers
                </Link>
              </li>
              <li>
                <Link href="#book" className="text-gray-300 hover:text-white">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@nextstep.com</li>
              <li className="text-gray-300">Phone: +91 98765 43210</li>
              <li className="text-gray-300">Address: 123 Education Lane, Knowledge City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} NextStep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default HomePage;
