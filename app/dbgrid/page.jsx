import AnexoIforma from "@/components/AnexoIforma"
import Animacion from "@/components/Animacion"
import Efectos from "@/components/Efectos"
import Listado from "@/components/Listado"

const DbgridPage = () => {

    return (
        <>
            <div className="container mx-auto h-screen ">

                <div className=" grid grid-cols-4 gap-2">
                    <div className="cardx">

                        <Animacion />

                        {/* separacion de componentes */}

                        <Efectos />

                        {/* separacion de componentes */}

                        <AnexoIforma />

                    </div>


                    {/*  Esta es Otra Seccion va el Listado.jsx que esta vinculado con Bermusers.jsx*/}
                    <div className="cardx col-span-2 ">

                        <main className="grid-cols-1  bg-slate-800 p-6 ">
                            <Listado />

                        </main>

                    </div>

                    <div className="cardx">

                        <h1 className=" text-center text-black">INFORMACIO TARJETA</h1>
                        <p>
                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered thet over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
export default DbgridPage