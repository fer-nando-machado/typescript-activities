import { Supplier } from "../../../types/supplier";
import data from "./json/suppliers.json";

export const fetchSuppliers = (): Supplier[] => {
  return data as Supplier[];
};
