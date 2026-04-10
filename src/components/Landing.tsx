import { motion } from 'motion/react';
import { Skull, ArrowRight } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        <Skull className="w-12 h-12 text-zinc-400" />
      </motion.div>

      <div className="space-y-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-black tracking-tighter text-white"
        >
          SBTI 人格测试
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 text-lg max-w-md mx-auto"
        >
          MBTI已经救不了你了，来测测你在这个操蛋的世界里，到底是个什么品种的废物。
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl max-w-md w-full text-left space-y-3 text-sm text-zinc-500"
      >
        <p>⚠️ 友情提示：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>本测试极度负能量，玻璃心请立即退出。</li>
          <li>结果可能引起严重不适，请勿对号入座。</li>
          <li>测完如果破防了，请自行消化，别来找我。</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="max-w-md w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-left"
      >
        <div className="space-y-3 text-sm">
          <p className="text-zinc-300">
            公众号：
            <span className="ml-2 font-semibold text-white">陈子游</span>
          </p>
          <p className="text-zinc-300">
            小红书：
            <a
              href="https://www.xiaohongshu.com/user/profile/5f09cc4b000000000100482e?xsec_token=&xsec_source=pc_note"
              target="_blank"
              rel="noreferrer"
              className="ml-2 font-semibold text-zinc-100 underline decoration-zinc-600 underline-offset-4 transition hover:text-white"
            >
              陈子游AI研究室
            </a>
          </p>
        </div>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-900 font-bold rounded-full overflow-hidden transition-colors hover:bg-white"
      >
        <span>接受现实，开始测试</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
