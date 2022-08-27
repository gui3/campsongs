import { createContext } from "react"

const AppContext = createContext()
AppContext.displayName = 'AppContext';
export { AppContext }

const ThemeContext = createContext()
ThemeContext.displayName = 'ThemeContext';
export { ThemeContext }

const MetadataContext = createContext()
ThemeContext.displayName = 'MetadataContext';
export { MetadataContext }

const LogContext = createContext()
LogContext.displayName = "LogContext"
export { LogContext }
