interface BaseProps {
  onFileChange?: (
    pickerResult: any,
    arrayBuffer: ArrayBuffer | undefined,
    base64: string | undefined,
  ) => void;
}

export type FilePickerMobileProps = BaseProps;

export type FilePickerWebProps = BaseProps;
