import { motion } from "framer-motion";
import { Check, Info, AlertTriangle, Ruler, Compass } from "lucide-react";

const UNITS = [
  {
    id: "C-18",
    type: "45/99",
    facing: "Barat",
    normalPrice: 475000000,
    promoPrice: 430000000,
    features: ["2 Kamar Tidur", "1 Kamar Mandi", "Ruang Tamu & Makan", "Dapur", "Carport", "Sisa Tanah Luas"],
    image: "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/image_2_dd7tm8.webp"
  },
  {
    id: "C-21",
    type: "45/110",
    facing: "Timur",
    normalPrice: 513500000,
    promoPrice: 470000000,
    features: ["2 Kamar Tidur", "1 Kamar Mandi", "Hook/Pojok", "Sinar Matahari Pagi", "Carport Lebar"],
    image: "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/image_1_yhv2kw.webp"
  },
  {
    id: "D Series",
    type: "30/60",
    facing: "Barat",
    normalPrice: 350000000,
    promoPrice: 300000000,
    features: ["Desain Compact", "2 Kamar Tidur", "1 Kamar Mandi", "Carport", "Harga Terjangkau"],
    image: "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864808/image_5_x2vaoz.webp",
    badge: "Best Value"
  }
];

export function UnitTypes() {
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(number);
  };

  const scrollToContact = (unitId: string) => {
    const el = document.getElementById('hubungi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="unit" className="py-24 bg-background relative z-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 border border-accent/20">
            <AlertTriangle className="w-4 h-4" />
            Terbatas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pilihan Unit Promo</h2>
          <p className="text-muted-foreground text-lg">Pilih unit sesuai kebutuhan keluarga Anda. Diskon khusus selama bulan Ramadan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UNITS.map((unit, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              key={unit.id}
              className="bg-card rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-border/50 hover:shadow-2xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 flex flex-col relative group"
            >
              {unit.badge && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  {unit.badge}
                </div>
              )}
              
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <img src={unit.image} alt={`Unit ${unit.id}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold font-display">Tipe {unit.type}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-white/90">
                    <span className="flex items-center gap-1"><Ruler className="w-4 h-4 text-accent" /> Kavling {unit.id}</span>
                    <span className="flex items-center gap-1"><Compass className="w-4 h-4 text-accent" /> Hadap {unit.facing}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6 pb-6 border-b border-border border-dashed">
                  <div className="text-sm text-muted-foreground line-through decoration-destructive decoration-2 mb-1">
                    Normal {formatRupiah(unit.normalPrice)}
                  </div>
                  <div className="text-3xl font-bold text-cta">
                    {formatRupiah(unit.promoPrice)}
                  </div>
                  <div className="text-xs font-medium text-accent mt-1 bg-accent/10 inline-block px-2 py-0.5 rounded text-accent-foreground">
                    Hemat {formatRupiah(unit.normalPrice - unit.promoPrice)}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {unit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => scrollToContact(unit.id)}
                  className="w-full py-3.5 rounded-xl font-semibold bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Pilih Unit Ini
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
