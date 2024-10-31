import { ActivityDetail } from "../../../../types/activity";
import SupplierAddress from "../Supplier/SupplierAddress";

const ActivityCard = ({ activity }: { activity: ActivityDetail }) => (
  <div className="activity__card">
    <strong>{activity.title}</strong>
    <data value={activity.price} aria-label="Price">
      {activity.currency}
      {activity.price}
      {activity.specialOffer && <aside>Special Offer 🔖</aside>}
    </data>
    <data value={activity.rating} aria-label="Rating">
      {"⭐".repeat(activity.rating)} <small>{activity.rating}</small>
    </data>
    {activity.supplier && <SupplierAddress supplier={activity.supplier} />}
  </div>
);

export default ActivityCard;
