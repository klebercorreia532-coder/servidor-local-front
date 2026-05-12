import { Service } from "@/app/type/service";

type Props = {
    service: Service;
    selected: number | null;
    urgent: number | null;

    

    setSelected: React.Dispatch<
        React.SetStateAction<number | null>
    >;

    setUrgent: React.Dispatch<
        React.SetStateAction<number | null>
    >;
};

export default function ServiceRow({
    service,
    selected,
    urgent,
    setSelected,
    setUrgent,
}: Props) {
    const Icon = service.icon;

    return (
        <tr className="border-t">
            
            <td className="p-5">
                <input
                    type="radio"
                    name="servicoSelecionado"
                    checked={selected === service.id}
                    onChange={() =>
                        setSelected(service.id)
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
                <input
                    type="radio"
                    name="servicoUrgente"
                    checked={urgent === service.id}
                    onChange={() =>
                        setUrgent(service.id)
                        
                    }
                />
            </td>
        </tr>
    );
}