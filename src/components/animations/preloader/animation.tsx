import { motion, Variant } from 'framer-motion';

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1
    }
  }
};

export default function AnimatedText({
  text,
  className,
  el: Wrapper = 'p',
  animation = defaultAnimations
}: AnimatedTextProps) {
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(' ')}</span>
      <motion.span
        initial="hidden"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line?.split(' ').map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block text-white"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
