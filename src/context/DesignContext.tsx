import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CategoryData {
  id: string;
  name: string;
  bestseller?: boolean;
  images: string[];
  gender?: 'Female' | 'Male';
}

export interface SketchData {
  id: string;
  title: string;
  image: string;
  description?: string;
  gender?: 'Female' | 'Male';
  categoryId?: string;
}

export interface ReferenceData {
  id: string;
  image: string;
  isCustom?: boolean;
}

export interface FabricCategoryData {
  id: string;
  name: string;
  image: string;
  swatchCount: number;
}

export interface FabricSwatchData {
  id: string;
  name: string;
  image: string;
}

export interface MeasurementsData {
  size: string; // 'XS' | 'S' | 'M' | 'L' | 'XL' | 'Custom'
  height?: string;
  bust?: string;
  waist?: string;
  hips?: string;
  notes?: string;
}

export interface PreviewData {
  outfitImage: string;
  occasion: string; // 'Wedding' | 'Party' | 'Vacation' | 'Casual'
  embellishments: string[];
  needItBy?: string;
}

export interface DesignState {
  gender: 'Female' | 'Male' | null;
  selectedCategory: CategoryData | null;
  selectedSketch: SketchData | null;
  selectedReference: ReferenceData | null;
  selectedFabricCategory: FabricCategoryData | null;
  selectedFabric: FabricSwatchData | null;
  measurements: MeasurementsData;
  previewData: PreviewData | null;
}

interface DesignContextType {
  design: DesignState;
  updateDesign: <K extends keyof DesignState>(key: K, value: DesignState[K]) => void;
  resetDesign: () => void;
}

const initialMeasurements: MeasurementsData = {
  size: 'M',
  height: '',
  bust: '',
  waist: '',
  hips: '',
  notes: ''
};

const initialDesignState: DesignState = {
  gender: null,
  selectedCategory: null,
  selectedSketch: null,
  selectedReference: null,
  selectedFabricCategory: null,
  selectedFabric: null,
  measurements: initialMeasurements,
  previewData: null,
};

const DesignContext = createContext<DesignContextType | undefined>(undefined);

const STORAGE_KEY = 'peony_design_state_v1';

export const DesignProvider = ({ children }: { children: ReactNode }) => {
  const [design, setDesign] = useState<DesignState>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...initialDesignState, ...parsed };
        }
      }
    } catch {
      // ignore storage parsing errors
    }
    return initialDesignState;
  });

  const updateDesign = <K extends keyof DesignState>(key: K, value: DesignState[K]) => {
    setDesign((prev) => {
      const updated = {
        ...prev,
        [key]: value,
      };
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  const resetDesign = () => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }
    setDesign(initialDesignState);
  };

  return (
    <DesignContext.Provider value={{ design, updateDesign, resetDesign }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};
