import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Landing from './components/Landing';
import QuestionFlow from './components/QuestionFlow';
import ResultDisplay from './components/ResultDisplay';

export type AppState = 'landing' | 'testing' | 'result';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const startTest = () => {
    setAnswers({});
    setAppState('testing');
  };

  const finishTest = (finalAnswers: Record<string, string>) => {
    setAnswers(finalAnswers);
    setAppState('result');
  };

  const restartTest = () => {
    setAnswers({});
    setAppState('landing');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-800">
      <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {appState === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col"
            >
              <Landing onStart={startTest} />
            </motion.div>
          )}
          {appState === 'testing' && (
            <motion.div
              key="testing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <QuestionFlow onFinish={finishTest} />
            </motion.div>
          )}
          {appState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 flex flex-col"
            >
              <ResultDisplay answers={answers} onRestart={restartTest} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
