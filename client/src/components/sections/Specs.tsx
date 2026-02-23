import { motion } from "framer-motion";
import { Home, Bath, Utensils, Car, Zap, Droplets, Wifi, FileText, Building } from "lucide-react";

export function Specs() {
  const specs = [
    { icon: <Home className="w-6 h-6" />, label: "2 Kamar Tidur", desc: "Luas & Nyaman" },
    { icon: <Bath className="w-6 h-6" />, label: "1 Kamar Mandi", desc: "Closet Duduk + Shower" },
    { icon: <Building className="w-6 h-6" />, label: "Ruang Tamu", desc: "Plafon Tinggi" },
    { icon: <Utensils className="w-6 h-6" />, label: "Dapur", desc: "Meja Beton + Zink" },
    { icon: <Car className="w-6 h-6" />, label: "Carport", desc: "Rabat Beton" },
    { icon: <Zap className="w-6 h-6" />, label: "Listrik 1300W", desc: "Token Prabayar" },
    { icon: <Droplets className="w-6 h-6" />, label: "Air PDAM", desc: "Bersih & Lancar" },
    { icon: <Wifi className="w-6 h-6" />, label: "Jaringan Internet", desc: "IndiHome Ready" },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">Spesifikasi Standar Fasco Village</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Material berkualitas dan pengerjaan rapi untuk kenyamanan hunian Anda jangka panjang.
            </p>
            <div className="inline-flex flex-col gap-3 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="font-semibold text-white">Harga Include PPN</span>
              </div>
              <div className="text-sm text-primary-foreground/70 flex gap-2 items-start">
                <FileText className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Note: Harga belum termasuk biaya BPHTB dan Notaris.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {specs.map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                >
                  <div className="p-3 bg-accent text-primary rounded-xl shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">{item.label}</h4>
                    <p className="text-xs text-primary-foreground/70 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { Check } from "lucide-react"; // Forgot to import Check above, adding it here.
