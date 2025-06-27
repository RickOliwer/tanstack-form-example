import { Button } from "@/components/ui/button";
import { useFormContext } from "@/components/form/hook/useAppForm";
import { useStore } from "@tanstack/react-form";
import { Loader2 } from "lucide-react";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const form = useFormContext();
  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ]);

  return (
    <Button
      type="submit"
      disabled={isSubmitting || !canSubmit}
      className="w-full"
    >
      {isSubmitting ? (
        <>
          {children}
          <Loader2 className="animate-spin" />
        </>
      ) : (
        children
      )}
    </Button>
  );
}
