import * as Progress from 'react-native-progress';
import { View, StyleSheet } from 'react-native';

const progress = 0.7; // 0 → 1

export default function CalorieBar() {
  return (
    <View style={styles.wrapper}>
      <Progress.Bar
        progress={progress}
        width={null}
        height={12}
        color="#4CAF50"
        unfilledColor="#E0E0E0"
        borderWidth={0}
        borderRadius={8}
        style={{ flex: progress }}
      />

      <View style={styles.divider} />

      <Progress.Bar
        progress={1} // full
        width={null}
        height={12}
        color="#F44336" // red
        unfilledColor="#E0E0E0"
        borderWidth={0}
        borderRadius={8}
        style={{ flex: 1 - progress }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    // width: '100%',
    height: 12,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  divider: {
    width: 2,
    height: 100,
    backgroundColor: '#fff', 
    marginHorizontal: 5
  },
});

