export default function Stats() {
  return (
    <section id="stats"className="bg-green-700 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center text-white">
  <p className="text-sm font-bold uppercase tracking-[0.4em] text-green-200">
    EASTCOSELS BY THE NUMBERS
  </p>

  <h2 className="mt-4 text-4xl font-extrabold">
    A Growing Community of Scholars
  </h2>
</div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center text-white md:grid-cols-4">
        

        <div className="border-b border-green-500 pb-8 transition-transform duration-300 hover:-translate-y-2 md:border-b-0 md:border-r md:pb-0">
          <h2 className="text-5xl font-extrabold">10+</h2>
          <p className="mt-3 text-lg">Universities</p>
        </div>

        <div  className="border-b border-green-500 pb-8 transition-transform duration-300 hover:-translate-y-2 md:border-b-0 md:border-r md:pb-0">
          <h2 className="text-5xl font-extrabold">800+</h2>
          <p className="mt-3 text-lg">Delegates</p>
        </div>

        <div   className="border-b border-green-500 pb-8 transition-transform duration-300 hover:-translate-y-2 md:border-b-0 md:border-r md:pb-0">
          <h2 className="text-5xl font-extrabold">7+</h2>
          <p className="mt-3 text-lg">Guest Speakers</p>
        </div>

        <div className="transition-transform duration-300 hover:-translate-y-2">
          <h2 className="text-5xl font-extrabold">5+</h2>
          <p className="mt-3 text-lg">Sponsors</p>
        </div>

      </div>
    </section>
  );
}