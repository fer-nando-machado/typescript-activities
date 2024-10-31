import { Supplier } from "../../../../types/supplier";

const SupplierAddress = ({ supplier }: { supplier: Supplier }) => (
  <address>
    {supplier.name}{" "}
    <small>
      from {supplier.city}, {supplier.country}, {supplier.zip}
    </small>
  </address>
);

export default SupplierAddress;
