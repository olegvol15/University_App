export interface Faculty {
    id: number;
    name: string;
  }
  
  export interface University {
    name: string;
    description: string;
    imageUrl: string;
    faculties: Faculty[];
  }
  