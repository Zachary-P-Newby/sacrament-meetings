"use client"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const query = params.get('query') ?? null;

    

    const currentPage = Number(searchParams.get('page')) || 1;
    let prevPage = currentPage -1;
    if(prevPage < 1){
        prevPage = 1
    }

    let nextPage = currentPage + 1;
    if(nextPage > totalPages){
        nextPage = totalPages;
    }

    let prevURL;
    let nextURL;

    if(!query){
        prevURL = `${pathname}?page=${prevPage}`;
        nextURL = `${pathname}?page=${nextPage}`;

    }else{
        prevURL = `${pathname}?query=${query}&page=${prevPage}`;
        nextURL = `${pathname}?query=${query}&page=${nextPage}`;
    }

     
    return(
        <nav aria-label="Pagination" className=" border-2 border-body-text border-solid rounded-lg p-2 text-center block bg-white mb-10">
            <span>Page {currentPage} of {totalPages}   </span>
            <Link href={prevURL} className="border-2 border-accent border-solid rounded-lg py-.5 px-1 hover:bg-accent hover:text-background"> Previous </Link>{'  '}/{'  '}<Link href={nextURL} className="border-2 border-primary border-solid rounded-lg py-.5 px-1 hover:bg-primary hover:text-background"> Next </Link> 
        </nav>
    );
}