// Performance monitoring utility
// Tracks Core Web Vitals and reports to console

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  
  constructor() {
    this.initWebVitals();
  }

  private initWebVitals() {
    // First Contentful Paint (FCP)
    this.observeFCP();
    
    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID) / Interaction to Next Paint (INP)
    this.observeInputDelay();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
  }

  private observeFCP() {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const fcp = entry.startTime;
          this.addMetric('FCP', fcp, this.rateFCP(fcp));
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });
  }

  private observeLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry.startTime;
      this.addMetric('LCP', lcp, this.rateLCP(lcp));
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  private observeInputDelay() {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as unknown as { processingStart: number; startTime: number };
        if (fidEntry.processingStart && fidEntry.startTime) {
          const fid = fidEntry.processingStart - fidEntry.startTime;
          this.addMetric('FID', fid, this.rateFID(fid));
        }
      }
    });
    observer.observe({ entryTypes: ['first-input'] });
  }

  private observeCLS() {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const clsEntry = entry as unknown as { hadRecentInput: boolean; value: number };
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
        }
      }
      this.addMetric('CLS', clsValue, this.rateCLS(clsValue));
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  }

  private addMetric(name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor') {
    const metric: PerformanceMetric = { name, value, rating };
    this.metrics.push(metric);
    this.logMetric(metric);
  }

  private logMetric(metric: PerformanceMetric) {
    const color = {
      'good': '#10b981',
      'needs-improvement': '#f59e0b', 
      'poor': '#ef4444'
    }[metric.rating];

    console.log(
      `%c📊 ${metric.name}: ${metric.value.toFixed(1)}ms (${metric.rating})`,
      `color: ${color}; font-weight: bold;`
    );
  }

  private rateFCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  private rateLCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private rateFID(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  private rateCLS(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  getReport(): PerformanceMetric[] {
    return [...this.metrics];
  }

  getSummary() {
    const report = this.getReport();
    const good = report.filter(m => m.rating === 'good').length;
    const total = report.length;
    
    console.log(
      `%c🎯 Performance Summary: ${good}/${total} metrics are good`,
      'color: #3b82f6; font-size: 14px; font-weight: bold;'
    );
    
    return { good, total, score: Math.round((good / total) * 100) };
  }
}

// Initialize performance monitoring in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as unknown as { performanceMonitor: PerformanceMonitor }).performanceMonitor = new PerformanceMonitor();
  
  // Report summary after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const monitor = (window as unknown as { performanceMonitor?: PerformanceMonitor }).performanceMonitor;
      if (monitor) {
        monitor.getSummary();
      }
    }, 3000);
  });
}

export default PerformanceMonitor;