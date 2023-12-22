import { Input } from "@nextui-org/input";
import {
    SearchIcon,
} from "@/components/icons";

export const SearchBar = () => (
    <Input
        aria-label="Search"
        classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
        }}

        labelPlacement="outside"
        placeholder="Search..."
        startContent={
            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
    />
);