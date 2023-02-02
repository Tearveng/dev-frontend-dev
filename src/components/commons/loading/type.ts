import { ISpinnerProps, } from "native-base";
import { IHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { ReactNode } from "react";

export interface LoadingProps {
    containerStyle?: IHStackProps;
    spinnerStyle?: ISpinnerProps;
    heading?: Heading | undefined;
}

interface Heading {
    left?: boolean | undefined;
    right?: boolean | undefined;
    text?: ReactNode | ReactNode[] | string | number | undefined;
}