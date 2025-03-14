import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text,TextInput, SafeAreaView } from 'react-native';
import ProductsCard from './components/ProductsCard'
import data from './data.json'

export default function App() {
  const renderStore = ({ item }) => <ProductsCard store={item} />
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ListHeaderComponent={()=>(
        <>
          <Text style={styles.header_text} >Store</Text>
          <TextInput style={styles.textInput} placeholder='Search...'/>
        </>
      )}
        data={data}
        renderItem={renderStore}
        keyExtractor={item => item.id}
        numColumns={2}
        key={`flatlist-${2}`}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
  },
  header_text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'purple',
    marginTop:10,
    padding:5,
  },
  textInput:{
    backgroundColor:'#EDEFF1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
