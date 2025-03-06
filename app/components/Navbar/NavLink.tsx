import Link from "next/link";

interface NavLinkProps {
    url: string;
    text: string;
    target?: string;
}

export default function NavLink({url, text, target}: NavLinkProps) {
    return (
        <Link href={url} className={`text-[1.1rem] text-white hover:text-gray-300`} target={target}>
            {text}
        </Link>
    );
}
