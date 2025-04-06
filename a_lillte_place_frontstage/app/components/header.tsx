"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-28 h-12">
            <Image
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348" // Replace with your café logo
              alt="Cafe Aroma Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation */}
          <nav
            className={`
            fixed md:relative top-0 right-0 h-screen md:h-auto w-full md:w-auto
            bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out
            ${
              isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
            }
            md:flex md:items-center md:space-x-8
          `}
          >
            {/* Close Button for Mobile */}
            <button
              className="md:hidden absolute top-6 right-6 text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Nav Links */}
            <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-8 md:space-y-0 md:space-x-8">
              <a
                href="#about"
                className="text-gray-800 hover:text-green-800 transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                カフェについて
              </a>
              <a
                href="#menu"
                className="text-gray-800 hover:text-green-800 transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                メニュー
              </a>
              <a
                href="#space"
                className="text-gray-800 hover:text-green-800 transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                店内の雰囲気
              </a>
              <a
                href="#access"
                className="text-gray-800 hover:text-green-800 transition-colors duration-300 font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                アクセス
              </a>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                <Button
                  variant="outline"
                  className="border-green-800 text-green-800 hover:bg-green-800 hover:text-white"
                >
                  お問い合わせ
                </Button>
                <Button className="bg-green-800 hover:bg-green-900 text-white">
                  予約する
                </Button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
