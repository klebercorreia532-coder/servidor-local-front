// "use client";

// import { useState } from "react";
// import {
//     Wrench,
//     Zap,
//     Hammer,
//     Brush,
//     User,
//     Menu,
// } from "lucide-react";

// type Service = {
//     id: number;
//     name: string;
//     icon: any;
//     providers: string[];
// };

// const services: Service[] = [
//     {
//         id: 1,
//         name: "Plumbing",
//         icon: Wrench,
//         providers: ["John's Plumbing (★★★★☆)"],
//     },
//     {
//         id: 2,
//         name: "Electrical",
//         icon: Zap,
//         providers: ["PowerFix (★★★★★)"],
//     },
//     {
//         id: 3,
//         name: "Carpentry",
//         icon: Hammer,
//         providers: ["Woodworks Pros (★★★★☆)"],
//     },
//     {
//         id: 4,
//         name: "Cleaning",
//         icon: Brush,
//         providers: ["Clean Masters (★★★★★)"],
//     },
// ];

// export default function RequestPage() {
//     const [selected, setSelected] = useState<number[]>([]);
//     const [urgent, setUrgent] = useState<number[]>([]);
//     const [notes, setNotes] = useState("");

//     const toggle = (id: number, list: number[], setter: any) => {
//         setter(
//             list.includes(id)
//                 ? list.filter((x) => x !== id)
//                 : [...list, id]
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
        
//             <header className="flex justify-between items-center px-10 py-5 border-b bg-white">
//                 <h1 className="text-2xl font-bold text-blue-600">
//                     HandyPro
//                 </h1>

//                 <nav className="flex gap-8 text-gray-700">
//                     <a href="#">Services</a>
//                     <a href="#">Providers</a>
//                     <a href="#">My Requests</a>
//                     <User className="w-6 h-6 text-blue-500" />
//                 </nav>
//             </header>

//             <main className="max-w-6xl mx-auto py-12 px-8">
//                 <h2 className="text-4xl font-bold mb-3">
//                     Public Service Request & Provider Selection
//                 </h2>

//                 <p className="text-gray-500 mb-10">
//                     Select the services you need, choose available providers,
//                     and submit your request for a quotation.
//                 </p>

                
//                 <div className="bg-white rounded-2xl border overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-100 text-left">
//                             <tr>
//                                 <th className="p-5">SELECT</th>
//                                 <th>SERVICE NAME</th>
//                                 <th>SERVICE PROVIDER</th>
//                                 <th>URGENT?</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {services.map((service) => {
//                                 const Icon = service.icon;

//                                 return (
//                                     <tr
//                                         key={service.id}
//                                         className="border-t"
//                                     >
//                                         <td className="p-5">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={selected.includes(service.id)}
//                                                 onChange={() =>
//                                                     toggle(
//                                                         service.id,
//                                                         selected,
//                                                         setSelected
//                                                     )
//                                                 }
//                                             />
//                                         </td>

//                                         <td className="py-5 flex items-center gap-4">
//                                             <div className="bg-blue-100 p-3 rounded-xl">
//                                                 <Icon className="text-blue-500" />
//                                             </div>
//                                             {service.name}
//                                         </td>

//                                         <td>
//                                             <select className="border rounded-lg px-4 py-3 w-[400px]">
//                                                 <option>
//                                                     Select a provider...
//                                                 </option>

//                                                 {service.providers.map((p) => (
//                                                     <option key={p}>{p}</option>
//                                                 ))}
//                                             </select>
//                                         </td>

//                                         <td>
//                                             <input
//                                                 type="checkbox"
//                                                 checked={urgent.includes(service.id)}
//                                                 onChange={() =>
//                                                     toggle(
//                                                         service.id,
//                                                         urgent,
//                                                         setUrgent
//                                                     )
//                                                 }
//                                             />
//                                         </td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>

        
//                 <div className="mt-10">
//                     <div className="flex items-center gap-2 mb-4 font-semibold">
//                         <Menu size={18} />
//                         Service Description & Notes
//                     </div>

//                     <textarea
//                         value={notes}
//                         onChange={(e) =>
//                             setNotes(e.target.value)
//                         }
//                         className="w-full h-40 border rounded-xl p-5"
//                         placeholder="Please describe the issue in detail..."
//                     />

//                     <p className="text-gray-500 mt-3">
//                         Detailed descriptions help providers give more accurate
//                         quotes.
//                     </p>
//                 </div>

//                 <div className="flex justify-end mt-10">
//                     <button className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700">
//                         Request Quotation
//                     </button>
//                 </div>
//             </main>
//         </div>
//     );
// }

"use client";

import { useState } from "react";




import Header from "@/components/header/Header";
import ServiceTable from "@/components/Service/ServiceTable";
import NotesSection from "@/components/Notes/NotesSection";
import SubmitButton from "@/components/Submit/SubmitButton";
import { services } from "@/app/data/servicer";

export default function RequestPage() {
    const [selected, setSelected] = useState<number[]>([]);
    const [urgent, setUrgent] = useState<number[]>([]);
    const [notes, setNotes] = useState("");

    const toggle = (
    id: number,
    list: number[],
    setter: React.Dispatch<React.SetStateAction<number[]>>
) => {
    setter(
        list.includes(id)
            ? list.filter((x) => x !== id)
            : [...list, id]
    );
};
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-6xl mx-auto py-12 px-8">
                <h2 className="text-4xl font-bold mb-3">
                    Public Service Request & Provider Selection
                </h2>

                <p className="text-gray-500 mb-10">
                    Select the services you need, choose available providers,
                    and submit your request for a quotation.
                </p>

                <ServiceTable
                    services={services}
                    selected={selected}
                    urgent={urgent}
                    toggle={toggle}
                    setSelected={setSelected}
                    setUrgent={setUrgent}
                />

                <NotesSection
                    notes={notes}
                    setNotes={setNotes}
                />

                <SubmitButton />
            </main>
        </div>
    );
}