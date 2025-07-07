import { Switch, Route } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/">
              {() => (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Home />
                </motion.div>
              )}
            </Route>
            <Route path="/about">
              {() => (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <AboutPage />
                </motion.div>
              )}
            </Route>
            <Route path="/menu">
              {() => (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <MenuPage />
                </motion.div>
              )}
            </Route>
            <Route path="/gallery">
              {() => (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <GalleryPage />
                </motion.div>
              )}
            </Route>
            <Route path="/contact">
              {() => (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ContactPage />
                </motion.div>
              )}
            </Route>
            <Route>
              {() => (
                <motion.div
                  key="not-found"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <NotFound />
                </motion.div>
              )}
            </Route>
          </Switch>
        </AnimatePresence>
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
