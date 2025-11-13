import { useRef, useState, useEffect } from 'react'


export default function useAudio(src){
const audioRef = useRef(new Audio(src))
const [playing, setPlaying] = useState(false)
const [time, setTime] = useState(0)
const [duration, setDuration] = useState(0)


useEffect(()=>{
const a = audioRef.current
const onTime = ()=> setTime(a.currentTime)
const onMeta = ()=> setDuration(a.duration || 0)
a.addEventListener('timeupdate', onTime)
a.addEventListener('loadedmetadata', onMeta)
return ()=>{
a.removeEventListener('timeupdate', onTime)
a.removeEventListener('loadedmetadata', onMeta)
a.pause()
}
}, [])


const toggle = ()=>{
const a = audioRef.current
if(playing){ a.pause(); setPlaying(false) } else { a.play(); setPlaying(true) }
}
const seek = (t)=>{ audioRef.current.currentTime = t }


return { audioRef, playing, toggle, time, duration, seek }
}