import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function loginPage(){
    return(
    <div className="bg-gray-200 h-screen flex justify-between">
        <div className="w-1/2 bg-red-500">
<Badge variant="secondary">Precisio Concierge service</Badge>

<h1>Elevante your Stordart of Service</h1>

<p>
    Join Servidor Local to experence a curited ecosystem connecting decirning clients with
elite proficional and premier companies.
</p>

<div className="flex justify-evenly w-full">
    <Card> 
        <CardContent>
            
        <CardTitle>Vetted Neetwork</CardTitle>
        <CardDescription>
            Exclosive access to top-tier providers and clients
        </CardDescription>
        </CardContent>
    </Card>
    <Card> 
        <CardContent>
        <CardTitle>
            Security Platform
        </CardTitle>
        <CardDescription>Personaliszad  security for all your transations and data.</CardDescription>
</CardContent>
        </Card>
</div>
</div>
        <div className="w-1/2 bg-blue-500">direita</div>
    </div>
    );
}

