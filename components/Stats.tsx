export default function Stats() {
  return (
    <div className="mb-10 grid grid-cols-3 gap-4">
      <div className="rounded-3xl bg-white/80 p-4 text-center shadow-md">
        <h3 className="text-2xl font-bold text-[#096FDE]">
          5★
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Rating
        </p>
      </div>

      <div className="rounded-3xl bg-white/80 p-4 text-center shadow-md">
        <h3 className="text-lg font-bold text-[#096FDE]">
          FREE
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Pickup
        </p>
      </div>

      <div className="rounded-3xl bg-white/80 p-4 text-center shadow-md">
        <h3 className="text-lg font-bold text-[#096FDE]">
          C.A.R.E.+
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          Standard
        </p>
      </div>
    </div>
  );
}