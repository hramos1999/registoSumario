import Sumario from './Sumario'

const Sumarios = ({sumarios,onOpen}) => {
    return (
        <>
            {sumarios.map((sumario) =>(
                 <Sumario key={sumario.id} 
                 sumario={sumario}
                 onOpen = {onOpen}
                 />
            ))}
        </>
    )
}

export default Sumarios;