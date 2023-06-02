import { Text, TextProps } from './Themed';

export function TextUrdu(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: 'NotoNastaliqRegular', fontWeight: 'normal' }]}
    />
  );
}
