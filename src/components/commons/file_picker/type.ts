interface BaseProps {
  onFileChange?: (
    pickerResult: any,
    arrayBuffer: ArrayBuffer,
    base64: string,
  ) => void;
}

export type FilePickerMobileProps = BaseProps;

export type FilePickerWebProps = BaseProps;
