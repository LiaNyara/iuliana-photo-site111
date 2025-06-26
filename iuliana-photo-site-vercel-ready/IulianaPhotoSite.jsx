import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Camera, Mail, PlayCircle } from "lucide-react";

export default function IulianaPhotoSite() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 p-6 text-gray-800">
      <header className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          Iuliana | Sacred Photography
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          I believe in the sacred geometry of connection. My work captures the souls meant to meet — not by chance, but by design.
        </p>
      </header>
      <footer className="text-center mt-16 text-sm text-gray-600">
        <p>This is not just art. It’s devotion. — Iuliana</p>
        <p className="mt-2">© 2025 Iuliana Photography. All rights reserved.</p>
      </footer>
    </main>
  );
}
