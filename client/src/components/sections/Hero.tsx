import { motion } from "framer-motion";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import { RamadanBadge } from "@/components/ui/RamadanBadge";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <RamadanBadge />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] text-balance">
              Rumah Siap Bangun di <span className="text-primary relative whitespace-nowrap">
                Bangunjiwo
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Harga Mulai <span className="text-muted-foreground line-through">350 Juta</span> <span className="text-accent font-bold">300 Juta</span>
            </p>

            <ul className="flex flex-col gap-3 text-muted-foreground mt-2">
              {['Include PPN', 'Bisa Custom Design', 'Legalitas Aman & Terjamin'].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <button 
                onClick={() => scrollTo('kalkulator')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-cta text-white shadow-lg shadow-cta/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calculator className="w-5 h-5" />
                Hitung Cicilan
              </button>
              <button 
                onClick={() => scrollTo('unit')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white text-primary border-2 border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                Cek Unit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white aspect-[4/3] lg:aspect-square">
              <img 
                src="https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/image_2_dd7tm8.webp" 
                alt="Fasco Village Bangunjiwo Exterior" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-4 rounded-xl inline-block">
                  <p className="text-primary font-bold text-lg">Lingkungan Asri & Nyaman</p>
                  <p className="text-sm text-foreground/80">Desain modern minimalis</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
