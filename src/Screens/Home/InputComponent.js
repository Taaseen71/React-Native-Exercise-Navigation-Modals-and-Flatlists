
import {View, Text } from 'react-native'
import globalStyle from '../../globalStyle'
import InputField from '../../Components/InputField';

const InputComponent = ({title, getter, setter}) => {
    return (
      <View style={globalStyle('row').flexDirection}>
        <Text style={globalStyle(1).centerView}>{title}: </Text>
        <InputField 
          style={[globalStyle(1).centerView]} 
          text={getter} 
          onChangeText={setter}
        />
      </View>
    )
  }

  export default InputComponent