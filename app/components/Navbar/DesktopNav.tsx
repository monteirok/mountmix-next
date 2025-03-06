import Link from "next/link";
import NavLink from "./NavLink";
import { Mail } from "lucide-react";
import InstagramIcon from "../ui/icons/InstagramIcon";

export default function DesktopNav() {

    function ComingSoon() {
        alert("Coming soon... \n\nPlease email all inquiries to reservations@mountainmixology.ca")
    };

    return (
        <div className="hidden sm:flex gap-10">
            <div className="flex justify-center items-center gap-8">
                <NavLink url="/coming-soon" text="About" />
                <NavLink url="/coming-soon" text="Services" />
                <NavLink url="/coming-soon" text="Menu" />
            </div>
            <div className="flex justify-center items-center gap-6">
                {/* <NavLink url="/coming-soon" text={<Mail strokeWidth={2} />} /> */}
                <div onClick={ComingSoon}>
                    <Mail strokeWidth={2} />
                </div>
                <Link href="https://instagram.com/mountain.mixology" target="_blank">
                    <InstagramIcon />
                </Link>
            </div>
        </div>
    );
}
