import { useParams, useNavigate } from "react-router-dom";
import { StarBackground } from "@/components/StarBackground";

export const DemoSourceCode = () => {
  const { project } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarBackground />

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-40">
        <div className="max-w-lg bg-card/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg animate-fade-in">
          <h1 className="text-3xl font-bold mb-4">🚧 Source Code Private</h1>
          <p className="text-muted-foreground mb-6">
            The source code for{" "}
            <span className="font-semibold">{project} </span>
            is not available publicly because this project was developed inside
            a private organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
            >
              ← Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition"
            >
              Refresh
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
