import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SwipeCarouselProps {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export const SwipeCarousel = ({
  children,
  className,
  slideClassName,
  showDots = true,
  autoplay = false,
  autoplayDelay = 4000,
}: SwipeCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayDelay]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {children.map((child, index) => (
            <div
              key={index}
              className={cn('flex-[0_0_100%] min-w-0', slideClassName)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showDots && children.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
