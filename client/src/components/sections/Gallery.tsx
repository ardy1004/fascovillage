import { motion } from "framer-motion";

const IMAGES = [
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/image_1_yhv2kw.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/Akses_Jalan_1_pbqpeu.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/image_7_t3urwn.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864807/Akses_Jalan_3_h0kyuu.webp",
  "https://res.cloudinary.com/dhb8b7nrd/image/upload/v1771864808/image_5_x2vaoz.webp"
];

export function Gallery() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Galeri Project</h2>
          <p className="text-muted-foreground text-lg">Gambaran lingkungan perumahan Fasco Village Bangunjiwo yang nyaman dan asri.</p>
        </div>

        {/* Mobile Swipe Slider */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 no-scrollbar scroll-smooth">
          {IMAGES.map((src, i) => (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              key={i} 
              className="flex-none w-[85vw] snap-center rounded-2xl overflow-hidden shadow-lg border border-border bg-white"
            >
              <div className="aspect-[4/3] w-full relative group">
                <img src={src} alt={`Galeri ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((src, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border bg-white transition-all duration-300 group
                ${i === 0 || i === 4 ? 'lg:col-span-2' : ''}
              `}
            >
              <div className={`w-full relative ${i === 0 || i === 4 ? 'aspect-[21/9]' : 'aspect-square'} overflow-hidden`}>
                <img src={src} alt={`Galeri ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
