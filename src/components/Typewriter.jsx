import React, { useEffect, useState } from "react";

export default function Typewriter({ words = [], speed = 100, pause = 1400 }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const full = words[index % words.length];

    if (!deleting) {
      if (display.length < full.length) {
        timer = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), speed);
      } else {
        timer = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), speed / 2);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [display, deleting, index, words, speed, pause]);

  return (
    <span className="typewriter">
      {display}
      <span className="blinker">|</span>
    </span>
  );
}
