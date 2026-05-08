import { Service } from "../types/service";

type Props = {
    service: Service;
    selected: number[];
    urgent: number[];
    toggle: (
        id: number,
        list: number[],
        setter: any
    ) => void;
    setSelected: any;
    setUrgent: any;
};

export default function ServiceRow({
    service,
    selected,
    urgent,
    toggle,
    setSelected,
    setUrgent,
}: Props) {
    const Icon = service.icon;

    return (
        <tr className="border-t">
            <td className="p-5">
                <input
                    type="checkbox"
                    checked={selected.includes(service.id)}
                    onChange={() =>
                        toggle(
                            service.id,
                            selected,
                            setSelected
                        )
                    }
                />
            </td>

            <td className="py-5 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                    <Icon className="text-blue-500" />
                </div>

                {service.name}
            </td>

            <td>
                <select className="border rounded-lg px-4 py-3 w-[400px]">
                    <option>Select a provider...</option>

                    {service.providers.map((p) => (
                        <option key={p}>{p}</option>
                    ))}
                </select>
            </td>

            <td>
                <input
                    type="checkbox"
                    checked={urgent.includes(service.id)}
                    onChange={() =>
                        toggle(
                            service.id,
                            urgent,
                            setUrgent
                        )
                    }
                />
            </td>
        </tr>
    );
}