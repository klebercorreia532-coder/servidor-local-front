import { PedidoCard } from "@/components/core/pedido-card";

export default function HomePage() {
    return (
        <div >
            <h1> Home</h1>
            <PedidoCard
                title="Instalar porta de entrada"
                description="preciso instalar uma porta de entrada para o meu apartamento"
                image="/placeholder.png"
                categoria={{
                    id: "1",
                    nome: "Construção Civil",
                    icone: "/icone-construcao.png"
                }}
            />
        
        </div>
    );
}   