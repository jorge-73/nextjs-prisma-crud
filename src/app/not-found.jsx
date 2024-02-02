import Link from "next/link"

const NotFound = () => {
  return (
    <section className='flex h-[calc(100vh-7rem)] justify-center items-center'>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Not Found</h1>
        <Link href={"/"} className="text-xl">
          Volver al Inicio
        </Link>
      </div>
    </section>
  )
}

export default NotFound