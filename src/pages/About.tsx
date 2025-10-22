import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Camera, Users, Sparkles, Menu, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/wedding/wedding-1.jpg',
  '/images/wedding/wedding-2.jpg',
  '/images/wedding/wedding-3.jpg',
  '/images/wedding/wedding-4.jpg',
  '/images/wedding/wedding-5.jpg',
  '/images/wedding/wedding-6.jpg',
  '/images/wedding/wedding-7.jpg',
  '/images/wedding/wedding-8.jpg',
];

const guests = [
  '/images/guests/guests-1.jpg',
  '/images/guests/guests-2.jpg',
  '/images/guests/guests-3.jpg',
  '/images/guests/guests-4.jpg',
  '/images/guests/guests-5.jpg',
]
const SLIDESHOW_INTERVAL = 4000;
const GUESTS_SLIDESHOW_INTERVAL = 4000;

export default function AboutPage() {
  const [index, setIndex] = useState(0);
  const [indexGuests, setIndexGuests] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexGuests((prevIndex) => (prevIndex + 1) % guests.length);
    }, GUESTS_SLIDESHOW_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setShowMobileMenu(false);
    // For React Router, you would use navigate
    // For hash navigation within the same page
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page with hash (you'd use React Router here)
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDESHOW_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
   <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wedding-6.jpg"
            alt="Vibrant event background"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 65%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight px-4">
            The Story Behind
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-rose-400 text-transparent bg-clip-text">
              Captura
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-4">
            Sparked by a single celebration, Captura was created to solve a common problem:
            bringing all of an event's memories together in one beautiful, interactive place.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                How It All Began
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-justify">
  Before our wedding, we quickly realized the only thing missing was a place for guests to share their
  photos and memories during the celebration. Even with a professional photographer capturing every key
  moment, so many authentic, spontaneous memories were being taken by our friends and family—but scattered
  across phones and social media.
</p>
<p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-justify">
  That’s exactly why <strong>Captura</strong> was created: to bring every photo, video, and story together in one shared
  space. With Captura, everyone can contribute to the same album in real time, turning the entire event into
  a collective story that couples—and all their guests—can relive forever.
</p>
            </div>
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence>
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  alt={`Wedding photo ${index + 1}`}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  transition={{ duration: 0.8, ease: 'linear' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* TEXT block: Always order 1 on mobile, 2 on desktop */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                A New Vision for Events
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-justify">
                We envisioned a world where any event could be an interactive experience. Where attendees
                wouldn't just be present, but actively participate in creating lasting memories through photo
                challenges, quizzes, and social sharing.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-justify">
                Captura transforms gatherings from passive occasions into engaging social experiences. Guests
                become part of the story, hosts get to see their event through everyone's eyes, and
                memories are preserved in a beautiful, organized way.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify">
                Today, we're working to make this vision a reality for every organizer, ensuring that no
                memory gets lost and every guest feels connected to the celebration.
              </p>
            </div>

            {/* IMAGE block: Order 2 on mobile, 1 on desktop */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden order-2 md:order-1 shadow-lg">
             <AnimatePresence>
      <motion.img
        key={guests[indexGuests]}
        src={guests[indexGuests]}
        alt={`Wedding guest photo ${indexGuests + 1}`}
        initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
        transition={{ duration: 0.8, ease: 'linear' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto px-4">
              To transform events into interactive social experiences where every guest becomes part of the story.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Capture Every Moment</h3>
              <p className="text-gray-600">
                A private social network for your special occasion. Real-time photo and video sharing from every guest.
              </p>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect Guests</h3>
              <p className="text-gray-600">
                Interactive quizzes, hashtag challenges, and social features that make guests part of the story.
              </p>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Magic</h3>
              <p className="text-gray-600">
                Private, secure, and custom-built for any event. A gift that keeps giving through shared memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Event?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            It's free for early hosts. Create your private event space and let the memories begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/#contact"
              className="bg-white text-orange-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-full transition-colors touch-manipulation"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  );
}