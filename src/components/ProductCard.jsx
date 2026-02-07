import { Star } from "lucide-react";

export default function ProductCard({ title, dept, priceOld, priceNew, image }) {
  return (
    <div className="flex flex-col items-center gap-3 bg-white p-4">
      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{dept}</p>
        <p className="text-xs font-semibold">
          <span className="text-gray-400 line-through">{priceOld}</span>{" "}
          <span className="text-emerald-600">{priceNew}</span>
        </p>
      </div>

      <div className="flex items-center gap-1 text-gray-400">
        <Star className="h-4 w-4" />
        <Star className="h-4 w-4" />
        <Star className="h-4 w-4" />
        <Star className="h-4 w-4" />
      </div>

      <div className="flex gap-2">
        <span className="h-2 w-2 rounded-full bg-sky-500" />
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span className="h-2 w-2 rounded-full bg-orange-400" />
        <span className="h-2 w-2 rounded-full bg-slate-900" />
      </div>
    </div>
  );
}
