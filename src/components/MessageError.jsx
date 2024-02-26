import { BiSolidError } from "react-icons/bi";

export default function Error() {
    return (
        <div className="text-red-600 p-6 text-2xl flex justify-center items-center">
            <BiSolidError className="text-4xl" /> 
            An internal problem has occurred, please refresh the page.
        </div>
    )
}