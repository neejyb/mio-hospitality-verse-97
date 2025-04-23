
import { Button } from "@/components/ui/button";

const BookAirbnb = () => (
  <div className="container mx-auto py-16 min-h-screen">
    <h2 className="text-3xl font-bold mb-6">Book Airbnb</h2>
    <p>This page will allow you to book selected Airbnb properties.</p>
    <Button asChild variant="outline-mio" className="mt-8">
      <a href="/">Back to Home</a>
    </Button>
  </div>
);

export default BookAirbnb;
