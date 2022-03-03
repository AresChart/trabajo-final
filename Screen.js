import { View, Text, TouchableOpacity } from "react-native";


const Screen  = () => {
    return (
        <View>
            <Text>Perfil</Text>
            <TouchableOpacity style={{marginLeft:20, width: 190, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}}>
                <Text style={{color:'white', fontSize: 17}}>Reproducir</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Screen;