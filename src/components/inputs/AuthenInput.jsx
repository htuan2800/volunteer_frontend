import { Input } from "@/components/ui/input"

export function AuthenInput({ error, className = "", ...props }) {
  return (
    <Input
      aria-invalid={error ? "true" : undefined}
      {...props}
      className={
        `w-full px-4 py-3 border rounded-lg text-black` +
        // (error ? "border-red-500 bg-red-50" : "border-gray-300") +
        " " +
        className
      }
    />
  )
}