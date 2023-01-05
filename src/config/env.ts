import {Platform} from "react-native";
import Config from "react-native-config";

export const API_URL = Platform.OS === "web" ? process.env.API_URL : Config.API_URL;
