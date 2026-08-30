// ✅ Correct - default export
import NotFoundPage from "@/app/components/ui/page-not-found";

export default function NotFound() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <NotFoundPage />
    </div>
  );
}