import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Akord, Auth } from '@akord/akord-js'

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D"
  }
})

const handle = async () => {

  const { wallet } = await Auth.signIn("", "");
  const akord = await Akord.init(wallet)

  const vaults = await akord?.vault.list()
  const vault = vaults.items[0]

  console.log(vault)
}

export default function App() {

  return (
    <View style={style.container}>
      <View style={style.main}>
        <TouchableOpacity onPress={() => { handle() }} >
          <Text style={style.title}>Hello World</Text>
        </TouchableOpacity>
        <Text style={style.subtitle}>This is the first page of your app!</Text>
      </View>
    </View>
  )
}
