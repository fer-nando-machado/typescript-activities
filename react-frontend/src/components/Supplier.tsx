import { Supplier as SupplierProps } from "../../../types/supplier";

const Supplier = ({ supplier }: { supplier: SupplierProps }) => (
  <address>
    {supplier.name}
    <small>
      from {supplier.city}, {supplier.country}, {supplier.zip}
    </small>
  </address>
);

export default Supplier;
