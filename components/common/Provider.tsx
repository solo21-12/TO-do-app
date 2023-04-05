import { ReactNode } from "react";
import { Provider } from "react-redux"
import { store } from "../../utils/store";
const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Providers;