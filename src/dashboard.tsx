import { useNavigate } from "react-router";
import { DashboardCard } from "./pages/dashboardCard";
import type { CardState } from "./Types";

export function Dashboard({product, addTo}: CardState) {
    const navigate = useNavigate()
    return (
        <div className="dashboard">
            <button type="button" className="to-main" onClick={() => navigate(-1)}>TO MAIN PAGE</button>
            <DashboardCard product={product} addTo={addTo}/>
        </div>
    )
}