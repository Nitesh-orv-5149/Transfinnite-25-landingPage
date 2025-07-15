interface CardProps {
    title: string; 
    subtitle?: string;
}

export default function SimpleCard({title, subtitle} : CardProps) {
    return (
        <div className="relative">
            <div className="bg-gradient-to-b from-zinc-500 to-black border-b-2 rounded-2xl shadow-lg overflow-hidden mb-8 w-40 md:w-50 p-8 flex flex-col items-center">
                <h3 className="font-bold text-xl capitalize">{title}</h3>
                <h4 className="">{subtitle}</h4>
            </div>
        </div>
    );
}