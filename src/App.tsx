import { useEffect } from "react";   //to disable right click on website
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductShowcase from "./components/ProductShowcase";
// import MouseTrail from "@/components/MouseTrail";

const queryClient = new QueryClient();
//to disable right click on website
const App = () => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableSelect = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("selectstart", disableSelect);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("selectstart", disableSelect);
    };
  }, []);

  return (
    <div data-scroll-container>
      {/* <MouseTrail/> */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster/>
          <Sonner/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
              <Route path="productShowcase" element={<ProductShowcase />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
