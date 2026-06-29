export interface Project {
  id: string;
  title: string;
  category: 'modeling' | 'rendering' | 'texturing';
  imageUrl: string;
  wireframeUrl?: string;
  description: string;
  software: string[];
  specs: {
    triangles?: string;
    vertices?: string;
    textures?: string;
    renderTime?: string;
  };
}

export interface SpecItem {
  name: string;
  level: number; // 0 to 100
  category: 'software' | 'hardware';
  iconName: string;
  details: string;
}

export interface ClientInquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
}
