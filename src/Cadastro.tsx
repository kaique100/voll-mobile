import {VStack, Image, Text, Box, FormControl, Input, Button, Link, Checkbox} from 'native-base'
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { useState } from 'react';

export default function Cadastro() {

    const [numSecao, setNumSecao] = useState(0);
    const secoes =[
      {
        id: 1,
        titulo: "Insira alguns dados básicos",
        entradaTexto: [
          {
            id:1,
            label: 'Nome',
            placeholder: 'Digite seu nome completo'
          },
          {
            id:2,
            label: 'Email',
            placeholder: 'Digite seu email'
          }
        ],
        checkbox: []
      },
      {
        id: 2,
        titulo: "Agora, mais alguns dados sobre você:",
        entradaTexto: [
          {
            id:1,
            label: 'CEP',
            placeholder: 'Digite seu CEP'
          },
          {
            id:2,
            label: 'Email',
            placeholder: 'Digite seu email'
          },
          
        ],
        checkbox: []
        
      },
      {
        
        id: 2,
        titulo: "Para finalizar, quais são os seus planos?",
        entradaTexto: [],
        checkbox: [
          {
            id: 1,
            value: 'Sulamerica'
          },
          {
            id: 2,
            value: 'Unimed'
          }
        ]
        
          
        
        
      },
      
    ]
      
  
    function avancarSecao() {
     if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao+1)
     }
    }
      
  
    function voltarSecao() {
     if (numSecao > 0) {
      setNumSecao(numSecao-1)
     }
    }


  return(
      <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
          <Image source={Logo} alt="Logo Voll" />

          <Titulo >
            {secoes[numSecao].titulo}
          </Titulo>
          
          <Box>
         {
          secoes[numSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}
            ></EntradaTexto>
          })
         }
          </Box>
          <Box>
         {
          secoes[numSecao].checkbox.map(checkbox => {
            return <Checkbox key={checkbox.id} value={checkbox.value}>
              {checkbox.value}
            </Checkbox>
          })
         }
          </Box>

         {numSecao > 0 &&  <Botao onPress={() => voltarSecao()} bg='gray.400'>Voltar</Botao>}
          <Botao onPress={() => avancarSecao()} mt={4}>Avançar</Botao>

      
      </VStack>
  );
}

// Código omitido