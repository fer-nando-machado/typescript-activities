import { Supplier } from "../../../types/supplier";
import data from "./json/supplier.json";

export const fetchSuppliers = (): Supplier[] => {
  return data as Supplier[];
};
