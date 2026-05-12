import ServiceRow from "../Row/ServiceRow";
import { Button } from "../ui/button";

export default function SubmitButton() {
    return (
        <Button
            onClick={ServiceRow}
        >

            <Button className="bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold ho">
                Request Quotation
            </Button>

        </Button>
    );
}

