// src/lib/useAudio.js
import { useEffect, useRef, useState } from "react";

export default function useAudio(src) {
  const audioRef = useRef(typeof Audio !== "undefined" ? new Audio(src) : null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // update metadata
    const onLoaded = () => {
      setDuration(audio.duration || 0);
      setReady(true);
    };
    const onTime = () => setCurrentTime(audio.currentTime);
    const onEnd = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);

    // cleanup
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, [src]);

  // react to src or playing state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = src;
    if (playing) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  }, [playing, src]);

  const toggle = () => setPlaying((p) => !p);
  const seek = (t) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = t;
    setCurrentTime(t);
  };

  return {
    playing,
    toggle,
    ready,
    currentTime,
    duration,
    seek,
  };
}
