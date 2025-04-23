
import { Button } from "@/components/ui/button";

const AllProperties = () => (
  <div className="container mx-auto py-16 min-h-screen">
    <h2 className="text-3xl font-bold mb-6">All Properties</h2>
    <p>This page will showcase all properties available.</p>
    <Button asChild variant="outline-mio" className="mt-8">
      <a href="/">Back to Home</a>
    </Button>
  </div>
);

export default AllProperties;
