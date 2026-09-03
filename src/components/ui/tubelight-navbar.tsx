import React, { useState } from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

export interface TubelightNavItem {
  name: string;
  id: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface TubelightNavBarProps {
  items: TubelightNavItem[];
  activeTab?: string;
  className?: string;
  onSelect?: (item: TubelightNavItem) => void;
}

export function TubelightNavBar({ items, activeTab: externalActiveTab, className, onSelect }: TubelightNavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0]?.name);
  const activeTab = externalActiveTab || internalActiveTab;

  return (
    <nav
      id="tubelight-bottom-nav"
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 w-full max-w-full bg-[#0B1D3A]/98 border-t border-slate-700/80 backdrop-blur-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.6)] pb-safe transform-gpu translate-z-0",
        className,
      )}
    >
      <div className="flex items-center justify-around max-w-md mx-auto py-1.5 px-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name || activeTab === item.id;

          return (
            <motion.button
              key={item.name}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                setInternalActiveTab(item.name);
                if (item.onClick) item.onClick();
                if (onSelect) onSelect(item);
              }}
              className={cn(
                "relative cursor-pointer text-xs font-semibold py-1.5 px-2 transition-colors flex flex-col items-center justify-center gap-1 min-w-[56px] min-h-[48px] select-none",
                "text-slate-400 hover:text-white",
                isActive && "text-[#D4AF37] font-bold",
              )}
            >
              <motion.span 
                className="shrink-0 relative z-10"
                animate={{ 
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -2 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.4 : 2} />
              </motion.span>

              <motion.span 
                className="text-[10px] tracking-tight leading-none relative z-10 font-medium"
                animate={{ 
                  opacity: isActive ? 1 : 0.8,
                  fontWeight: isActive ? 700 : 500
                }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.span>
              
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#D4AF37]/15 rounded-xl -z-0"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 28,
                  }}
                >
                  {/* Tubelight Lamp effect at the very top edge with pulse animation */}
                  <motion.div 
                    initial={{ opacity: 0.6, scaleX: 0.8 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-10 h-1 bg-[#D4AF37] rounded-b-full shadow-[0_0_12px_#D4AF37]"
                  >
                    {/* Outer Ambient Glow with breath animation */}
                    <motion.div 
                      animate={{ 
                        opacity: [0.6, 1, 0.6],
                        scale: [0.95, 1.1, 0.95]
                      }}
                      transition={{ 
                        duration: 2.2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="absolute w-14 h-7 bg-[#D4AF37]/40 rounded-full blur-md -top-1.5 -left-2 pointer-events-none" 
                    />
                    <div className="absolute w-8 h-4 bg-[#D4AF37]/60 rounded-full blur-xs top-0 left-1 pointer-events-none" />
                  </motion.div>
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}

export default TubelightNavBar;
