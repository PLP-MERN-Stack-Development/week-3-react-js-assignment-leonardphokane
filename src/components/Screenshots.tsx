import homeImg from '@assets/home.png';
import shimmerImg from '@assets/shimmer.png';
import successImg from '@assets/success.png';

export default function Screenshots() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <div className="text-center">
        <img src={homeImg} alt="Homepage" className="rounded shadow-lg" />
        <p className="mt-2 font-semibold">Homepage</p>
      </div>
      <div className="text-center">
        <img src={shimmerImg} alt="Shimmer Transition" className="rounded shadow-lg" />
        <p className="mt-2 font-semibold">Flow UX — Shimmer Transition</p>
      </div>
      <div className="text-center">
        <img src={successImg} alt="Completion Success" className="rounded shadow-lg" />
        <p className="mt-2 font-semibold">Completion — Success</p>
      </div>
    </section>
  );
}
