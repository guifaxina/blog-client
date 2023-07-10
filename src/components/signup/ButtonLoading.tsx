import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

export default function ButtonLoading(props: any) {
  return (
    <Button disabled variant="secondary" {...props}>
      <Loader2 className="mr-2 h-4 animate-spin"/>
      Creating your account...
    </Button>
  )
}