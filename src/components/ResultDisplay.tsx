import { useMemo, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, Share2, Download } from 'lucide-react';
import { results } from '../data/results';

interface ResultDisplayProps {
  answers: Record<string, string>;
  onRestart: () => void;
}

export default function ResultDisplay({ answers, onRestart }: ResultDisplayProps) {
  const [isCalculating, setIsCalculating] = useState(true);

  const resultType = useMemo(() => {
    const counts: Record<string, number> = {
      W: 0, F: 0,
      Y: 0, X: 0,
      B: 0, J: 0,
      M: 0, P: 0
    };

    Object.values(answers).forEach(val => {
      if (counts[val] !== undefined) {
        counts[val]++;
      }
    });

    const dim1 = counts.W >= counts.F ? 'W' : 'F';
    const dim2 = counts.Y >= counts.X ? 'Y' : 'X';
    const dim3 = counts.B >= counts.J ? 'B' : 'J';
    const dim4 = counts.M >= counts.P ? 'M' : 'P';

    return `${dim1}${dim2}${dim3}${dim4}`;
  }, [answers]);

  const resultData = results[resultType] || results['WYBM'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCalculating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isCalculating) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-zinc-800 border-t-zinc-400 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-500 font-mono animate-pulse"
        >
          正在生成你的赛博判决书...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center py-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-zinc-800 rounded-full blur-3xl opacity-50" />
        
        <div className="relative z-10 text-center space-y-6">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center pb-6"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center shadow-2xl">
              <span className="text-6xl md:text-7xl grayscale-[0.2] drop-shadow-lg">{resultData.emoji}</span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <p className="text-zinc-500 font-mono text-sm tracking-widest">你的SBTI人格类型是</p>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              {resultData.name}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-zinc-400 font-mono text-sm bg-zinc-900/80 py-2 px-4 rounded-xl inline-flex mx-auto border border-zinc-800">
              <span className="font-black text-zinc-200 text-base">{resultData.type}</span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span>
                {resultData.type.split('').map(char => ({
                  W: '窝囊', F: '发疯',
                  Y: '意淫', X: '现实',
                  B: '摆烂', J: '焦虑',
                  M: '麻木', P: '破防'
                }[char as keyof typeof resultData.type])).join(' · ')}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {resultData.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-zinc-950 border border-zinc-800 rounded-full text-xs text-zinc-400 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-zinc-800 text-left">
            <p className="text-zinc-400 leading-relaxed text-sm">
              {resultData.description}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <button
          onClick={onRestart}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors"
        >
          <RefreshCcw className="w-4 h-4" />
          <span>重新投胎</span>
        </button>
        <button
          onClick={() => alert('截图分享吧，别指望我给你做分享功能了，我很累。')}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 font-bold rounded-xl hover:bg-white transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span>分享给病友</span>
        </button>
      </motion.div>
    </div>
  );
}
