import Image, { type StaticImageData } from "next/image";

type AnnotationProps = {
  children: React.ReactNode;
  mark: StaticImageData;
  markClassName: string;
};

export default function Annotation({
  children,
  mark,
  markClassName,
}: AnnotationProps) {
  return (
    <span className="relative inline-block">
      {children}
      <Image
        src={mark}
        alt=""
        className={`pointer-events-none absolute h-auto ${markClassName}`}
      />
    </span>
  );
}