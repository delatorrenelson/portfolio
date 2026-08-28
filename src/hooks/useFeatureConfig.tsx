import React, { createContext, useContext, useEffect, useState } from "react";

export interface FeatureConfig {
  name?: string;
  version?: string;
  features?: {
    header?: {
      enabled?: boolean;
      status_badge?: boolean;
      social_links?: {
        github?: boolean;
        linkedin?: boolean;
        behance?: boolean;
        email?: boolean;
      };
    };
    work_experience?: boolean;
    projects?: {
      enabled?: boolean;
      other_projects?: boolean;
    };
    programming_journal?: {
      enabled?: boolean;
      journals_page?: boolean;
    };
    skills?: boolean;
    education?: boolean;
    contact_page?: boolean;
    footer?: {
      say_hi_link?: boolean;
    };
    theme_toggle?: boolean;
    scroll_top_button?: boolean;
    [key: string]: unknown;
  };
}

interface FeatureConfigContextType {
  config: FeatureConfig | null;
  loading: boolean;
  isFeatureEnabled: (featurePath: string) => boolean;
}

const FeatureConfigContext = createContext<FeatureConfigContextType>({
  config: null,
  loading: true,
  isFeatureEnabled: () => true,
});

// Helper to safely get nested property values by dot notation path
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export const FeatureConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<FeatureConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchConfig = async () => {
      try {
        const response = await fetch("/portfolio.config.json?v=" + Date.now());
        if (!response.ok) {
          throw new Error(`Failed to load config: ${response.statusText}`);
        }
        const data = await response.json();
        if (isMounted) {
          setConfig(data);
        }
      } catch (error) {
        console.warn("FeatureConfig: Unable to load portfolio.config.json, using default fallback (all enabled).", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchConfig();

    // Re-fetch automatically when switching back to the browser window/tab
    const handleFocus = () => fetchConfig();
    window.addEventListener("focus", handleFocus);

    // Poll every 3 seconds so live edits update seamlessly without manual page refresh
    const intervalId = setInterval(fetchConfig, 3000);

    return () => {
      isMounted = false;
      window.removeEventListener("focus", handleFocus);
      clearInterval(intervalId);
    };
  }, []);

  const isFeatureEnabled = (featurePath: string): boolean => {
    if (!config || !config.features) {
      // Default to enabled if config is loading or failed to load
      return true;
    }

    const value = getNestedValue(config.features as Record<string, unknown>, featurePath);

    // If boolean, return value directly
    if (typeof value === "boolean") {
      return value;
    }

    // If object with 'enabled' field, return 'enabled' value
    if (value && typeof value === "object" && "enabled" in value) {
      return Boolean((value as { enabled?: boolean }).enabled);
    }

    // Default fallback to true if feature path is unconfigured
    return true;
  };

  return (
    <FeatureConfigContext.Provider value={{ config, loading, isFeatureEnabled }}>
      {children}
    </FeatureConfigContext.Provider>
  );
};

export const useFeatureConfig = () => {
  return useContext(FeatureConfigContext);
};
