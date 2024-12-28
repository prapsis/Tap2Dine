export default function PageHeader({ title }: { title: string }) {
    return (
        <div className="mt-4 mb-4">
            <h1 className="text-xl font-semibold">{title}</h1>
        </div>
    )
}
