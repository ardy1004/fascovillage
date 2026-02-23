import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Percent, Clock, DollarSign } from "lucide-react";

export function CalculatorSection() {
  const [price, setPrice] = useState<number>(295000000);
  const [dpPercent, setDpPercent] = useState<number>(50);
  const [tenor, setTenor] = useState<number>(10);
  
  const [result, setResult] = useState({ loan: 0, monthly: 0, total: 0 });

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(number);
  };

  useEffect(() => {
    // Math logic for KPR
    // PMT Formula: M = P [ r(1 + r)^n ] / [ (1 + r)^n - 1]
    const dpAmount = price * (dpPercent / 100);
    const principal = price - dpAmount;
    
    const annualInterestRate = 0.08; // 8%
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfMonths = tenor * 12;

    if (principal <= 0 || numberOfMonths <= 0) {
      setResult({ loan: 0, monthly: 0, total: 0 });
      return;
    }

    const mathPow = Math.pow(1 + monthlyInterestRate, numberOfMonths);
    const monthlyPayment = principal * ((monthlyInterestRate * mathPow) / (mathPow - 1));
    const totalPayment = monthlyPayment * numberOfMonths;

    setResult({
      loan: principal,
      monthly: monthlyPayment,
      total: totalPayment
    });

  }, [price, dpPercent, tenor]);

  return (
    <section id="kalkulator" className="py-24 bg-muted/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
            <Calculator className="w-8 h-8 text-accent" />
            Simulasi KPR
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hitung estimasi cicilan per bulan. Asumsi bunga 8% fixed rate (tergantung kebijakan bank).
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-xl shadow-black/5 border border-border p-6 md:p-10 grid md:grid-cols-2 gap-12">
          
          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-foreground flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" /> Harga Rumah
                </label>
                <span className="font-bold text-primary">{formatRupiah(price)}</span>
              </div>
              <input 
                type="range" 
                min={295000000} 
                max={600000000} 
                step={5000000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Rp 295 Jt</span>
                <span>Rp 600 Jt</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-foreground flex items-center gap-2">
                  <Percent className="w-4 h-4 text-muted-foreground" /> Uang Muka (DP)
                </label>
                <span className="font-bold text-primary">{dpPercent}% ({formatRupiah(price * (dpPercent/100))})</span>
              </div>
              <input 
                type="range" 
                min={50} 
                max={90} 
                step={5}
                value={dpPercent}
                onChange={(e) => setDpPercent(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <p className="text-xs text-accent mt-2 font-medium">* Minimal DP 50% untuk promo ini</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" /> Tenor
                </label>
                <span className="font-bold text-primary">{tenor} Tahun</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[5, 10, 15].map(t => (
                  <button
                    key={t}
                    onClick={() => setTenor(t)}
                    className={`py-3 rounded-xl border-2 font-semibold transition-all ${
                      tenor === t 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border text-muted-foreground hover:border-primary/30'
                    }`}
                  >
                    {t} Tahun
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            
            <h3 className="text-xl font-medium mb-8 opacity-90 border-b border-white/10 pb-4">Ringkasan Simulasi</h3>
            
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-sm opacity-80 mb-1">Plafon Pinjaman (KPR)</p>
                <p className="text-2xl font-semibold">{formatRupiah(result.loan)}</p>
              </div>
              
              <div>
                <p className="text-sm opacity-80 mb-1">Estimasi Cicilan per Bulan</p>
                <p className="text-4xl font-bold text-accent">{formatRupiah(result.monthly)}</p>
              </div>

              <div>
                <p className="text-sm opacity-80 mb-1">Total Pengembalian Akhir</p>
                <p className="text-xl font-medium">{formatRupiah(result.total)}</p>
              </div>
            </div>

            <p className="text-xs mt-8 opacity-60 italic">
              * Hasil simulasi di atas tidak mengikat dan dapat berubah sesuai dengan suku bunga berjalan pada saat pencairan KPR. Belum termasuk biaya administrasi, provisi, asuransi, dll.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
