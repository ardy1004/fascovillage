export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-2">Fasco Village Bangunjiwo</h2>
        <p className="mb-8 max-w-lg mx-auto text-sm">
          Perumahan modern minimalis dengan lingkungan asri di lokasi strategis Bantul, Yogyakarta.
        </p>
        <div className="w-24 h-px bg-white/20 mx-auto mb-8" />
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Fasco Village. All rights reserved. <br/>
          Promo dan harga dapat berubah sewaktu-waktu tanpa pemberitahuan.
        </p>
      </div>
    </footer>
  );
}
