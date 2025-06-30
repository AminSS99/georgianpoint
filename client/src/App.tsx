import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import MenuPage from "@/pages/menu";
import GalleryPage from "@/pages/gallery";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="bg-charcoal text-cream min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
