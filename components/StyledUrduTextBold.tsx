import { Text, TextProps } from './Themed';

export function TextUrduBold(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'NotoNastaliqBold', fontWeight: 'normal' }]}
    />
  );
}
