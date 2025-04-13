import Image from "next/image";

export default function ImageCard({ src, alt, caption }) {
  return (
    <div className="my-4 max-w-xs">
      <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="p-2">
          <Image
            src={src}
            alt={alt}
            width={300} 
            height={200} 
            className="object-cover w-full rounded"
          />
        </div>
        {caption && (
          <div className="px-3 py-1 border-t border-gray-700">
            <p className="text-xs text-gray-400 italic text-center">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}
