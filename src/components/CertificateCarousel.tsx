
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Certificate {
  id: number;
  name: string;
  image: string;
}

interface CertificateCarouselProps {
  certificates: Certificate[];
}

const CertificateCarousel = ({ certificates }: CertificateCarouselProps) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <div className="w-full px-4 md:px-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {certificates.map((certificate) => (
            <CarouselItem key={certificate.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Dialog>
                <DialogTrigger asChild>
                  <div 
                    className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <div className="h-full w-full p-2 flex flex-col">
                      <div className="flex-grow relative flex items-center justify-center overflow-hidden">
                        <img
                          src={certificate.image}
                          alt={certificate.name}
                          className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-2 text-center">
                        <h3 className="text-sm font-medium text-gray-800 truncate">{certificate.name}</h3>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-full p-0">
                  <div className="p-1 sm:p-4 flex items-center justify-center bg-white rounded-lg">
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="max-h-[80vh] w-auto object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4 gap-2">
          <CarouselPrevious className="static transform-none mx-2" />
          <CarouselNext className="static transform-none mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default CertificateCarousel;
