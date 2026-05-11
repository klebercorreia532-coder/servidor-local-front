import { Service } from "@/app/type/service";
import ServiceRow from "../Row/ServiceRow";




type Props = {
    services: Service[];
    selected: number[];
    urgent: number[];
    toggle: (
        id: number,
        list: number[],
        setter: React.Dispatch<React.SetStateAction<number[]>>
    ) => void;
    setSelected: React.Dispatch<React.SetStateAction<number[]>>;
    setUrgent: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function ServiceTable({
    services,
    selected,
    urgent,
    toggle,
    setSelected,
    setUrgent,
}: Props) {
    return (
        <div className="bg-white rounded-2xl border overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-5">SELECT</th>
                        <th>SERVICE NAME</th>
                        <th>URGENT?</th>
                    </tr>
                </thead>

                <tbody>
                    {services.map((service) => (
                        <ServiceRow
                            key={service.id}
                            service={service}
                            selected={selected}
                            urgent={urgent}
                            toggle={toggle}
                            setSelected={setSelected}
                            setUrgent={setUrgent}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}