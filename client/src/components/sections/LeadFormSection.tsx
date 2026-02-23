import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, User, Phone, CreditCard } from "lucide-react";

// Use same schema logic as requested
const contactFormSchema = z.object({
  nama: z.string().min(1, "Nama lengkap wajib diisi"),
  nomor: z.string().min(1, "Nomor Whatsapp wajib diisi").regex(/^[0-9]+$/, "Hanya angka yang diperbolehkan, tanpa spasi/strip"),
  pembayaran: z.enum(["Cash Keras", "Cash Bertahap", "KPR"], {
    required_error: "Rencana pembayaran wajib dipilih",
  }),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export function LeadFormSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = (data: ContactForm) => {
    const message = `Halo, saya tertarik dengan unit Promo Berkah Ramadan di Fasco Village Bangunjiwo.%0A%0ANama: ${data.nama}%0ANo WA: ${data.nomor}%0ARencana Pembayaran: ${data.pembayaran}%0A%0AMohon info ketersediaan dan proses selanjutnya.`;
    window.open(`https://wa.me/6281391278889?text=${message}`, '_blank');
  };

  return (
    <section id="hubungi" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta/10 text-cta font-semibold text-sm mb-6 border border-cta/20">
              Langkah Selanjutnya
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Tertarik Memiliki Unit di Fasco Village?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Isi form di samping untuk terhubung langsung dengan tim marketing kami via WhatsApp. Kami siap membantu Anda mendapatkan hunian impian dengan penawaran terbaik.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Isi Form</h4>
                  <p className="text-sm text-muted-foreground">Lengkapi data diri dan preferensi Anda.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Kirim via WA</h4>
                  <p className="text-sm text-muted-foreground">Pesan otomatis dibuat dan diarahkan ke WhatsApp kami.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Konsultasi</h4>
                  <p className="text-sm text-muted-foreground">Tim kami akan memandu proses selanjutnya hingga serah terima.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/5 border border-border relative"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Form Minat Pembelian</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" /> Nama Lengkap
                </label>
                <input 
                  type="text" 
                  {...register("nama")}
                  placeholder="Contoh: Budi Santoso"
                  className={`w-full px-4 py-3.5 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.nama ? 'border-destructive' : 'border-input focus:border-primary'}`}
                />
                {errors.nama && <p className="text-destructive text-sm mt-1.5">{errors.nama.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" /> Nomor WhatsApp
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">+62</span>
                  <input 
                    type="tel" 
                    {...register("nomor")}
                    placeholder="81234567890"
                    className={`w-full pl-12 pr-4 py-3.5 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.nomor ? 'border-destructive' : 'border-input focus:border-primary'}`}
                  />
                </div>
                {errors.nomor && <p className="text-destructive text-sm mt-1.5">{errors.nomor.message}</p>}
                <p className="text-xs text-muted-foreground mt-1.5">Pastikan nomor aktif dan menggunakan WA.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-muted-foreground" /> Rencana Pembayaran
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {["Cash Keras", "Cash Bertahap", "KPR"].map((opt) => (
                    <label key={opt} className={`
                      flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all
                      has-[:checked]:bg-primary/5 has-[:checked]:border-primary has-[:checked]:text-primary
                      hover:bg-muted text-sm font-medium
                    `}>
                      <input 
                        type="radio" 
                        value={opt} 
                        {...register("pembayaran")}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.pembayaran && <p className="text-destructive text-sm mt-2">{errors.pembayaran.message}</p>}
              </div>

              <button 
                type="submit"
                className="w-full py-4 mt-4 rounded-xl font-bold bg-cta text-white shadow-lg shadow-cta/25 hover:shadow-xl hover:bg-cta/90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                Kirim via WhatsApp
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
