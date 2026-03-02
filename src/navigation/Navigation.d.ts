import {RootStackParamList} from './Routes';

declare global {
    namespace ReactNavigation {
        // Corrected interface name to match convention
        interface RootParamList extends RootStackParamList {}
    }
}