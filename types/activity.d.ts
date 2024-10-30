import { Supplier } from "./supplier";

export interface Activity {
  id: number;
  title: string;
  price: number;
  currency: string;
  rating: number;
  specialOffer: boolean;
  supplierId: number;
}

export interface ActivityWithSupplier extends Activity {
  supplier?: Supplier;
}
