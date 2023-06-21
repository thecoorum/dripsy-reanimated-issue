import { styled, useSx } from "dripsy";
import { useEffect } from "react";

import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedView = styled(Animated.View)({
  height: 100,
  width: 100,
  borderRadius: 100,
  backgroundColor: "$grey",
});

export const DripsyAnimatedComponent = ({ style, position }) => {
  const sx = useSx();

  const offset = useSharedValue(0);

  useEffect(() => {
    switch (position) {
      case "left":
        offset.value = withSpring(-40);
        break;
      case "right":
        offset.value = withSpring(40);
        break;
      case "center":
        offset.value = withSpring(0);
        break;
    }
  }, [position]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <AnimatedView style={[sx(style), animatedStyle]} entering={FadeInDown} />
  );
};
