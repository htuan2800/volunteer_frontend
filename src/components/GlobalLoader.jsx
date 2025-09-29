import { useLoading } from "@/contexts/LoadingProvider";


const GlobalLoader = () => {
  const { isLoading } = useLoading();
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <p className="text-gray-600">Đang tải...</p>
      </div>
    </div>
  );
};

export default GlobalLoader;