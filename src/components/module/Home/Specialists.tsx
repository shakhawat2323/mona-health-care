"use client";

import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Cross ,
  Eye,
  Activity,
  Droplet,
  ShieldCheck,
  Pill,
  Microscope,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Specialty {
  id: number;
  name: string;
  icon: React.ElementType;
  color: string; // Tailwind color class
}

const specialties: Specialty[] = [
  { id: 1, name: "Cardiology", icon: HeartPulse, color: "text-red-500" },
  { id: 2, name: "Neurology", icon: Brain, color: "text-blue-500" },
  { id: 3, name: "Orthopedic", icon: Bone, color: "text-pink-500" },
  { id: 4, name: "Pediatrics", icon: Baby, color: "text-green-500" },
  { id: 5, name: "General Medicine", icon: Stethoscope, color: "text-indigo-500" },
  { id: 6, name: "Dentistry", icon: Cross , color: "text-yellow-500" },
  { id: 7, name: "Ophthalmology", icon: Eye, color: "text-cyan-500" },
  { id: 8, name: "Physiotherapy", icon: Activity, color: "text-amber-500" },
  { id: 9, name: "Hematology", icon: Droplet, color: "text-rose-500" },
  { id: 10, name: "Immunology", icon: ShieldCheck, color: "text-emerald-500" },
  { id: 11, name: "Pharmacy", icon: Pill, color: "text-purple-500" },
  { id: 12, name: "Pathology", icon: Microscope, color: "text-orange-500" },
];

export default function Specialists() {
  return (
    <section className="py-20 bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[color:var(--foreground)]">
              Our Specialists
            </h2>
            <p className="text-[color:var(--muted-foreground)] mt-1 text-sm sm:text-base">
              Access to medical experts across all major specialties.
            </p>
          </div>
          <Link
            href="/specialists"
            className="text-[color:var(--primary)] hover:underline text-sm sm:text-base font-medium"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[color:var(--card)] border border-[color:var(--border)] rounded-xl shadow-sm p-6 flex flex-col items-center justify-center text-center hover:shadow-md hover:-translate-y-1 transition-transform duration-300"
              >
                <div
                  className={`mb-3 ${item.color}`}
                >
                  <Icon size={32} strokeWidth={1.8} />
                </div>
                <h3 className="font-medium text-[color:var(--foreground)] text-sm sm:text-base">
                  {item.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
