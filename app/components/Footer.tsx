
export default function Footer() {
    return (
        <div className="flex flex-col justify-center items-center py-4 bg-neutral-900">
            <p className="text-[.8rem] text-neutral-500 text-center">
                &copy; {new Date().getFullYear()} Mountain Mixology. All rights reserved.
            </p>
        </div>
    );
}
