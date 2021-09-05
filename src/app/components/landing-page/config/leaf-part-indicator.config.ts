export interface LeafPartIndicator {
  id?: number;
  label: string;
}

export const LEAF_PARTS: LeafPartIndicator[] = [
  { id: 1, label: 'Apex' },
  { id: 2, label: 'Veins' },
  { id: 3, label: 'Lobes' },
  { id: 4, label: 'Petiole' }
];