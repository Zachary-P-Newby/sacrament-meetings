"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function MeetingSearch(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    const handleSearch = useDebouncedCallback((term:string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else{
            params.delete('query');
        }
        //replace the URL with a new one containg the new search params
        replace(`${pathname}?${params.toString()}`);
        }, 300); // 1/3 of a second gap before replacing url - user must pause

    return (
        <input className="bg-white border-primary rounded-md p-1 border-solid block w-100"
        type="search"
        placeholder="Search by speaker, leader, or meeting type..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label="Search meetings"/>
    );

}