export interface Data {
  id: number;
  name: string;
  address: string;
  sensitivities: ("LactoseIntolerance" | "GlutenIntolerance" | "NutAllergy" | "None")[];
  isThereAnyCandyLeft: boolean;
}

export interface FormData {
  name: string;
  address: string;
  sensitivities: ("LactoseIntolerance" | "GlutenIntolerance" | "NutAllergy" | "None")[];
  isThereAnyCandyLeft: boolean;
}

