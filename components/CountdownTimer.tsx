'use client'
import { useEffect, useState } from 'react'

const WEDDING = new Date('2026-07-03T09:13:00-05:00')
const pad = (n: number) => String(n).padStart(2, '0')

export default function CountdownTimer() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0, done: false })

  useEffect(() => {
    const tick = () => {
      const diff = WEDDING.getTime() - Date.now()
      if (diff <= 0) { setT({ d:0,h:0,m:0,s:0,done:true }); return }
      setT({ d:Math.floor(diff/86400000), h:Math.floor((diff%86400000)/3600000), m:Math.floor((diff%3600000)/60000), s:Math.floor((diff%60000)/1000), done:false })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (t.done) return (
    <div className="text-center py-6">
      <p className="font-italiana text-3xl text-white mb-2">They are Married! 🎊</p>
      <p className="font-cormorant italic text-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
        The Seven Sacred Steps have been taken.
      </p>
    </div>
  )

  const units = [
    { label: 'Days',    val: pad(t.d) },
    { label: 'Hours',   val: pad(t.h) },
    { label: 'Minutes', val: pad(t.m) },
    { label: 'Seconds', val: pad(t.s) },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-4 sm:gap-8">
          <div className="text-center min-w-[60px] sm:min-w-[80px]">
            <span className="font-italiana text-5xl sm:text-6xl block gold-on-dark">{u.val}</span>
            <span className="font-jost text-[9px] sm:text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {u.label}
            </span>
          </div>
          {i < 3 && <span className="font-cormorant text-3xl mb-5" style={{ color: 'rgba(201,150,74,0.5)' }}>:</span>}
        </div>
      ))}
    </div>
  )
}
