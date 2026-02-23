import { z } from "zod";

// This is a static landing page that redirects to WhatsApp.
// We only need a schema for form validation on the client side.
export const contactFormSchema = z.object({
  nama: z.string().min(1, "Nama lengkap wajib diisi"),
  nomor: z.string().min(1, "Nomor Whatsapp wajib diisi").regex(/^[0-9]+$/, "Hanya angka yang diperbolehkan"),
  pembayaran: z.enum(["Cash Keras", "Cash Bertahap", "KPR"], {
    required_error: "Rencana pembayaran wajib dipilih",
  }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
