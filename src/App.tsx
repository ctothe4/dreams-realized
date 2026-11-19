import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Media from "./pages/Media";
import Journey from "./pages/Journey";
import Publishing from "./pages/Publishing";
import Connect from "./pages/Connect";
import Privacy from "./pages/Privacy";
import { ArticleDetail, BookDetail, BooksIndex } from "./pages/PublicationDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/index" element={<Navigate to="/" replace />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/journey/public-service" element={<Journey publicService />} />
          <Route path="/perspectives" element={<Publishing />} />
          <Route path="/perspectives/:slug" element={<ArticleDetail />} />
          <Route path="/writing" element={<Publishing writing />} />
          <Route path="/books" element={<BooksIndex />} />
          <Route path="/books/:slug" element={<BookDetail />} />
          <Route path="/media" element={<Media />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/movement" element={<Navigate to="/journey" replace />} />
          <Route path="/work" element={<Navigate to="/journey" replace />} />
          <Route path="/join" element={<Navigate to="/connect" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
