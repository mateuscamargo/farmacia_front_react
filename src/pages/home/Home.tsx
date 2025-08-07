
function Home() {
    return (
        <>
            <div className= "min-h-screen bg-indigo-900 text-white flex justify-center items-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h1 className='mt-30 text-5xl text-center'>TREND CURA</h1>
                        <h3 className='text-3xl text-center'>Farmácia</h3>
                        <p className='text-xl pt-6'>
                            Conheça nossos produtos
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white border-white border-solid border-2 py-2 px-4'>
                                Comprar
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home