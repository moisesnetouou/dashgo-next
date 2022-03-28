/* eslint-disable no-console */
import { Flex, Icon, Input } from '@chakra-ui/react';
// import { useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

// Controlled components -> dEstados que são controlados salvos dentro do estado

// Uncrontrolled components -> Acessamos o estado apenas quando queremos (Ref)
// Imperativo vs Declarativa

export function SearchBox() {
  // const [search, setSearch] = useState(''); -> Controlled
  // debounce -> evita que a busca seja feita a cada digito
  // const searchInputRef = useRef<HTMLInputElement>(null);

  // console.log(searchInputRef.current.value); // Imperativo

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400',
        }}
        // value={search}
        // onChange={event => setSearch(event.target.value)}
        // ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
