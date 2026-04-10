import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from '../data/questions';

interface QuestionFlowProps {
  onFinish: (answers: Record<string, string>) => void;
}

export default function QuestionFlow({ onFinish }: QuestionFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 300);
    } else {
      setTimeout(() => {
        onFinish(newAnswers);
      }, 300);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full bg-zinc-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex justify-between items-center mb-8 text-zinc-500 text-sm font-mono">
        <span>{currentIndex + 1} / {questions.length}</span>
        {currentIndex > 0 && (
          <button
            onClick={handleBack}
            className="hover:text-zinc-300 transition-colors"
          >
            返回上一题
          </button>
        )}
      </div>

      <div className="flex-1 relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 leading-relaxed">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4 mt-auto pb-8">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/80 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-zinc-600 font-mono font-bold mt-0.5 group-hover:text-zinc-400 transition-colors">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                      {option.text}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
