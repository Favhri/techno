
export interface EventConcept {
  theme: string;
  activities: string[];
  vibe: string;
  estimatedCostRange: string;
  venueSuggestions: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
