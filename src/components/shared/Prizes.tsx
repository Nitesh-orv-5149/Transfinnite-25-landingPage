import { useEffect, useState } from 'react';

const messages = [
  "Win Exciting prizes!",
  "Cash rewards upto 2 lakhs!",
  "Get internship offers!",
];

function Prizes() {
  const [text, setText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentMessage.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentMessage.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentMessage.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h3 className="typewriter">
        {text}
        <span className="caret">|</span>
      </h3>
    </section>
  );
}

export default Prizes;
