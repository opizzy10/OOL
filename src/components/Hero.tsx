import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-full">
            <span className="text-sm font-semibold text-primary">Nigeria's Premier Luxury Dealership</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1] text-foreground">
            Luxury Vehicles for{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Nigeria's Elite</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Certified pre-owned and brand new luxury vehicles. Professional inspection, flexible financing, and delivery across Nigeria.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="gap-2 text-base h-14 px-8" asChild>
              <Link to="/inventory">
                Browse Inventory
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8" asChild>
              <Link to="/contact">Book Inspection</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border">
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Cars Sold</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">12+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">98%</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
