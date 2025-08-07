import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    const data = new Date().getFullYear()

    return (
        <footer className="bg-sky-700 text-white py-4 px-8 relative">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                <div className="flex flex-col items-start">
                    <p className="mb-1">Acesse nossas redes sociais</p>
                    <div className="flex gap-3">
                        <a href="#" target="_blank" rel="noreferrer">
                            <LinkedinLogo size={28} weight="bold" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <InstagramLogo size={28} weight="bold" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer">
                            <FacebookLogo size={28} weight="bold" />
                        </a>
                    </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-sm font-semibold">
                        Farmácia | Copyright: {data}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
