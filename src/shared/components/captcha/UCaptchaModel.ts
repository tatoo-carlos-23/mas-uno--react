export interface IUCaptchaProps {
    label: string;
    required?: boolean;
    value: string;
    changeValue: (val: string) => void;
    disabled?: boolean;
    placeholder?: string;
}