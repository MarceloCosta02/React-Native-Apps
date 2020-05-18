import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Input, Submit, Title, Form, List } from './styles'
import Repository from 'c:/reactnative/RealmOffline/src/components/Repository/index'

export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar Repositório..."
        />

        <Submit onPress={() => {}} >
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
        
      </Form>

      <List
        keyboardShouldPersistTaps="handled" // fecha o teclado quando clicar na lista
        data={[
          {
            id: 1,
            name: "uniform",
            description: "teste",
            stars: 1234,
            forks: 1234
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Repository data={item} />
        )}
      />

    </Container>
  );
}
