
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PropertyDetails = () => {
  const { propertyId } = useParams<{ propertyId: string }>();

  // Placeholder
  return (
    <div className="container mx-auto py-16 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Property Details: {propertyId}</h2>
      <p>This page will show details for property ID: {propertyId}.</p>
      <Button asChild variant="outline-mio" className="mt-8">
        <a href="/properties">Back to all properties</a>
      </Button>
    </div>
  );
};

export default PropertyDetails;
