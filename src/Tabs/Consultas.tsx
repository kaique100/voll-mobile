import { VStack, Text, Divider, ScrollView } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'

export default function Consultas(){
  return(
    <ScrollView p="5">
      <Titulo color="blue.500">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>

      <CardConsulta
        nome="Dr. Kaique"
        especialidade='Cardiologista'
        foto='https://github.com/kaique100.png'
        data='20/20/2002'
        foiAgendado
       
      />

      <Divider mt={5}/>

      <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>

      <CardConsulta
        nome="Dr. Kaique"
        especialidade='Cardiologista'
        foto='https://github.com/kaique100.png'
        data='20/20/2002'
        foiAtendido
       
      />

      <CardConsulta
        nome="Dr. Kaique"
        especialidade='Cardiologista'
        foto='https://github.com/kaique100.png'
        data='20/20/2002'
        foiAtendido
       
      />

        <CardConsulta
          nome="Dr. Kaique"
          especialidade='Cardiologista'
          foto='https://github.com/kaique100.png'
          data='20/20/2002'
          foiAtendido
        
        />
    </ScrollView>
  )
}