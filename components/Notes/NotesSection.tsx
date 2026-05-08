import { Menu } from "lucide-react";

type Props = {
    notes: string;
    setNotes: (value: string) => void;
};

export default function NotesSection({
    notes,
    setNotes,
}: Props) {
    return (
        <div className="mt-10">
            <div className="flex items-center gap-2 mb-4 font-semibold">
                <Menu size={18} />
                Service Description & Notes
            </div>

            <textarea
                value={notes}
                onChange={(e) =>
                    setNotes(e.target.value)
                }
                className="w-full h-40 border rounded-xl p-5"
                placeholder="Please describe the issue in detail..."
            />

            <p className="text-gray-500 mt-3">
                Detailed descriptions help providers give
                more accurate quotes.
            </p>
        </div>
    );
}