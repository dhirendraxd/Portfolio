import { getDeviceCapabilities } from "@/lib/deviceCapabilities";

export const DeviceInfo = ({ className = "" }: { className?: string }) => {
  if (!import.meta.env.DEV) return null;
  
  const capabilities = getDeviceCapabilities();
  
  return (
    <div className={`fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50 ${className}`}>
      <div>Device: {capabilities.isMobile ? 'Mobile' : capabilities.isTablet ? 'Tablet' : 'Desktop'}</div>
      <div>Performance: {capabilities.isLowEnd ? 'Low' : capabilities.isHighEnd ? 'High' : 'Standard'}</div>
      <div>Cores: {capabilities.cores} | Ratio: {capabilities.pixelRatio}</div>
      <div>Screen: {capabilities.width}x{capabilities.height}</div>
      {capabilities.hasReducedMotion && <div className="text-yellow-400">Reduced Motion</div>}
    </div>
  );
};