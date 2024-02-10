import Link from 'next/link'

const menuItems = [
  { name: 'Hjem', path: '/' },
  { name: 'Artikler', path: '/posts' },
  { name: 'Om oss', path: '/om-oss' },
  { name: 'Kontakt', path: '/kontakt' },
]
export default function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>Bergobloggen</h1>
      <div className='flex'>
        {menuItems.map(item => (
          <Link href={item.path} key={item.name} className='mx-3 font-bold hover:underline'>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
