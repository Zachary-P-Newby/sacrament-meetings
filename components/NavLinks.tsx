'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

interface NavlinkProp{
    page: string,
    displayName: string
}


export default function Navlinks(props:NavlinkProp){
    const pathname = usePathname();

    return(

        <nav className="p-0 mx-auto my-0 inline">
            <Link
            href={props.page}
            className={clsx(
                "rounded-sm p-1 font-barlow font-bold",{
                    "text-neutral bg-primary dark:text-primary dark:bg-foreground": pathname === props.page,
                    "text-primary bg-neutral dark:text-foreground dark:bg-primary": pathname != props.page
                }
            )}


            aria-current={pathname === props.page ? 'page' : undefined}
            >
            {props.displayName}
            </Link>
        </nav>

    )
}