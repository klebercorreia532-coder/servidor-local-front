import { PedidoCard } from "@/components/core/pedido-card";

// Exemplo de dados simulando o que vem do seu backend
const pedidosFake = [
    {
        id: 1,
        title: "Emergency Plumbing",
        description: "24/7 support for leaks, pipe bursts and urgent drainage issues.",
        // Imagem de ferramentas de encanamento/pia
        image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
        category: { id: 1, name: "Plumbing", icone: "🔧" }
    },
    {
        id: 2,
        title: "Light Fixture Installation",
        description: "Professional installation for chandeliers, sconces, and recessed lighting.",
        // Imagem de iluminação moderna/lustre
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800",
        category: { id: 2, name: "Electrical", icone: "💡" }
    },
    {
        id: 3,
        title: "Custom Cabinetry",
        description: "Bispoque storage solutions and reapairs for your kitchen or living  space.",
        
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
        category: { id: 3, name: "Carpentry", icone: "🪑" }
    },
    {
        id: 4,
        title: "Interiror wall Painting",
        description: "Installation and synchronizing security locks and cameras for your comfort.",
    
        image: "https://images.unsplash.com/photo-1652829069862-87874e119527?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: { id: 3, name: "Painting", icone: "❄️" }
    },
    {

        id: 5,
        title: "AC Maintenance",
        description: "Installation and synchronizing security locks and cameras for your comfort.",

        image: "https://plus.unsplash.com/premium_photo-1682126012378-859ca7a9f4cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: { id: 3, name: "Cooling", icone: "❄️" }
    },
    {
        id: 6,
        title: "Smart Lock Setup",
        description: "Installation and synchronizing security locks and cameras for your comfort.",

        image: "https://plus.unsplash.com/premium_photo-1729265012673-c6e5e3a29374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3Dhttps://plus.unsplash.com/photo-1593697725343-cd7ddd4fc6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21hcnQlMjBMb2NrJTIwU2V0dXB8ZW58MHx8MHx8fDA%3D",
        category: { id: 3, name: "Cooling", icone: "❄️" }

    },
];



export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {pedidosFake.map((pedido) => (
                    <PedidoCard
                        key={pedido.id}
                        title={pedido.title}
                        description={pedido.description}
                        image={pedido.image}
                        category={pedido.category}
                    />
                ))}
            </div>
        </div>
    );
}