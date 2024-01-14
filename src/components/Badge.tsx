import "@styles/Badge.scss";
import { BadgeType } from "@components/BadgeType";

export default function Badge({ type }: { type: BadgeType }) {
	return <div className={`badge ${type.toLowerCase()}`}>{type}</div>;
}
