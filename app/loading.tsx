import { LoadingSpiner } from "@/app/_components/LoadingSpiner"
export default function Loading() {
    return<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="inline-block max-w-lg text-center justify-center">
        <LoadingSpiner />
    </div> 
    </section>      
} 