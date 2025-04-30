// components/PlayerCard.tsx
export default function PlayerCard({ number }: { number: number }) {
    return (
      <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border text-black text-sm font-bold">
        {number}
      </div>
    )
  }
  