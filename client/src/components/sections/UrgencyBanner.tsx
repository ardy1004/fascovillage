import { motion } from "framer-motion";
import { AlertCircle, Clock } from "lucide-react";

export function UrgencyBanner() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-accent text-accent-foreground py-2.5 px-4 sticky top-0 z-50 shadow-md flex justify-center items-center gap-2 text-sm font-medium"
    >
      <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-center">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-center">
          <strong className="font-bold">Sisa 6 Unit!</strong> Promo Berkah Ramadan berlaku terbatas.
        </span>
      </div>
    </motion.div>
  );
}
