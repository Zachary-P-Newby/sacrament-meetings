'use client'


export default function CurrentDate(){
    const currentDate: Date = new Date();

    return (
        <div>
            <h1 className="font-barlow font-bold text-3xl">{`${currentDate.getFullYear()}/${currentDate.getDate()}/${currentDate.getMonth()}`}</h1>

        </div>)
}