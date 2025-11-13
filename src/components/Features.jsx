import React from 'react'


const data = [
    { title: 'Generate music', body: 'Create melodies, beats or ambient textures from a short prompt.' },
    { title: 'Text-to-voice', body: 'Expressive TTS with style controls for character and tone.' },
    { title: 'Sound design', body: 'Quickly build atmospheres, effects and procedural textures.' }
]


export default function Features() {
    return (
        <section id="features" className="container mt-16">
            <h2 className="text-2xl font-bold mb-6">What you can do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map(item => (
                    <article key={item.title} className="card p-6">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-slate-300 text-sm">{item.body}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}